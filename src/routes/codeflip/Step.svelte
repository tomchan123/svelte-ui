<script lang="ts">
	export let num: number | undefined = undefined;
	export let title: string | undefined = undefined;
	export let content: string | undefined = undefined;
</script>

<article
	class="flex bg-white rounded-2xl justify-items-between pr-8 drop-shadow-2xl"
>
	<h3
		class="text-[6rem] from-cf-red to-cf-orange bg-gradient-to-r bg-clip-text text-center text-transparent w-44"
	>
		{num}
	</h3>
	<div class="flex flex-col justify-center space-y-2">
		<h4 class="font-semibold text-base">{title}</h4>
		<p class="text-xs/4">
			{content}
		</p>
	</div>
</article>
