console.log('Hola from gail');

const gailComics = document.querySelector('#gail-comics');

const URL_VARIABLE = URL1;

fetch(URL_VARIABLE)
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
