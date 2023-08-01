<script lang="ts">
	import GalleryStory from '$lib/image/GalleryStory.svelte';
    import {createGallery} from '$lib/GallerySet.js' ;
    let height = "1.1"
    
    let height2= "1.2"; 
    let width = "1.2";
    

let filePath =  "/images/storyboards/";
let ext = ".jpg";

let pcomp = "Believe";

let pcompweb = "http://www.believe.tv/";


let images = createGallery(57 ,2, filePath+"05/", "", ext );
let videos = [
   {
        video : "https://www.youtube.com/embed/Ru72MC9Q8P4"
}
]  ;
</script>

<svelte:head>
	<title>Storyboard Portfolio</title>
	<meta name="description" content="Storyboard" />
</svelte:head>

<main>
    <div class="gallery">
 <GalleryStory videos={videos}  client={"Escudo | Festival Frontera"} productionCompanyWeb={pcompweb} productionCompany={pcomp} images={images} height={height2} {width}/>
    
   </div>

</main>

<style>
    .gallery{

        padding-top: 20px;
    }
</style>