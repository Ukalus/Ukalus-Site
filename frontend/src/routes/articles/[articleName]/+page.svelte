<script lang="ts">
    import Three from "../../../components/Three.svelte";
    import { marked } from "marked";
    import { githubToken } from "src/config"; 
    import {createClient, queryStore, gql} from "@urql/svelte";
    export let data;
    const client = createClient({
  url: 'https://api.github.com/graphql',
  fetchOptions: () => {
    return {
      headers: { authorization: `Bearer ${githubToken}` },
    };
  },
});
$: folderPath = data.articleFolderName.params.articleName
    $: articleQuery = queryStore({
        client: client,
        query: gql`
        query RepoFiles($folderName: String!){
  repository(owner: "ukalus", name: "Articles") {
    object(expression: $folderName) {
      ... on Tree {
        entries {
          name
          type
          mode
          object {
        
            ... on Blob {
              byteSize
              text
              
              isBinary
            }
                }
        }
      }
    }
  }
}
        `,
        variables: {folderName: "HEAD:" + folderPath},
        pause: folderPath === undefined
    })   
    $: articleObject = $articleQuery.data?.repository.object.entries
    console.log(articleObject)
    function formatMarkdownHtml(markdown: string){
      
      //formating before turning into HTML
      markdown.replace(/\n/g, "\n ");
      let compiledHtml = marked.parse(markdown,{smartypants: true, gfm: true})
      //formating after turned into HTML
      compiledHtml = wrapComponent("<div>","</div>",compiledHtml);
      return compiledHtml;
    }

    function wrapComponent(componentHead: string,componentTail: string,markdownFile: string,){
      let wrapBegin = [...markdownFile.matchAll(/<table>/gm)]
      let wrapEnd = [...markdownFile.matchAll(/<\/table>/gm)]
      let counter = 0;

      for(let i in wrapBegin){
        let indexBegin = wrapBegin[i].index
        let indexEnd = wrapEnd[i].index
        markdownFile = markdownFile.slice(0,indexBegin + counter) + componentHead + markdownFile.slice(indexBegin + counter);
        counter = counter + componentHead.length
        markdownFile = markdownFile.slice(0,indexEnd + counter + "</table>".length) + componentTail + markdownFile.slice(indexEnd + counter + "</table>".length);
        counter = counter + componentTail.length
      }
      return markdownFile
    }
  </script>

  {#if $articleQuery.fetching}
  <p>Loading</p>
  {:else}
    {#each articleObject as entries, i}
    <br>
    {#if entries.name == "article.md"}
    <div class=" flex flex-col items-center w-full">
      <div class="p-10 border rounded w-[1200px]">
        {@html formatMarkdownHtml(entries.object.text)}

        
      </div>
    </div>
   
    {/if}
    {/each}
  {/if}



  
 
