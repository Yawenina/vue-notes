<template>
  <div id="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
  import Toolbar from './components/Toolbar.vue'
  import NotesList from './components/NotesList.vue'
  import Editor from './components/Editor.vue'

  export default {
    components:{
      Toolbar,
      NotesList,
      Editor
    }
  }
</script>

<style>
  html,#app{height: 100%}
</style>