<script>
  export let item = {
    name: "",
    price: "",
    category: "",
    inStock: "",
  };
  const keys = Object.keys(item);
</script>

<thead>
  <tr>
    {#each keys as key}
      <th>{key}</th>
    {/each}
    <th>Update</th>
    <th>Delete</th>
  </tr>
</thead>
