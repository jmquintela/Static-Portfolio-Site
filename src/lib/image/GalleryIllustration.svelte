<script lang="ts">
	import ImageLoader from '$lib/image/ImageLoader.svelte';
	export let galleryName;
	export let galleryDescription;
	export let client;
	export let productionCompany;
	export let productionCompanyWeb;
    export let images;
	export let height ;
	export let width;
  


</script>

<div class="works_container">
	
	{#if galleryName !== undefined }
	<div class="name">
	  {galleryName}
	</div>
	{/if}

	{#if galleryDescription !== undefined }
	<div class="desc"> 
		{galleryDescription}
	</div>

	{/if}
	

	{#if client !== undefined }
	<div class="client">
	  <div class="title" >Client &nbsp</div> | {client}
	</div>
	{/if}


	{#if productionCompanyWeb !== undefined }
	<div class="production_company">
		<div class="title" >Production Company |</div>
	<a href={productionCompanyWeb} >
		 {productionCompany}
	</a>
	</div>
	 
	{/if}
	
</div>

 <div class="carousel">
  <div class="carousel_container">
	
	{#each images as images}


		<ImageLoader src={images.filePath} alt={images.name} id={images.id} {height} {width}/>

	{/each}

  </div>
 </div>



<style>
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
		 width: auto;
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
		 font-weight: bold;
		 font-size: 22;
		 min-width:max-content;
		 position:relative;
		 padding-left: 10px ;
		 padding-right: 10px;
		 
	 }
	 .client{
		 display:flex;
		 flex-direction: row;
		 flex-wrap: no-wrap ;
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
		align-content: center;
		justify-content: center;
		position:relative;
		z-index: 10;
		margin: 0 auto;
		padding:0 auto;
		width: 100%;
		height: 100% ;
		min-height: 100vh;
	}
    
	.carousel_container {

		display:flex;
		flex-direction: row;
		flex-wrap: wrap ;
		gap: 6px 6px;
		width:fit-content;
		height: 100% ;
		padding-left: 10px ;
		padding-right: 10px ;
		position: relative;
		z-index: 10;
		align-content: center;
		justify-content: center;
		
	}



</style>
