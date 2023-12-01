<script lang="ts">
	import portraitImgUrl from '$lib/assets/codeflip/portrait.png';
	import { onMount } from 'svelte';

	let ratingEl: HTMLElement;
	const maxRating = 5.0;

	onMount(() => {
		// set rating level
		const ratingPercent = (rating / maxRating) * 100;
		ratingEl.style.setProperty(
			'background-image',
			`linear-gradient(to right, var(--color-cf-red) ${ratingPercent}%, white ${
				1 - ratingPercent
			}%)`
		);
	});

	export let rating = 5.0;
	export let name: string;
	export let role: string;
</script>

<div
	class="flex-col justify-center p-7 w-[30rem] bg-white shadow-2xl rounded-3xl space-y-4"
>
	<div class="flex justify-between">
		<div class="flex items-center">
			<div
				class="w-[3.5rem] h-[3.5rem] rounded-full bg-gradient-to-tl from-cf-red to-cf-orange flex justify-center items-center"
			>
				<img
					alt="Portrait of a man"
					src={portraitImgUrl}
					class="w-[3.2rem] h-[3.2rem] object-cover border-white rounded-full border-4"
				/>
			</div>
			<div class="flex flex-col ml-3">
				<h3 class="text-base font-semibold">{name}</h3>
				<small class="text-gray-400 text-2xs">{role}</small>
			</div>
		</div>
		<div class="flex h-min items-center">
			<p class="text-sm mx-2">{rating.toFixed(1)}</p>
			<div
				bind:this={ratingEl}
				class="flex border-l border-l-gray-300 text-sm space-x-2 px-2 py-1 bg-clip-text"
			>
				{#each Array(maxRating).keys() as num}
					<i class="fa-solid fa-star text-transparent" />
				{/each}
			</div>
		</div>
	</div>
	<p class="text-xs">
		This coding app is phenomenal! It offers an intuitive interface, interactive
		lessons, and a vast language library, catering to all skill levels. Engaging
		challenges and seamless functionality make learning enjoyable.
	</p>
</div>
