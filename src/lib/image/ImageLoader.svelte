<script lang="ts">

	export let src;
	export let alt;
	export let id;	
	export let height; 
	export let width; 
	import { onMount } from 'svelte';
	import IntersectionObserver from './IntersectionObserver.svelte';
	import Image from './Image.svelte';
  
	let nativeLoading = false
  
	 onMount(() => {
	  if ('loading' in HTMLImageElement.prototype) {
	     nativeLoading = true
	   }
	 })

  </script>
  
  <IntersectionObserver once={true} let:intersecting={intersecting}>
	
	{#if intersecting || nativeLoading}

	  <Image {src}  {alt}  {id} {height} {width} />

	{/if}

</IntersectionObserver> 