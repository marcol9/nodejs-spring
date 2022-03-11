<script>
  const sausage = {
    name: "Sausage",
    age: 4,
    address: "Puppet street",
  };
  export let name = sausage.name;
</script>

<h1>{name}</h1>
<h1 id="dog" on:mouseover={() => console.log("woof")}>🐕</h1>

<style>
  #dog {
    font-size: 150px;
  }
</style>
