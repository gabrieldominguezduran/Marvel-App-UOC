require('dotenv').config();
console.log('Hola from trina');

const URL2 = `https://gateway.marvel.com:443/v1/public/creators/5278/comics?ts=1&apikey=${process.env.MARVEL_API_PUBLIC_KEY}&hash=${process.env.MD5_HASH}`;
const trinaComics = document.querySelector('#trina-comics');

fetch(URL2)
  .then((response) => response.json())
  .then((json) => {
    json.data.results.map((c) => {
      let anchor = document.createElement('a');
      anchor.href = `${c.urls[0].url}`;
      let img = document.createElement('img');
      img.src = `${c.thumbnail.path}.${c.thumbnail.extension}`;
      trinaComics.appendChild(anchor);
      anchor.appendChild(img);

      let title = document.createElement('h3');
      title.textContent = `${c.title}`;
      trinaComics.appendChild(title);
    });
  });
