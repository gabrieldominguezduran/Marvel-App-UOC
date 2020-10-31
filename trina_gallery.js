console.log('Hola from trina');

const trinaComics = document.querySelector('#trina-comics');
const URL_VARIABLE2 = URL2;

fetch(URL_VARIABLE2)
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
