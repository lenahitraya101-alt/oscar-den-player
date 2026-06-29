const API_KEY = "AIzaSyCt3UaI_g5o3alle4cG1de93Kf3w_DMGzQ";
const PLAYLIST_ID = "PLFAHF2YV2uz0&si=PM5rL4P3caG01Vnz";
const MAX_RESULTS = 50;
async function loadPlaylist() {
  const url =
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${MAX_RESULTS}&playlistId=${PLAYLIST_ID}&key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
}

loadPlaylist();
