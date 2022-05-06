<script>
  import ItemBox from "../components/ItemBox.svelte";
  import { apiurl, weburl } from "../store/apiurl.js";
  import { onMount } from "svelte";

  let items = [];
  onMount(() => {
    fetch(apiurl + "/items-by-category?category=" + "pcs-and-laptops")
      .then((response) => {
        return response.json();
      })
      .then((resJson) => {
        items = resJson.data;
      });
  });
</script>

<h2>PC's and laptops</h2>
<div class="container">
  <div class="row row-cols-auto">
    {#each items as item}
      <div class="col"><ItemBox {item} /></div>
    {/each}
  </div>
</div>

<style>
  .col {
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
