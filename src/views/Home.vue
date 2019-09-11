<template>
  <div class="home">
    <form>
      <input type="search" v-model="term" placeholder="Search Movie">
      <input type="submit" @click.prevent="getMovies">
    </form>

    <div v-if="loading">
      Carregando...
    </div>

    <ul class="listMovie">
      <li class="listMovie__item" v-for="movie in movies" :key="movie.imdbID">
        <router-link class="listMovie__link" :to="movie.imdbID">
          <img class="listMovie__image" :src="movie.Poster" :alt="movie.Title">
          <span class="listMovie__description">
            <p class="listMovie__year">{{movie.Year}}</p>
            <p class="listMovie__type">{{movie.Type}}</p>
          </span>
          <h3 class="listMovie__title">{{movie.Title}}</h3>
        </router-link>
      </li>
    </ul>
  </div>
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
      movies: {}
    }
  },
  components: {
  },
  methods: {
    getMovies() {
      this.loading = true
      api.get(this.term)
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
  .listMovie {
    display: inline-grid;
    padding: 0;
    margin: 0;
    list-style: none;
    transition: ease all .5s;
  }

  .listMovie li {
    text-align: center;
    padding: 5%;
    transform: scale(0.95);
    transition: ease all 0.3s;
    box-shadow: 0 1px 6px 12px transparent;
  }

  .listMovie li:hover {
    transform: scale(1);

  }
  .listMovie li img{
    margin: 0 auto;
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


</style>