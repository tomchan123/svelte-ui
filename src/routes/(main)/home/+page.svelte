<script lang="ts">
	import homeVideoPoster from '$lib/assets/home-video-screenshot.jpg';
	import homeVideo from '$lib/assets/home-video.mp4';
	import { getLandingGirdItems } from '$src/lib/helper/config.helper';
	import { onMount, tick } from 'svelte';

	export let data;

	onMount(async () => {
		updateCountBar();
	});

	let gridItems = getLandingGirdItems();

	//#region Like Counter Section
	let likeCountBar: HTMLElement;
	let dislikeCountBar: HTMLElement;

	let likeStatus: 'liked' | 'disliked' | null = null;
	let likeCount: number = data.likeCounterData.likes;
	let dislikeCount: number = data.likeCounterData.dislikes;
	let likePercent = getLikePercent();

	function getLikePercent(): number {
		const totalCount = likeCount + dislikeCount;
		if (totalCount == 0) {
			return 0;
		}

		return (likeCount / totalCount) * 100;
	}

	async function onLike() {
		if (likeStatus == 'liked') {
			likeStatus = null;
			likeCount--;
			updateLikeCountRemote('unlike');
		} else {
			if (likeStatus == 'disliked') {
				dislikeCount--;
				updateLikeCountRemote('undislike');
			}
			likeStatus = 'liked';
			likeCount++;
			updateLikeCountRemote('like');
		}

		await tick();
		updateCountBar();
	}

	async function onDislike() {
		if (likeStatus == 'disliked') {
			likeStatus = null;
			dislikeCount--;
			updateLikeCountRemote('undislike');
		} else {
			if (likeStatus == 'liked') {
				likeCount--;
				updateLikeCountRemote('unlike');
			}
			likeStatus = 'disliked';
			dislikeCount++;
			updateLikeCountRemote('dislike');
		}

		await tick();
		updateCountBar();
	}

	function updateCountBar() {
		if (!!likeCountBar && !!dislikeCountBar) {
			updateCountBarByElements(likeCountBar, dislikeCountBar);
		}
	}

	function updateCountBarByElements(likeCountBar: HTMLElement, dislikeCountBar: HTMLElement) {
		likePercent = getLikePercent();

		likeCountBar.style.width = `${likePercent}%`;
		dislikeCountBar.style.width = `${100 - likePercent}%`;
	}

	async function updateLikeCountRemote(action: 'like' | 'dislike' | 'unlike' | 'undislike') {
		fetch(`/data/like-counter?action=${action}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
	//#endregion
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
	<section class={`w-full p-10 bg-[url('/src/lib/assets/home-section-background.png')] bg-cover`}>
		<div
			class="md:max-w-4xl md:grid md:grid-cols-2 md:grid-flow-row md:auto-rows-auto md:gap-8 md:space-y-0 flex flex-col space-y-8 mx-auto"
		>
			{#each gridItems as gridItem}
				<a
					class={`flex flex-col bg-white drop-shadow-xl 
						${gridItem.rowSpan} ${gridItem.colSpan} 
						${gridItem.orientation === 'vertical' ? 'md:flex-col' : 'md:flex-row md:h-48'} 
						md:hover:scale-[105%] transition-transform hover:bg-gray-200}
						hover:bg-slate-200`}
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
	<section class="bg-white p-8">
		<h2 class="text-2xl text-center mb-8 font-bold">
			{likePercent.toFixed(1)}% people like this page
		</h2>
		<div
			class="flex justify-center flex-wrap space-y-2 md:items-center md:space-x-0 md:space-y-0 md:flex-nowrap"
		>
			<div class="flex w-full flex-wrap justify-center h-12 md:order-2 md:max-w-3xl">
				{#if likeCount + dislikeCount > 0}
					<div class="flex w-full h-10">
						<div bind:this={likeCountBar} class="bg-green-700 w-1/2" />
						<div bind:this={dislikeCountBar} class="bg-red-700 w-1/2" />
					</div>
					<div class="flex justify-between w-full text-gray-500 text-sm">
						<small><b class="font-bold">{likeCount}</b> votes</small>
						<small><b class="font-bold">{dislikeCount}</b> votes</small>
					</div>
				{:else}
					<div
						class="w-full h-12 bg-gray-300 text-zinc-700 font-bold justify-center items-center flex"
					>
						No Data Yet
					</div>
				{/if}
			</div>
			<button
				on:click={onLike}
				class="text-green-500 hover:text-green-700 text-4xl p-4 md:order-1 mx-2"
				title="like"
			>
				<i class="fa-thumbs-up {likeStatus === 'liked' ? 'fa-solid' : 'fa-regular'} " />
			</button>
			<button
				on:click={onDislike}
				class="text-red-500 hover:text-red-700 text-4xl p-4 md:order-3 mx-2"
				title="dislike"
			>
				<i class="fa-thumbs-down {likeStatus === 'disliked' ? 'fa-solid' : 'fa-regular'} " />
			</button>
		</div>
	</section>
</div>
