<template>
  <main>
    <img class="pageMovie" :src="movie.Poster" :alt="movie.Title">
    <div class="container">
      <div class="movie__main">
        <div v-if="loading">
          Carregando...
        </div>
        <section v-else class="movie__section movie__poster">
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
      </div>
    </div>
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
  align-items: center;
  height: 100vh;
}
.movie__section {
  text-align: left;
  flex: 1 1;
  z-index: 1;
  font-size: 20px;
  text-shadow: 1px 1px #00000099;
}
.movie__section img {
  margin: 0 auto;
}
.pageMovie {
  background-repeat: no-repeat;
  background-size: contain;
  background-blend-mode: hard-light;
  position: absolute;
  margin: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  object-fit: cover;
  filter: blur(20px);
  z-index: 0;
}
</style>
