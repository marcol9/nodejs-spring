<script>
  import Thing from "./Thing.svelte";
  let user = { loggedIn: false };
  let number = 7;
  function toggle() {
    user.loggedIn = !user.loggedIn;
  }
  let cats = [
    { id: "J---aiyznGQ", name: "Keyboard Cat" },
    { id: "z_AbfPXTKms", name: "Maru" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
  ];
  let things = [
    { id: 1, color: "darkblue" },
    { id: 2, color: "indigo" },
    { id: 3, color: "deeppink" },
    { id: 4, color: "salmon" },
    { id: 5, color: "gold" },
  ];

  function handleClick() {
    things = things.slice(1);
  }
</script>

{#if user.loggedIn}
  <button on:click={toggle}> Log out</button>
{:else}
  <button on:click={toggle}> Log in</button>
{/if}

{#if number > 10}
  <p>The number {number} is more than 10</p>
{:else if number < 5}
  <p>The number {number} is less than 5</p>
{:else}
  <p>The number {number} is between 5 and 10</p>
{/if}

<h1>The famous cats</h1>

{#each cats as { id, name }, i}
  <li>
    <a href="https://www.youtube.com/watch?v={id}">{i + 1}. {name}</a>
  </li>
{/each}

<button on:click={handleClick}> Remove first thing </button>

<div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 1em">
  <div>
    <h2>Keyed</h2>
    {#each things as thing (thing.id)}
      <Thing current={thing.color} />
    {/each}
  </div>

  <div>
    <h2>Unkeyed</h2>
    {#each things as thing}
      <Thing current={thing.color} />
    {/each}
  </div>
</div>
