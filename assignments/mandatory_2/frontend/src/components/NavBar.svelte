<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Login from "../pages/Login.svelte";
  import { loggedin, cart } from "../store/loggedin";
  import { apiurl, weburl } from "../store/apiurl.js";
  import Register from "../pages/Register.svelte";
  import ResetPassEmail from "../pages/ResetPassEmail.svelte";
  import ResetPassword from "../pages/ResetPassword.svelte";
  import AddItem from "../pages/AddItem.svelte";
  import ViewItems from "../pages/ViewItems.svelte";
  import UpdateItem from "../pages/UpdateItem.svelte";
  import PcsAndLaptops from "../pages/PcsAndLaptops.svelte";
  import Accessories from "../pages/Accessories.svelte";
  import Phones from "../pages/Phones.svelte";
  import Tablets from "../pages/Tablets.svelte";
  import Cart from "../pages/Cart.svelte";

  export let role;
  export let username;

  let auth = false;
  loggedin.subscribe((a) => (auth = a));
  function logOut() {
    fetch(apiurl + "/logout", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "/";
  }
</script>

<Router>
  <div class="container">
    <nav class="navbar navbar-expand-sm rounded navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <Link to="/" class="nav-link">
                <img src="logo.png" alt="" width="60" height="66" />
              </Link>
            </li>
            {#if role == "admin"}
              <li class="nav-item dropdown  text-link">
                <a class="nav-link dropdown-toggle" id="dropdown09" data-bs-toggle="dropdown" aria-expanded="false">Manage items</a>
                <ul class="dropdown-menu" aria-labelledby="dropdown09">
                  <li><Link to="/admin/add-item"><a class="dropdown-item" href="/admin/add-item">Add new item</a></Link></li>
                  <li><Link to="/admin/view-items"><a class="dropdown-item" href="/admin/view-items">View items</a></Link></li>
                </ul>
              </li>

              <li class="nav-item  text-link">
                <Link to="/admin/manage-orders">
                  <a class="nav-link" href="/admin/manage-orders">Manage orders</a>
                </Link>
              </li>
            {:else}
              <li class="nav-item text-link">
                <Link to="/view-items-category/pcs-and-laptops">
                  <a class="nav-link" href="/view-items-category">PC's and Laptops</a>
                </Link>
              </li>
              <li class="nav-item  text-link">
                <Link to="/view-items-category/phones">
                  <a class="nav-link" href="/view-items-category">Phones</a>
                </Link>
              </li>
              <li class="nav-item  text-link">
                <Link to="/view-items-category/tablets">
                  <a class="nav-link" href="/view-items-category">Tablets</a>
                </Link>
              </li>
              <li class="nav-item  text-link">
                <Link to="/view-items-category/accessories">
                  <a class="nav-link" href="/view-items-category">Accessories</a>
                </Link>
              </li>
            {/if}
          </ul>
          <Link to="/cart">
            <button class="nav-link cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                />
              </svg>
              {$cart.length}
            </button>
          </Link>
          {#if auth == true}
            <p class="nav-link">Hi, {username}</p>
            <button
              on:click={() => {
                logOut();
              }}
              class="nav-link">Log out</button
            >
          {/if}
          {#if auth == false}
            <Link to="/login" class="nav-link "><button>Log in</button></Link>
            <Link to="/register" class="nav-link"><button>Sign up</button></Link>
          {/if}
        </div>
      </div>
    </nav>
  </div>
  <Route path="/login" component={Login} />
  <Route path="/admin/add-item" component={AddItem} />
  <Route path="/register" component={Register} />
  <Route path="/resetpassemail" component={ResetPassEmail} />
  <Route path="/reset-password" component={ResetPassword} />
  <Route path="/admin/view-items" component={ViewItems} />
  <Route path="/admin/update-item/*">
    <UpdateItem {role} />
  </Route>
  <Route path="/view-items-category/pcs-and-laptops" component={PcsAndLaptops} />
  <Route path="/view-items-category/accessories" component={Accessories} />
  <Route path="/view-items-category/phones" component={Phones} />
  <Route path="/view-items-category/tablets" component={Tablets} />
  <Route path="/cart" component={Cart} />
</Router>

<style>
  .navbar-nav {
    align-items: center;
  }
  .text-link {
    border-width: 0.8px;
    border-color: #000000;
    border-style: solid;
    border-radius: 3px;
  }
  a:hover {
    text-decoration: none;
  }
  .nav-link,
  .dropdown-item {
    color: rgba(0, 0, 0, 0.55);
  }
  .text-link:hover {
    background-color: rgb(235, 235, 235);
  }
  .nav-item {
    margin-right: 20px;
  }
  button,
  .nav-link {
    margin-bottom: 0px;
  }
  .cart {
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
  }
</style>
