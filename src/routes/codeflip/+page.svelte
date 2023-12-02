<script lang="ts">
	import phoneBigImgUrl from '$lib/assets/codeflip/phone-big.png';
	import phoneSmallImgUrl from '$lib/assets/codeflip/phone-small.png';
	import phonesImgUrl from '$lib/assets/codeflip/phones.png';
	import Accordion from './Accordion.svelte';
	import { Footer, Price, Review, Step, Title } from './index';
</script>

<div
	class="font-poppins bg-cf-beige bg-cf bg-[length:100vw_3000px] bg-no-repeat h-full"
>
	<!-- Nav -->
	<nav class="flex h-[10vh] justify-between items-center px-16 text-cf-black">
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
			class="border w-24 h-8 rounded-2xl text-sm text-center border-cf-black"
			>Login</button
		>
	</nav>

	<div class="w-[1000px] mx-auto">
		<!-- Home -->
		<section class="h-[90vh]">
			<h1
				class="text-6xl/normal font-semibold text-center mx-auto relative z-10"
			>
				Open your coding <br /> world with a new app
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
				<Accordion question="What features are available in the app?" />
				<Accordion
					question="How do you start using GPT-4 inside the code editor?"
				/>
				<Accordion
					question="Can I cancel the subscription after the free trial?"
				/>
				<Accordion
					question="Does the app provide data privacy and protection?"
				/>
			</div>
		</section>

		<!-- Footer -->
		<footer class="pt-16 pb-8 flex w-full justify-between">
			<Footer />
		</footer>
	</div>
</div>
