<script>
  export let person = {
    firstName: "Marco",
    lastName: "Lebocki",
    image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1042.jpg",
    city: "Copenhagen",
    email: "mlebocki@gmail.com",
  };
</script>

<tr>
  <td>{person.firstName}</td>
  <td>{person.lastName}</td>
  <td><img src={person.image} /></td>
  <td>{person.city}</td>
  <td>{person.email}</td>
</tr>

<style>
  tr {
    background-color: #009879;
    color: #000000;
    text-align: left;
    padding: 12px 15px;
  }

  tr {
    border-bottom: 1px solid #dddddd;
  }

  tr:nth-of-type(odd) {
    background-color: #f3f3f3;
  }

  tr:last-of-type {
    border-bottom: 2px solid #009879;
  }
</style>
