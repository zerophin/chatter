let domain = "https://www.reddit.com/submit.json?url=";

async function getSubreddits(url) {
  console.log("searching", url);
  try {
    const endpoint = domain + url;
    let blob = await fetch(endpoint)
    let parsedData = await blob.json()
    console.log("Got:", parsedData);
    let sortedSubreddits =
      parsedData?.data?.children?.filter(a => !a.data.subreddit.startsWith('u_'))
        .sort((a, b) => b.data.ups - a.data.ups)
    return sortedSubreddits ?? [];
  } catch (e) {
    console.log(e);
  }

}

module.exports = getSubreddits;

