<script lang="ts">
	import sectionBackground from '$lib/assets/home-section-background.png';
	import homeVideoPoster from '$lib/assets/home-video-screenshot.jpg';
	import homeVideo from '$lib/assets/home-video.mp4';
	import { getLandingGirdItems } from '$src/lib/helper/config.helper';

	let gridItems = getLandingGirdItems();
	const sectionBackgroundClass = `bg-[url('${sectionBackground}')]`;
</script>

<!-- Vidoe Background -->
<video
	autoplay
	loop
	muted
	poster={homeVideoPoster}
	class="h-screen w-screen object-cover -z-10 fixed"
>
	<source src={homeVideo} type="video/mp4" />
	Your browser does not support this video
</video>

<div class="flex flex-col">
	<!-- Entry Section -->
	<section class="h-96 flex flex-col justify-center min-w-max w-full items-center bg-transparent">
		<h1 class="text-5xl md:text-6xl font-bold text-white text-center leading-tight">
			Don't Think. <br />Just Do It.
		</h1>
		<a
			role="button"
			href="/about"
			class="mt-8 text-lg font-semibold px-6 py-3 bg-slate-300 hover:bg-slate-500 text-zinc-700 hover:text-zinc-300"
		>
			Get Started
		</a>
	</section>

	<!-- Project Display Section-->
	<section class="w-full p-10 bg-[url('/src/lib/assets/home-section-background.png')] bg-cover">
		<div
			class="md:max-w-4xl md:grid md:grid-cols-2 md:grid-flow-row md:auto-rows-auto md:gap-8 md:space-y-0 flex flex-col space-y-8 mx-auto"
		>
			{#each gridItems as gridItem}
				<a
					class={`flex flex-col bg-white drop-shadow-xl 
						${gridItem.rowSpan} ${gridItem.colSpan} 
						${gridItem.orientation === 'vertical' ? 'md:flex-col' : 'md:flex-row md:h-48'} 
						md:hover:scale-[105%] transition-transform hover:bg-gray-200}`}
					href={gridItem.url}
				>
					<div
						class={`h-40 relative ${
							gridItem.orientation === 'horizontal' ? 'md:w-[85rem] md:h-auto' : ''
						}`}
					>
						<img
							src={gridItem.bgImgUrl}
							alt="A Starfield Character"
							class="h-full w-full object-cover object-top"
						/>
						<h3 class="text-white absolute bottom-4 left-4 text-3xl font-bold">{gridItem.title}</h3>
					</div>
					<p class="p-6 text-sm">{gridItem.content}</p>
				</a>
			{/each}
		</div>
	</section>

	<!-- Like Counter Section-->
	<section class="bg-white">
		<h2>Do you like this home page?</h2>
	</section>
</div>
