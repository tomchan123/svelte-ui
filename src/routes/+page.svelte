<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={() => { count++; num++; }}>Count is: { count }</button>
<p>random nuber: { num }</p>

<script>
    let count = 0;
    
    let num = 0;
    $: num += 1;
</script>