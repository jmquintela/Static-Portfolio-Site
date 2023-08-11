<script lang="ts">
	import GalleryDesign from '$lib/image/GalleryDesign.svelte';
    import {createGallery} from '$lib/GallerySet.js' ;
    let height = "1.1"
    
    let height2= "1.2"; 
    let width = "1.2";
    

let filePath =  "/images/logos/";
let ext = ".jpg";

let name = "Logo Design";


let images = createGallery(15 ,2, filePath, "", ext );

</script>

<svelte:head>
	<title>Storyboard Portfolio</title>
	<meta name="description" content="Storyboard" />
</svelte:head>

<main>
    <div class="gallery">
 <GalleryDesign   galleryName={name} images={images} height={height2} {width}/>
    
   </div>

</main>

<style>
    .gallery{

        padding-top: 20px;
    }
</style>