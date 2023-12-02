<script lang="ts">
	import phoneBigImgUrl from '$lib/assets/codeflip/phone-big.png';
	import phoneSmallImgUrl from '$lib/assets/codeflip/phone-small.png';
	import phonesImgUrl from '$lib/assets/codeflip/phones.png';
	import Accordion from './Accordion.svelte';
	import { Footer, Price, Review, Step, Title } from './index';
	import Navbar from './navbar.svelte';

	let navEl: HTMLElement;
	let stickNavClasses: string = 'p-6';

	//#region accordion
	interface AccordionItem {
		question: string;
		isOpened: boolean;
	}

	const accordions: AccordionItem[] = [
		{
			question: 'What features are available in the app?',
			isOpened: false
		},
		{
			question: 'How do you start using GPT-4 inside the code editor?',
			isOpened: false
		},
		{
			question: 'Can I cancel the subscription after the free trial?',
			isOpened: false
		},
		{
			question: 'Does the app provide data privacy and protection?',
			isOpened: false
		}
	];
	//#endregion
</script>

<div
	class="font-poppins bg-cf-beige bg-cf bg-[length:100vw_3000px] bg-no-repeat"
>
	<!-- Nav -->
	<Navbar />

	<div class="w-[1000px] mx-auto">
		<!-- Home -->
		<section class="h-[90vh]">
			<h1
				class="text-6xl/normal font-semibold text-center mx-auto relative z-10"
			>
				Open your coding<br /> world with a new app
			</h1>
			<img
				src={phonesImgUrl}
				alt="Two phones"
				class="h-[50vh] mx-auto relative bottom-10 z-20"
			/>
			<button
				class="text-lg text-white bg-cf-black w-52 h-14 rounded-2xl mx-auto flex justify-center items-center space-x-2 relative z-20"
			>
				<p>Get started</p>
				<i class="fa-solid fa-link" />
			</button>
		</section>

		<!-- How it works -->
		<section class="mt-24">
			<Title>How it works</Title>
			<div class="flex justify-center space-x-8 mt-14">
				<Step
					num={1}
					title="Download the app"
					content="Download the latest version of the coding app from any where around the world on any
            other devices."
				/>
				<Step
					num={2}
					title="Take the test"
					content="Download the latest version of the coding app from any where around the world on any
            other devices."
				/>
			</div>
			<div class="flex justify-center space-x-8 my-4 relative z-10">
				<img src={phoneSmallImgUrl} alt="Small phone" class="h-[24rem]" />
				<img
					src={phoneBigImgUrl}
					alt="Bigger phone"
					class="h-[24rem] scale-[120%] origin-center"
				/>
				<img src={phoneSmallImgUrl} alt="Small phone" class="h-[24rem]" />
			</div>
			<div class="flex justify-center space-x-8 relative">
				<Step
					num={3}
					title="Customize the editor"
					content="Download the latest version of the coding app from any where around the world on any
            other devices."
				/>
				<Step
					num={4}
					title="Coding"
					content="Download the latest version of the coding app from any where around the world on any
            other devices."
				/>
			</div>
		</section>

		<!-- Pricing -->
		<section class="mt-36">
			<Title>Pricing</Title>
			<p class="text-sm mx-auto text-center mt-2 mb-14">
				Choose the subscription plan that is right for you
			</p>
			<div class="flex justify-center items-center space-x-8">
				<Price title="Starter" price={9.99} />
				<Price title="Advanced" price={19.99} isSpecial />
				<Price title="Gold" price={29.99} />
			</div>
		</section>

		<!-- Reviews -->
		<section class="mt-36">
			<Title>Reviews</Title>
			<p class="text-sm mx-auto text-center mt-2 mb-10">
				See what others have to say about the app
			</p>
			<div class="flex justify-center space-x-4">
				<Review name="Tom Chan" role="IT Consultant" />
				<Review name="Jack Cheung" role="Janitor" rating={4.5} />
			</div>
		</section>

		<!-- FAQ -->
		<section class="mt-36">
			<Title>FAQ</Title>
			<div class="flex flex-col mt-10 space-y-6 h-[32rem]">
				{#each accordions as accordion, i}
					<Accordion
						{...accordion}
						on:toggle={(e) => {
							if (!e.detail.oldValue && e.detail.newValue) {
								for (let j = 0; j < accordions.length; j++) {
									if (i != j) {
										accordions[j].isOpened = false;
									} else {
										accordions[j].isOpened = true;
									}
								}
							}
						}}
					/>
				{/each}
			</div>
		</section>

		<!-- Footer -->
		<footer class="pt-16 pb-8 flex w-full justify-between">
			<Footer />
		</footer>
	</div>
</div>

<style>
</style>
