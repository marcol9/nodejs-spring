<script>
  import toastr from "toastr";
  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: "toast-top-center",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "1500",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
  import { apiurl, weburl } from "../store/apiurl.js";
  import { onMount } from "svelte";
  import ItemRow from "../components/ItemRow.svelte";
  import ItemHead from "../components/ItemHead.svelte";
  let items = [];

  onMount(() => {
    fetch(apiurl + "/items", {
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        const status = response.status;
        switch (status) {
          case 200:
            toastr["success"]("Items fecthed succesfully");
            break;
          case 429:
            toastr["warning"]("Too many attempts, try again later");
            break;
          default:
            toastr["error"]("Something went really wrong, contact admin on try again later");
        }
        return response.json();
      })
      .then((resJson) => {
        items = resJson.data;
      });
  });
</script>

<table>
  <ItemHead />
  <tbody>
    {#each items as item}
      <ItemRow {item} />
    {/each}
  </tbody>
</table>

<style>
</style>
