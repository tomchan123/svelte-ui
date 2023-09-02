<script lang="ts">
	import HomeVideoPoster from '$lib/assets/home-video-screenshot.jpg';
	import HomeVideo from '$lib/assets/home-video.mp4';
</script>

<div class="flex flex-col">
	<section class="relative h-72 w-full">
		<!-- Vidoe Background -->
		<video autoplay loop muted poster={HomeVideoPoster} class="h-full w-full object-cover -z-10">
			<source src={HomeVideo} type="video/mp4" />
			Your browser does not support this video
		</video>
		<div
			class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col min-w-max w-full items-center"
		>
			<h1 class="text-5xl md:text-6xl font-bold text-white text-center leading-tight">
				Don't Think. <br />Just Do It.
			</h1>
			<a
				role="button"
				href="/about"
				class="mt-8 text-lg font-semibold px-6 py-4 bg-slate-300 hover:bg-slate-500 text-zinc-700 hover:text-zinc-300"
			>
				Get Started
			</a>
		</div>
	</section>
	<section />
	<section />
</div>
