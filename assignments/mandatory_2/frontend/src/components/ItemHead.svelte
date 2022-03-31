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
  </tr>
</thead>
