import { InserirFilmesNaTela } from "./main.js";

export const apiKey = '8170b8cda453ecac53cffbe899523eed';
let movies = []; 

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`)
  .then(response => response.json())
  .then(data => {
    movies = data.results.slice(0, 10); 
    InserirFilmesNaTela(movies);
  })
  .catch(error => {
    console.error('Ocorreu um erro ao obter os filmes populares:', error);
  });

const home = document.querySelector('.cabecalho__titulo');
home.addEventListener('click', () => {
  InserirFilmesNaTela(movies);
  document.getElementById('cabecalho__checkbox').checked = false;
  document.querySelector('.card__lista-vazia').style.display = 'none';
});
