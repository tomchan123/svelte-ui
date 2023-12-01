<script lang="ts">
	import { slide } from 'svelte/transition';

	let isOpened = false;
	let colorClasses: string, iconClasses: string, buttonClasses: string;

	$: {
		if (isOpened) {
			iconClasses = 'fa-solid fa-minus text-cf-red';
			buttonClasses = 'bg-white';
			colorClasses = 'text-white bg-gradient-to-r from-cf-red to-cf-orange';
		} else {
			iconClasses = 'fa-solid fa-plus text-white';
			colorClasses = 'text-cf-black bg-white';
			buttonClasses = 'bg-cf-black';
		}
	}

	export let question: string;
	export let answer: string =
		"Certainly! You can cancel your subscription hassle-free by accessing the app's settings. If you need further assistance, our support team is available to guide you through the cancellation process.";
</script>

<div
	class="rounded-3xl p-6 drop-shadow-xs transition-all duration-500 {colorClasses}"
>
	<div class="flex justify-between items-center">
		<h2 class="font-bold text-lg">{question}</h2>
		<button
			class="rounded-full w-7 h-7 {buttonClasses}"
			on:click={() => {
				isOpened = !isOpened;
			}}
		>
			<i class="text-base {iconClasses}" />
		</button>
	</div>
	{#if isOpened}
		<div transition:slide={{ duration: 500, axis: 'y' }}>
			<div class="h-4" />
			<hr class="border border-white" />
			<div class="h-4" />
			<p class="text-sm">{answer}</p>
		</div>
	{/if}
</div>
