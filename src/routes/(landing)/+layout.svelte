<script lang="ts">
	import logoWhiteUrl from '$lib/assets/logo-black.png';
	import { getLandingNavBarItems, getLandingSocialItems } from '$src/lib/helper/config.helper';

	const navBarItems = getLandingNavBarItems();
	const socialItems = getLandingSocialItems();

	//#region Nav Menu
	let isMenuShown: boolean = false;
	function toggleMenu() {
		if (!isMenuShown) {
			openMenu();
		} else {
			closeMenu();
		}
	}
	function openMenu() {
		isMenuShown = true;
		document.body.addEventListener('click', closeMenu);
	}
	function closeMenu() {
		isMenuShown = false;
		document.body.removeEventListener('click', closeMenu);
	}

	let dropDownMenu: HTMLElement;
	//#enderegion
</script>

<div class="h-screen flex flex-col">
	<nav class="flex bg-zinc-900 justify-between items-center relative">
		<div class="p-4">
			<a href="/">
				<img alt="The website logo" src={logoWhiteUrl} width="110" />
			</a>
		</div>

		<!-- For small screen -->
		<div class="flex md:hidden">
			<button on:click|stopPropagation={toggleMenu}>
				<i class="fa-solid fa-bars text-white text-3xl px-4" />
			</button>
		</div>
		{#if isMenuShown}
			<div
				bind:this={dropDownMenu}
				class="md:hidden bg-zinc-700 flex flex-col absolute top-[4.5rem] items-center w-full py-4"
				on:click|stopPropagation
			>
				{#each navBarItems as navBarItem}
					<a
						href={navBarItem.url}
						on:click={closeMenu}
						class="text-white font-bold text-lg text-center py-3 hover:bg-zinc-800 w-full"
					>
						{navBarItem.text}
					</a>
				{/each}
				<a
					on:click={closeMenu}
					role="button"
					href="/login"
					class="bg-slate-500 hover:bg-slate-600 text-white px-4 py-3 text-lg font-extrabold mt-4 flex items-center space-x-2"
				>
					<i class="fa-solid fa-right-to-bracket" />
					<p>Portal Login</p>
				</a>
			</div>
		{/if}

		<!-- Anything else -->
		<div class="hidden md:flex grow items-center justify-between mx-4">
			<div class="flex-initial">
				{#each navBarItems as navBarItem}
					<a href={navBarItem.url} class="text-white font-bold text-lg px-3">
						{navBarItem.text}
					</a>
				{/each}
			</div>
			<a
				role="button"
				href="/login"
				class="bg-slate-500 hover:bg-slate-600 text-white px-4 py-3 text-lg font-extrabold flex items-center space-x-2"
			>
				<i class="fa-solid fa-right-to-bracket" />
				<p>Portal Login</p>
			</a>
		</div>
	</nav>

	<div class="grow">
		<slot />
	</div>

	<footer class="bg-zinc-300 flex flex-col items-center text-gray-500 p-4 space-y-2 text-center">
		<nav class="flex flex-row text-sm">
			<a href="/about">About</a>
			<div class="mx-2">&bull;</div>
			<a href="/privacy">Privacy</a>
			<div class="mx-2">&bull;</div>
			<a href="/contact">Contact</a>
		</nav>
		<div class="flex space-x-2">
			{#each socialItems as socialItem}
				<a href={socialItem.url} class="text-lg">
					<i class={socialItem.faIcon} />
				</a>
			{/each}
		</div>
		<small class="text-xs"> Tom Tok Man Chan &copy; 2023 All rights reserved</small>
	</footer>
</div>
