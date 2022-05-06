<script>
  import { cart } from "../store/loggedin";

  function addItemToCart(item) {
    cart.update((storeValue) => {
      storeValue.push(item);
      return storeValue;
    });
  }

  export let item = {
    name: "",
    price: "",
    category: "",
    inStock: "",
    description: "",
    picture: "",
  };
  if (item.description.length > 100) item.description = item.description.substring(0, 100) + " ...";
</script>

<div class="card">
  <img src={item.picture} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text">{item.description}</p>
    <button on:click|preventDefault={addItemToCart(item)} class="btn btn-primary">Add to cart</button>
    <a href="#" class="btn btn-secondary">Read more</a>
  </div>
</div>

<style>
  .card {
    width: 18rem;
  }
</style>
