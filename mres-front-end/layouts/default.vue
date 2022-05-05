<template>
    <div class="body">
        <NavBar />
        <Nuxt />
        <Footer />
    </div>
</template>
<style>
body{
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
}

* {
    margin: 0;
    padding: 0;
    font-family: arial;
    text-decoration: none; 
    box-sizing:border-box;
}

footer {
    position: sticky;
    top: 100%;
    display: block;
}

.body{
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: 100vh;
}

</style>