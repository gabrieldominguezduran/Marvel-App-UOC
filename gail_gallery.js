console.log('Hola from gail');

const URL1 = `https://gateway.marvel.com:443/v1/public/creators/519/comics?ts=1&apikey=${env.MARVEL_API_PUBLIC_KEY}&hash=${env.MD5_HASH}`;
const gailComics = document.querySelector('#gail-comics');

fetch(URL1)
  .then((response) => response.json())
  .then((json) => {
    json.data.results.map((c) => {
      let anchor = document.createElement('a');
      anchor.href = `${c.urls[0].url}`;
      let img = document.createElement('img');
      img.src = `${c.thumbnail.path}.${c.thumbnail.extension}`;
      gailComics.appendChild(anchor);
      anchor.appendChild(img);

      let title = document.createElement('h3');
      title.textContent = `${c.title}`;
      gailComics.appendChild(title);
    });
  });
