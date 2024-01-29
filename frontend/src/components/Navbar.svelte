<script lang="ts">
  import { NavBrand, NavLi, NavUl, Navbar, DarkMode, Span, A } from "flowbite-svelte";
</script>

<Navbar
  fluid
  color="form"
  class="sticky top-0 !z-[39] w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
>
  <div class="flex">
    <NavBrand href="/">
      <img src="./logo.svg" class="  h-6 mr-3 sm:h-9" alt="Ukalus Logo" />
      <Span class="text-black self-center text-xl font-semibold whitespace-nowrap">Ukalus Art</Span>
    </NavBrand>
  </div>
  
  <DarkMode/>
  <NavUl>
    <NavLi>
      <A href="/projects" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Projects</A>
    </NavLi>
  </NavUl>
</Navbar>

