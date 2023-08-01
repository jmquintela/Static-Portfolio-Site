<script >
	
	import { onMount } from 'svelte';
	export let src;
	export let alt;
	export let id;
	export let height; 
	export let width; 

	let loaded = false;
	let thisImage;
	let innerWidth = 0;
    let innerHeight = 0;

	onMount(() => {
	
	thisImage.onload = () => {
		
	loaded = true
	}

}); 

</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="container" style="height: auto;width:auto; max-height:{innerHeight / height }px; max-width:{innerWidth / width }px; "  >
	
<img {src} {alt} class:loaded bind:this={thisImage} loading="lazy" id={id}  style="height: auto;width:auto; max-height:{innerHeight / height }px; max-width:{innerWidth / width }px; " />


</div>

<style>
		
	.container{

		display: flex;
		 flex-direction:row;
		  flex-wrap:nowrap;
		  margin-top: 10px;
		  justify-content: center;
	}
	img {
		
		box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
	    opacity: 0;
	  	transition: opacity 1200ms ease-in;
	}
	img.loaded {
	  opacity: 1;
	}
  </style>

  