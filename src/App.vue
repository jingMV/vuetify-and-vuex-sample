<template>
  <v-app id="app">
    <v-card flat color="transparent" class="nav">
    <v-toolbar  flat color="transparent" >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="cont-logo">
        <img width="80px" :src="require('./assets/logo.png')">
        </v-toolbar-title>
    </v-toolbar>
    </v-card>

      <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
      class="drawer"
     >

      <v-list>
        <v-list-item-group v-model="group">
          <v-list-item>
            <v-list-item-title><router-link to="/">Home</router-link></v-list-item-title>
          </v-list-item>

           <v-list-item>
            <v-list-item-title><router-link to="/about">About</router-link></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data: () => ({
    bar: [
      {class: 'elevation-0'}
    ],
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'open sans';
  overflow: hidden
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'open sans';
}
a {
  text-decoration: none;
}
li {
  list-style-type: none;
}
.cont-logo img {
  left: -20px;
  top: 4px;
  position: relative;
}
.nav {
  z-index: 2;
}
.drawer {
  z-index: 10;
}
</style>

