<script >
	import ImageLoader from '$lib/image/ImageLoader.svelte';
	export let galleryName;
    export let images;
	export let height ;
	export let width;
	let innerWidth = 0;
    let innerHeight = 0;

</script>
<svelte:window bind:innerWidth bind:innerHeight />
<div class="page_container">
<div class="works_container"  >
	
		{#if galleryName !== undefined }
		<div class="name">
		  {galleryName}
		</div>
		{/if}
	
    	
		
</div>

 <div class="carousel">
  <div class="carousel_container" >

	{#each images as images}
		
		<ImageLoader src={images.filePath} alt={images.name} id={images.id} {height} {width}/>

	{/each}

  </div>
 </div>
</div>


<style>
		.embed-container {
  position: relative;
  
	display: flex;
  padding-bottom: 56.25%;
  width: 100%;
  
  height: 0;
  
  overflow: hidden;
  max-width: 100%;
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
	
  position: absolute;
    top: 0;
  left: 0px;
  width: 100%;
  height: 100%;
}
	.page_container{

display:flex;
flex-direction: column;
flex-wrap: nowrap ;
align-content: center;
width: auto;
height: fit-content;
}
	.works_container{
         
        
		display:flex;
		flex-direction: row;
		flex-wrap: wrap ;
		align-content: center;
		justify-content:space-around;
		position:relative;
		z-index: 10;
		margin-bottom: 10px;
		margin-top: 10px;
		width:auto;
		height: fit-content;
		min-height: fit-content;
		color: rgb(0, 0, 0);
		padding: 10px;
		background-image: linear-gradient(rgb(251, 255, 0),rgb(247, 210, 1));
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	}
	.title {
		font-weight: 700;
		display:flex;
		flex-wrap: nowrap;
	}
	.production_company {

		display:flex;
		flex-wrap: nowrap;
		flex-direction: row;
		align-content: center;
		justify-content: center;
		position:relative;
		color: rgb(0, 0, 0);
		width: fit-content;
		min-width:max-content;
		padding-left: 10px ;
		padding-right: 10px;
		text-decoration:solid;
		
	}
	.production_company a{
		display:flex;
		flex-wrap: nowrap;
		flex-direction: column;
		align-content: center;
		justify-content: center;
		position:relative;
		color: rgb(0, 125, 197);
		width: fit-content;
		min-width:max-content;
		padding-left: 10px ;
		padding-right: 10px;
		text-decoration:solid;
		
	}
	.name{
		display:flex;
		flex-direction: row;
		flex-wrap: nowrap ;
		align-content: center;
		justify-content: center;
		font-size: 20px;
		font-weight: bold;
		min-width:max-content;
		position:relative;
		padding-left: 10px ;
		padding-right: 10px;
		
	}
	.client{
		display:flex;
		flex-direction: row;
		flex-wrap: nowrap ;
		min-width:max-content;
		align-content: center;
		justify-content: center;
		position:relative;
		padding-left: 10px ;
		padding-right: 10px;
		
	}
	.carousel {
		
		display:flex;
		overflow-x:none;
		
		flex-direction: column;
		
		flex-wrap: nowrap ;
		align-content: center;
		justify-content: center;
		position:relative;
		z-index: 10;
		margin: 0 auto;
		padding:0 auto;
		height: auto ;
	}
    
	.carousel_container {

		display:flex;
		flex-direction: column;
		flex-wrap: nowrap ;
		gap: 6px 6px;
		padding-left: 10px ;
		padding-right: 10px ;
		position: relative;
		z-index: 10;
		align-content: center;
		justify-content: center;
		
	}



</style>
