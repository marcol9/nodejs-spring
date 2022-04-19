<script>
  import ItemBox from "../components/ItemBox.svelte";
  import { apiurl, weburl } from "../store/apiurl.js";
  import { onMount } from "svelte";

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const category = params.category;
  console.log(category);
  let items = [];
  onMount(() => {
    fetch(apiurl + "/items-by-category?category=" + category)
      .then((response) => {
        return response.json();
      })
      .then((resJson) => {
        items = resJson.data;
        console.log(items);
      });
  });
</script>

<div class="container">
  <div class="row row-cols-auto">
    <div class="col"><ItemBox /></div>
    <div class="col"><ItemBox /></div>
    <div class="col"><ItemBox /></div>
    <div class="col"><ItemBox /></div>
    <div class="col"><ItemBox /></div>
    <div class="col"><ItemBox /></div>
    <div class="col"><ItemBox /></div>
    <div class="col"><ItemBox /></div>
    <div class="col"><ItemBox /></div>
    <div class="col"><ItemBox /></div>
    <div class="col"><ItemBox /></div>
    <div class="col"><ItemBox /></div>
    <div class="col"><ItemBox /></div>
    <div class="col"><ItemBox /></div>
    <div class="col"><ItemBox /></div>
    <div class="col"><ItemBox /></div>
    <div class="col"><ItemBox /></div>
    <div class="col"><ItemBox /></div>
    <div class="col"><ItemBox /></div>
    <div class="col"><ItemBox /></div>
    <div class="col"><ItemBox /></div>
    <div class="col"><ItemBox /></div>
  </div>
</div>

<style>
  .col {
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
