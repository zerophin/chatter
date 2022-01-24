<script>
  import Display from "./components/Display.svelte";
  import getSubreddits from './helper/endpoint'

  let searchTerm = "https://www.youtube.com/watch?v=y9kkXTucnLU";
  let subreddits = [];

  const handleSearch = async (searchTerm) => {
    subreddits = await getSubreddits(searchTerm)
  }
  $: handleSearch(searchTerm)
</script>

<main>
    <!--    //<input type="text" value={searchTerm} on:keyup={(e) => debounceSearchTerm(e.target.value)}>-->
    <input bind:value={searchTerm}>
    <h1>{searchTerm}</h1>
    <Display subreddits={subreddits}/>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 1em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
