<script lang="ts">

import ArticleList from "../../components/ArticleList.svelte";
import {createClient, queryStore, gql} from "@urql/svelte"
import { githubToken } from "src/config"; 
    const client = createClient({
  url: 'https://api.github.com/graphql',
  fetchOptions: () => {
    return {
      headers: { authorization: `Bearer ${githubToken}` },
    };
  },
});

    $: articlesQuery = queryStore({
        client: client,
        query: gql`
        query RepoFiles{
  repository(owner: "ukalus", name: "Articles") {
    object(expression: "HEAD:") {
      ... on Tree {
        entries {
          name
          type
          mode
          object {
            ... on Tree {
              entries{
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
    }
  }
}
        `
    })

    $: articles = $articlesQuery.data?.repository.object.entries
    console.log(articles)
</script>

{#if $articlesQuery.fetching}
<p>loading</p>
{:else}
<ArticleList articles={articles}></ArticleList>
{/if}