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
  import { Link } from "svelte-navigator";
  export let item = {
    id: "",
    name: "",
    price: "",
    category: "",
    inStock: "",
  };
  function deleteItem(id) {
    fetch(apiurl + "/item/" + id, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      const status = response.status;
      switch (status) {
        case 200:
          toastr["success"]("Deleted succesfully");
          setTimeout(() => {
            window.location.reload();
          }, 300);
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

<tr>
  <td>{item.name}</td>
  <td>{item.price}</td>
  <td>{item.category}</td>
  <td>{item.inStock}</td>
  <td> <Link to="/admin/update-item/{item.id}"><button>Update item</button></Link></td>
  <td> <button on:click|preventDefault={() => deleteItem(item.id)}>Delete item</button></td>
</tr>
