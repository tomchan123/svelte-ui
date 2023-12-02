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
</script>

<nav
	bind:this={navEl}
	class="flex justify-between items-center px-16 text-cf-black sticky top-0 z-30 transition-all duration-500 {stickNavClasses}"
>
	<h1 class="p-2 text-center font-bold text-xl">
		<a href="/">CodeFlip</a>
	</h1>
	<div class="flex space-x-10 text-center text-sm">
		<h3 class="p-2"><a href="/codeflip#home">Home</a></h3>
		<h3 class="p-2"><a href="/codeflip#home">Pricing</a></h3>
		<h3 class="p-2"><a href="/codeflip#home">Reviews</a></h3>
		<h3 class="p-2"><a href="/codeflip#home">FAQ</a></h3>
	</div>
	<button
		class="border w-28 h-8 rounded-2xl text-sm text-center border-cf-black"
		>Login</button
	>
</nav>
