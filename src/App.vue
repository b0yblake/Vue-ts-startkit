<template>
  <nav class="flex justify-around flex-row">
    <router-link to="/" class="p-4">Home</router-link>
    <router-link to="/about" class="px-4">About</router-link>
  </nav>
  <ItemsList :title="title" :listItem="listItemAsArray" />

  <router-view></router-view>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const listItemAsArray: any[] = [
      {
        name: "Vue",
        id: 1,
      },
      {
        name: "React",
        id: 2,
      },
      {
        name: "",
        id: 3,
      },
    ]

    const title: String = "List Items"

    return {
      listItemAsArray,
      title,
    }
  }
})
</script>

<style>
</style>
