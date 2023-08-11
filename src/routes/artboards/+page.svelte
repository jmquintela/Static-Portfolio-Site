<script lang="ts">
	import GalleryDesign from '$lib/image/GalleryDesign.svelte';
    import {createGallery} from '$lib/GallerySet.js' ;
   
    
    let height2= "1.1"; 
    let width = "1.1";
    

let filePath =  "/images/artboards/";
let ext = ".jpg";

let name = "ArtBoards & Character Design";

let images = createGallery(21 ,2, filePath, "", ext );

</script>

<svelte:head>
	<title>Storyboard Portfolio</title>
	<meta name="description" content="Storyboard" />
</svelte:head>

<main>
    <div class="gallery">
 <GalleryDesign   galleryName={name}  images={images} height={height2} {width}/>
    
   </div>

</main>

<style>
    .gallery{

        padding-top: 20px;
    }
</style>