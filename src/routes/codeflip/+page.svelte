<script lang="ts">
	import bgImgUrl from '$lib/assets/codeflip/bg-top.png';
	import phoneBigImgUrl from '$lib/assets/codeflip/phone-big.png';
	import phoneSmallImgUrl from '$lib/assets/codeflip/phone-small.png';
	import phonesImgUrl from '$lib/assets/codeflip/phones.png';
	import Step from './Step.svelte';
</script>

<div class="font-poppins bg-cf-beige">
	<!-- Nav -->
	<nav class="flex h-[10vh] justify-between items-center px-16 text-cf-black">
		<h1 class="p-2 text-center font-bold text-xl"><a href="/codeflip">CodeFlip</a></h1>
		<div class="flex space-x-10 text-center text-sm">
			<h3 class="p-2"><a href="/codeflip#home">Home</a></h3>
			<h3 class="p-2"><a href="/codeflip#home">Pricing</a></h3>
			<h3 class="p-2"><a href="/codeflip#home">Reviews</a></h3>
			<h3 class="p-2"><a href="/codeflip#home">FAQ</a></h3>
		</div>
		<button class="border w-24 h-8 rounded-2xl text-sm text-center border-cf-black">Login</button>
	</nav>

	<!-- Home -->
	<section class="h-[90vh]">
		<h1 class="text-6xl/normal font-semibold text-center mx-auto relative z-10">
			Open your coding <br /> world with a new app
		</h1>
		<img src={phonesImgUrl} alt="Two phones" class="h-[28rem] mx-auto relative bottom-10 z-20" />
		<button
			class="text-lg text-white bg-cf-black w-52 h-14 rounded-2xl mx-auto flex justify-center items-center space-x-2 relative z-20"
		>
			<p>Get started</p>
			<i class="fa-solid fa-link" />
		</button>
		<img
			src={bgImgUrl}
			alt="Background pattern"
			class="w-[100vw] h-[80vh] bottom-0 absolute object-fill z-0"
		/>
	</section>

	<section>
		<h2 class="text-4xl font-bold text-center mt-24 mb-14">How it works</h2>
		<div class="flex justify-center space-x-8">
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
			<img src={phoneBigImgUrl} alt="Bigger phone" class="h-[24rem] scale-[120%] origin-center" />
			<img src={phoneSmallImgUrl} alt="Small phone" class="h-[24rem]" />
		</div>
		<div class="flex justify-center space-x-8 relative">
			<Step
				num={3}
				title="Download the app"
				content="Download the latest version of the coding app from any where around the world on any
            other devices."
			/>
			<Step
				num={4}
				title="Take the test"
				content="Download the latest version of the coding app from any where around the world on any
            other devices."
			/>
		</div>
	</section>
</div>
