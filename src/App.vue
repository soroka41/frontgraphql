<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <p class="navbar-brand" >search user repo github (GraphQL-vue-github)</p>
        </div>
        <!-- <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search">
          <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Поиск</button>
        </form> -->
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style lang="sass">
</style>
