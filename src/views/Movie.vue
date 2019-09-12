<template>
  <main class="movie__main">
    <section class="movie__section movie__poster">
      <img :src="movie.Poster" :alt="movie.Title">
    </section>
    <section class="movie__section movie__info">
      <h1>{{movie.Title}}</h1>
      <p>{{movie.Plot}}</p>
      <p>Country: <b>{{movie.Country}}</b></p>
      <p>Director: <b>{{movie.Director}}</b></p>
      <p>Genre: <b>{{movie.Genre}}</b></p>
      <p>Language: <b>{{movie.Language}}</b></p>
      <p>Type: <b>{{movie.Type}}</b></p>
      <p>Runtime: <b>{{movie.Runtime}}</b></p>
      <p>Actors: <b>{{movie.Actors}}</b></p>
      
    </section>
  </main>
</template>

<script>
import { api } from "@/services.js"
export default {
  name: 'movie',
  data() {
    return {
      movie: {},
      id: this.$route.params.id,
      query: 'i=' 
    }
  },
  methods: {
    async getMovies() {
      this.loading = true
      await api.get(this.query,this.id)
        .then(response => {
          this.movie = response.data
          this.loading = false
        })
    }
  },
  mounted() {
    this.getMovies()
  }
}
</script>

<style>
.movie__main {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
}
.movie__section {
  text-align: left;
  flex: 1 1;
}
.movie__section img {
  margin: 0 auto;
}
</style>
