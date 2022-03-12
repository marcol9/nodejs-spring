<script>
  import { faker } from "@faker-js/faker";
  import TableHead from "./TableHead.svelte";
  import TableRow from "./TableRow.svelte";
  const persons = [];
  for (let i = 0; i < 20; i++) {
    let person = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      image: faker.image.avatar(),
      city: faker.address.city(),
      email: faker.internet.email(),
    };
    persons.push(person);
  }
</script>

<table class="styled-table">
  <TableHead />
  <tbody>
    {#each persons as person}
      <TableRow {person} />
    {/each}
  </tbody>
</table>

<style>
  .styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    width: 1000px;
    border-width: 1px;
    margin: auto;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }

  tbody {
    border-bottom: 1px solid #dddddd;
  }
</style>
