<script>
  import Nested from "./components/Nested.svelte";
  import String from "./components/String.svelte";
  import Reactivity from "./components/Reactivity.svelte";
  import Props from "./components/Props.svelte";
  import Logic from "./components/Logic.svelte";
  import Events from "./components/Events.svelte";

  let hello = "world";
  let src = "./image.gif";
  let name = "Rick Astley";
  const pkg = {
    name: "svelte",
    version: 3,
    speed: "blazing",
    website: "https://svelte.dev",
  };
</script>

<main>
  <h1>Hello {hello}!</h1>
  <!-- {src} is short for src={src} -->
  <img {src} alt="{name} dancing" />
  <p>In this beautiful gif you can see gorgeus man dancing</p>
  <p>But note, if you have nested components they</p>
  <Nested />
  <String />
  <div id="section" />
  <h2>Reactivity</h2>
  <Reactivity />
  <div id="section" />
  <h2>Props</h2>
  <Props {...pkg} answer={42} />
  <div id="section" />
  <h2>Logic</h2>
  <Logic />
  <div id="section" />
  <h2>Events</h2>
  <Events />
</main>

<style>
  p {
    font-family: "Franklin Gothic Medium";
    color: blueviolet;
  }
  #section {
    background-color: darkblue;
    height: 5px;
    width: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
