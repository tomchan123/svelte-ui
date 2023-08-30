<script lang="ts">
	let count: number = 0;

	let num = 0;
	$: num += 1;

	let l = 'sd';
</script>

<h1 class="text-xl">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button
	on:click={() => {
		count++;
		num++;
	}}
>
	Count is: {count}
</button>
<p class="text-xl">random nuber: {num}</p>
