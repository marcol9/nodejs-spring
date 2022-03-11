<script>
  let i = 0;
  // the `$:` means 're-run whenever these values change'
  $: double = i * 2;
  $: quadro = double * 4;

  $: if (i >= 10) {
    alert("Count is dangerously high");
  }

  function handleClick() {
    i++;
  }
</script>

<button on:click={handleClick}> Clicked {i} {i === 1 ? "time" : "times"}</button>
<p>{i}*2={double}</p>
<p>{double}*4={quadro}</p>
