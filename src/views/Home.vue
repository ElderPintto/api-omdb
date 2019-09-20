<template>
  <main class="home">
    <div class="container">
      <h1>I Like the Movies</h1>
      <form class="form" @submit.prevent="getMovies">
        <input class="form__input form__search" type="search" v-model="term" placeholder="Search Movie">
        <input class="form__input form__submit" type="submit" >
      </form>

      <div v-if="loading">
        Carregando...
      </div>

      <ul class="listMovie" v-if="movies">
        <li class="listMovie__item" v-for="movie in movies" :key="movie.imdbID">
          <router-link class="listMovie__link" :to="{ name: 'movie', params: { id: movie.imdbID }}">
            <img class="listMovie__image" :src="movie.Poster" :alt="movie.Title">
            <div class="listMovie__description">
              <h3 class="listMovie__title">{{movie.Title}}</h3>   
              <div class="listMovie__line">
                <p class="listMovie__year">{{movie.Year}}</p>
                <p class="listMovie__type">{{movie.Type}}</p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <h2 v-else>No results were found for your search.</h2>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import { api } from "@/services.js"

export default {
  name: 'home',
  data() {
    return {
      loading: false,
      term: '',
      movies: {},
      query: 's='
    }
  },
  components: {
  },
  methods: {
    getMovies() {
      this.loading = true
      api.get(this.query, this.term)
        .then(response => {
          this.movies = response.data.Search
          this.loading = false
        })
    }
  },
  created() {
    this.getMovies()
  }
}
</script>

<style>

  h1 {
    margin: 5vh 0;
  }

  .form {
    margin: 5vh 0;
    display: flex;
    justify-content: center;
  }

  .form__input {
    padding: 20px 30px;
    font-size: 20px;
    outline: none;
  }

  .form__search {
    width: 50%;
    font-family: 'Muli', sans-serif;
  }

  .form__search:focus + .form__submit   {
    width: auto;
    font-size: 20px;
    padding: 20px 30px;
    opacity: 1;
    text-indent: 0
  }

  .form__submit {
    width: 0;
    font-size: 0;
    padding: 0;
    opacity: 0;
    appearance: none;
    border: 0;
    background: #3b535a;
    color: aliceblue;
    cursor: pointer;
    transition: all 500ms;
    text-indent: -500px
  }

  .listMovie {
    display: inline-grid;
    padding: 0;
    margin: 0;
    list-style: none;
    transition: ease all .5s;
    margin: 0 auto;
  }

  .listMovie li {
    text-align: center;
    transform: scale(0.95);
    transition: ease all 0.3s;
    box-shadow: 0 1px 6px 12px transparent;
  }

  .listMovie li a {
    position: relative;
    height: 100%;
    display: block;
  }

  .listMovie li:hover .listMovie__description{
    top: 90%;
    background: red;
  }
  

  .listMovie__description {
    position: absolute;
    width: 100%;
    left: 0;
    top: calc(100% - 135px);
    background: #3b535a;
    transition: all 300ms;
    transition-delay: 310ms
  }

  .listMovie__line {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  

  .listMovie li:hover {
    transform: scale(1);
    z-index: 1;
  }
  .listMovie li:hover img{
    opacity: 0.8;
  }
  .listMovie li img{
    margin: 0 auto;
    min-height: 445px;
    object-fit: cover;
    opacity: 0.1;
    transition: opacity 300ms
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  @media screen and (min-width: 475px){
    .listMovie  {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 768px){
    .listMovie  {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (min-width: 1024px){
    .listMovie  {
      grid-template-columns: repeat(4, 1fr);
    }
  }


</style>