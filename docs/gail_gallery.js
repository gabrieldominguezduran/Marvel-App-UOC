console.log('Hola from gail');

const URL1 = `https://gateway.marvel.com:443/v1/public/creators/519/comics?ts=1&apikey=${process.env.MARVEL_API_PUBLIC_KEY}&hash=${process.env.MD5_HASH}`;
const gailComics = document.querySelector('#gail-comics');

fetch(URL1)
  .then((response) => response.json())
  .then((json) => {
    json.data.results.map((c) => {
      let div = document.createElement('div');
      let img = document.createElement('img');
      img.src = `${c.thumbnail.path}.${c.thumbnail.extension}`;
      img.alt = `Portada del comic ${c.title}`;
      img.loading = `lazy`;
      img.class = `img-gallery`;
      gailComics.appendChild(div);
      div.appendChild(img);

      let anchor = document.createElement('a');
      anchor.href = `${c.urls[0].url}`;
      let title = document.createElement('h3');
      title.textContent = `${c.title}`;
      gailComics.appendChild(div);
      div.appendChild(anchor);
      anchor.appendChild(title);
    });
  });
