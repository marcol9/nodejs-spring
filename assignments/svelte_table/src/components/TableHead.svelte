<script>
  import TableRow from "./TableRow.svelte";
  let person = {
    firstName: "Marco",
    lastName: "Lebocki",
    image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1042.jpg",
    city: "Copenhagen",
    email: "mlebocki@gmail.com",
  };
  const keys = Object.keys(person);
</script>

<thead>
  <tr>
    {#each keys as key}
      <th>{key}</th>
    {/each}
  </tr>
</thead>

<style>
  thead tr {
    background-color: #009879;
    color: #000000;
    text-align: left;
  }
  th {
    padding: 12px 15px;
  }
  tr {
    border-bottom: 1px solid #dddddd;
  }
</style>
