<script>
  //import Inner from "./Inner.svelte";
  import Outer from "./Outer.svelte";

  function handleMessage(event) {
    alert(event.detail.text);
  }
  let position = { x: 0, y: 0 };

  //   function handlePosition(event) {
  //     position.x = event.clientX;
  //     position.y = event.clientY;
  //   }
</script>

<div class="mousemove" on:mousemove={(event) => (position = { x: event.clientX, y: event.clientY })}>
  Mouse position x:{position.x} y:{position.y}
</div>

<button on:click|once={() => alert("You will not see this message again")}>CLick me</button>

<Outer on:message={handleMessage} />

<style>
  .mousemove {
    width: 400px;
    height: 400px;
    margin: auto;
    border-style: solid;
    margin-bottom: 50px;
  }
</style>
