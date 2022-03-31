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
  let data = {
    name: "",
    price: "",
    category: "",
    description: "",
    inStock: "",
  };
  function addItem(data) {
    fetch(apiurl + "/items", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then((response) => {
      const status = response.status;
      switch (status) {
        case 200:
          toastr["success"]("Item added succesfully");
          break;
        case 429:
          toastr["warning"]("Too many attempts, try again later");
          break;
        default:
          toastr["error"]("Something went really wrong, contact admin on try again later");
      }
    });
  }
</script>

<main class="form-signin">
  <form>
    <img class="mb-4" src="../logo.png" alt="" width="60" height="66" />
    <h1 class="h3 mb-3 fw-normal">Add new item</h1>

    <div class="form-floating">
      <input bind:value={data.name} type="text" class="form-control" id="floatingInput" required />
      <label for="floatingInput">Name</label>
    </div>
    <div class="form-floating">
      <input bind:value={data.price} type="number" class="form-control" id="floatingPassword" required />
      <label for="floatingPassword">Price</label>
    </div>
    <div class="form-floating">
      <input bind:value={data.category} type="text" class="form-control" id="floatingPassword" required />
      <label for="floatingPassword">Category</label>
    </div>
    <div class="form-floating">
      <input bind:value={data.description} type="text" class="form-control" id="floatingPassword" required />
      <label for="floatingPassword">Description</label>
    </div>
    <div class="form-floating">
      <input bind:value={data.inStock} type="number" class="form-control" id="floatingPassword" required />
      <label for="floatingPassword">No. of products in stock</label>
    </div>

    <button on:click|preventDefault={() => addItem(data)} class="w-100 btn btn-lg btn-primary" type="submit">Add new item</button>
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
</style>
