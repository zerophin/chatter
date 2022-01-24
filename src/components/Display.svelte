<script>
  export let subreddits = [];
</script>

<ul class="container">
    {#each subreddits as page}
        {@const {subreddit, permalink, ups, upvote_ratio} = page.data}
        <li>
            <a href={`https://www.reddit.com${permalink}`}>{subreddit}</a>
            | <span>{ups}&#9650;</span>
        </li>
    {/each}
</ul>

<style>
    ul {
        list-style: none;
    }

    .container {
        position: absolute;
        bottom: 2rem;
        right: 2rem;
        background: purple;
        color: white;
    }
</style>
