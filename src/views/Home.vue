/* eslint-disable vue/no-duplicate-attributes */
<template>
  <div class="home">
    <div class="app__setings">
      <div class="container">
        <div class="row">
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" :src="dateGit.user.avatarUrl" alt="">
              <div class="card-body">
                <h5 class="card-title">{{dateGit.user.name}}</h5>
                <a class="btn btn-outline-primary" :href="`${dateGit.user.url}`" target="blank">Перейти на гитхаб</a>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <h4 class="display-4">Поиск по репозиториям гитхаба по пользователю <span>{{dateGit.user.name}}</span></h4>
            <vue-bootstrap-typeahead
              v-model="search"
              :data="query"
              placeholder="Найти на гитхабе"
              @hit="selectedUser = $event"
            />
            <br>
            <p class="p-search"><span>Поиск по запросу:</span>{{search}}</p>
              <h3>Найденные репозитории на гите</h3>
              <!-- <pre>{{selectedUser}}</pre> -->
            <div class="card-columns">
              <div class="card" v-for="items in searchRepo " :key="items.url">
                <div class="card-body">
                  <h5 class="card-title">{{items.name}}</h5>
                  <small class="text-muted">Дата обновления:
                    <cite>
                      {{items.updatedAt | moment("MM / YYYY")}}
                    </cite>
                    <br>
                    <br>
                  </small>

                  <a class="btn btn-outline-primary" :href="items.url">Перейти в репо</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  components: {
    /* Repositories,
    UserSearch,
    User */
  },
  data() {
    return {
      search: '',
      query: [],
      dateGit: [],
      selectedUser: null,
      userName: ''
    };
  },
  created () {
    // загружаем данные, когда представление создано
    // и данные реактивно отслеживаются
    this.user()
  },
  computed: {
    // при изменениях маршрута запрашиваем данные снова
    '$route': 'user',
    searchRepo () {
      return this.selectedUser.filter(selectedUser => {
        return selectedUser.name.toLowerCase().includes(this.search.toLowerCase())
      })
      /* var username = 'octocat'
      this.userName = username */
     /*  return this.selectedUser.filter(query => {
        return query.url.toLowerCase().includes(this.search.toLowerCase())
      }) */
      /* axios.get(`https://api.github.com/users/` + username + `/repos`) */
     /*  axios.post(`https://github.com/search?q=user:` + username)
        /* https://github.com/search?q=user%3Adefunkt+forks%3A%3E%3D100&type=Repositories */
        /* .then(response => {
          this.query = response.data
          console.log(this.query)
        })
        .catch(error=>{
          console.log(error)
        }) */
    }
  },
  filters: {
    stringify(value) {
      return JSON.stringify(value, null, 2)
    }
  },
  methods: {
    user () {
      const accessToken = 'aeb89a7ca2e93699fd83e46c0e9c047a29485a37'
      axios({
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${accessToken}`,
          Accept: 'application/vnd.github.v4.idl'
        },
        method: 'POST',
        data: {
          query: `query { 
            user(login: octocat) {
            avatarUrl,
            url,
            name,
             repositories(first: 100 ) {
                totalCount,
                edges {
                  cursor
                },
                nodes {
                  url,
                  name,
                  updatedAt
                }
              }
            }
          }`
        }
      })
      .then(response =>{
        /* this.query = response.data.data */
        this.dateGit = response.data.data
        this.selectedUser = response.data.data.user.repositories.nodes
        /* console.log(this.dateGit) */
        /* for(let key in arr) {
          this.query.push(arr[key].name)
        } */
        /* console.log(arr) */
      })
      .catch (error => {
        console.log(error)
      })
      /* console.log(this.query ) */
    }
  }
};
</script>
<style lang="sass" scoped>
  .home
    margin-top: 30px 
  ul
    li
      list-style-type: none
  .p-search
    font-size: 1.5rem
    color: red
    span
      font-size: 1rem
  .display-4
    font-size: 1.5rem
    span
      font-size: 2rem
      font-weight: bold
</style>
