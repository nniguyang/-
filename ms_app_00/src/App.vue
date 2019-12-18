<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<style>
blockquote,body,button,dd,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,hr,input,legend,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0;}
ol,ul{list-style:none;}
a{text-decoration:none;}
input{outline:none;border:none;}
#app {
  font-family:  'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
}
#nav {
  /* padding: 30px; */
}

#nav a {
  /* font-weight: bold;
  color: #2c3e50; */
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
}
</style>
