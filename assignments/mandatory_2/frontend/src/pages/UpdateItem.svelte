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
    timeOut: "1000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
  import { apiurl, weburl } from "../store/apiurl.js";
  import { onMount } from "svelte";
  import { Route } from "svelte-navigator";
  import PrivateRouteGuard from "../components/PrivateRouteGuard.svelte";

  export let role;

  let item = {
    id: "",
    name: "",
    price: "",
    category: "",
    description: "",
    inStock: "",
  };

  const url = window.location.pathname;
  const id = url.substring(url.lastIndexOf("/") + 1);
  console.log(id);

  onMount(() => {
    fetch(apiurl + "/item/" + id, {
      redentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        const status = response.status;
        switch (status) {
          case 200:
            toastr["success"]("Item fecthed succesfully");
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
        item.id = resJson.data.id;
        item.name = resJson.data.name;
        item.price = resJson.data.price;
        item.category = resJson.data.category;
        item.description = resJson.data.description;
        item.inStock = resJson.data.inStock;
      });
  });
  function updateItem(item) {
    fetch(apiurl + "/item/" + id, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item), // body data type must match "Content-Type" header
    }).then((response) => {
      const status = response.status;
      switch (status) {
        case 200:
          toastr["success"]("Updated succesfully");
          setTimeout(() => {
            window.location.href = "/admin/view-items";
          }, 1500);
          break;
        case 429:
          toastr["warning"]("Too many attempts, try again later");
          break;
        default:
          toastr["error"]("Something went  wrong, contact admin on try again later");
      }
    });
  }
</script>

<PrivateRouteGuard />
<main class="form-signin">
  <form>
    <img class="mb-4" src="logo.png" alt="" width="60" height="66" />
    <h1 class="h3 mb-3 fw-normal">Update selected item</h1>

    <div class="form-floating">
      <input bind:value={item.id} type="number" class="form-control" id="floatingInput" disabled />
      <label for="floatingInput">ID</label>
    </div>
    <div class="form-floating">
      <input bind:value={item.name} type="text" class="form-control" id="floatingInput" />
      <label for="floatingInput">Name</label>
    </div>
    <div class="form-floating">
      <input bind:value={item.price} type="number" class="form-control" id="floatingInput" />
      <label for="floatingInput">Price</label>
    </div>
    <div class="form-floating">
      <input bind:value={item.category} type="text" class="form-control" id="floatingInput" />
      <label for="floatingInput">Category</label>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Description</label>
      <textarea bind:value={item.description} class="form-control" id="exampleFormControlTextarea1" rows="5" />
    </div>
    <div class="form-floating">
      <input bind:value={item.inStock} type="number" class="form-control" id="floatingInput" />
      <label for="floatingInput">In stock</label>
    </div>

    <button on:click|preventDefault={() => updateItem(item)} class="w-100 btn btn-lg btn-primary" type="submit">Update item</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
  </form>
</main>

<style>
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }

  .form-signin .form-floating:focus-within {
    z-index: 2;
  }

  .form-label {
    text-align: left;
    opacity: 0.65;
  }
</style>
