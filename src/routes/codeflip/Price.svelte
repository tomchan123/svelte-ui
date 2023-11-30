<script lang="ts">
	export let isSpecial: boolean = false;
	export let price: number;
	export let title: string;

	let textColorClass: string;
	let bgColorClass: string;
	let heightClass: string;
	let buttonClass: string;

	if (isSpecial) {
		textColorClass = 'text-white';
		bgColorClass = 'bg-gradient-to-tr from-cf-red to-cf-orange';
		heightClass = 'h-[30rem]';
		buttonClass = 'bg-black text-white';
	} else {
		textColorClass = 'text-black';
		bgColorClass = 'bg-white';
		heightClass = 'h-[27rem]';
		buttonClass = 'bg-white text-cf-black border border-cf-black';
	}
</script>

<div
	class="rounded-3xl w-72 {heightClass} px-9 flex flex-col justify-between relative drop-shadow-2xl {bgColorClass} {textColorClass}"
>
	<!-- Only show show icons if it is sepcial-->
	{#if isSpecial}
		<div
			class="absolute bg-cf-purple text-white rounded-full text-xs px-3 py-1 -translate-x-1/2 -translate-y-1/2 left-1/2 box-border text-opacity-90"
		>
			Recommended
		</div>
		<div
			class="rounded-full w-16 h-16 absolute bg-white left-full -translate-x-1/2 -translate-y-1/2"
		>
			<i
				class="fa-solid fa-heart text-center bg-gradient-to-l from-cf-red to-cf-orange bg-clip-text text-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl rotate-12"
			/>
		</div>
	{/if}
	<div>
		<h3 class="font-semibold text-2xl mt-8">{title}</h3>
		<p class="text-xs my-7">
			Includes everything available in starter plan, plus:
		</p>
		<ul class="text-xs flex flex-col space-y-3 list-disc list-outside pl-3">
			<li>Unlimted GPT-4 uses</li>
			<li>2000 GPT-5 per month</li>
			<li>Ability to remotely connect to other workspaces</li>
		</ul>
	</div>
	<div class="flex flex-col">
		<em class="text-3xl not-italic font-medium">${price.toFixed(2)}/mo</em>
		<small>Billed annually</small>
		<small>${(price + 3).toFixed(2)} per month, billed monthly</small>
		<button class="{buttonClass} rounded-full text-center py-3 mt-6 mb-6"
			>Buy</button
		>
	</div>
</div>
