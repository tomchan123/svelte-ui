<script lang="ts">
	import { onMount } from 'svelte';

	let navEl: HTMLElement;
	let stickNavClasses: string = 'p-6';

	function setup(): () => void {
		const navWatcher = document.createElement('div');
		navWatcher.setAttribute('data-nav-watcher', '');
		navEl.before(navWatcher);

		const navObserver = new IntersectionObserver((entries) => {
			stickNavClasses = entries[0].isIntersecting
				? 'p-6'
				: 'bg-white p-3  drop-shadow-sm';
		});
		navObserver.observe(navWatcher);

		return () => {
			navObserver.disconnect();
		};
	}

	onMount(() => {
		const cleanUp = setup();

		return () => {
			cleanUp();
		};
	});

	$: {
		for (const item of items) {
		}
	}

	export let items: any[];
	export let currentSectionId: string | undefined;
</script>

<nav
	bind:this={navEl}
	class="flex justify-between items-center px-16 text-cf-black sticky top-0 z-30 transition-all duration-500 {stickNavClasses}"
>
	<h1 class="p-2 text-center font-bold text-xl">
		<a href="/">CodeFlip</a>
	</h1>
	<div class="flex space-x-10 text-center text-sm">
		{#each items as item}
			<a
				href={item.url}
				class="p-2 transition-colors {item.id == currentSectionId
					? 'border-b-2 border-cf-red'
					: ''}"><h3>{item.text}</h3></a
			>
		{/each}
	</div>
	<button
		class="border w-28 h-8 rounded-2xl text-sm text-center border-cf-black"
		>Login</button
	>
</nav>
