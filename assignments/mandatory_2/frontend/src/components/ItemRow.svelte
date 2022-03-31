<script>
  import { Link } from "svelte-navigator";
  export let item = {
    id: "",
    name: "",
    price: "",
    category: "",
    inStock: "",
  };
</script>

<tr>
  <td>{item.name}</td>
  <td>{item.price}</td>
  <td>{item.category}</td>
  <td>{item.inStock}</td>
  <td> <Link to="/admin/update-item/{item.id}"><button>Update item</button></Link></td>
</tr>
