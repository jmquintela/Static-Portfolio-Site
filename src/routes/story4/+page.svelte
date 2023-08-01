<script lang="ts">
	import GalleryStory from '$lib/image/GalleryStory.svelte';
    import {createGallery} from '$lib/GallerySet.js' ;
    let height = "1.1"
    
    let height2= "1.2"; 
    let width = "1.2";
    

let filePath =  "/images/storyboards/";
let ext = ".jpg";

let pcomp1 = "Smog";
let pcomp2 = "Leyenda VFX";
let pcomp3 = "Believe";
let pcomp4 = "Crinimo Studio";
let pcomp5 = "Mustache Studio";

let pcompweb1 = "http://www.smog.tv/en";
let pcompweb2 = "http://www.leyenda.cl/";
let pcompweb3 = "http://www.believe.tv/";
let pcompweb4 = "http://www.crinimo.tv/";

let pcompweb5 = "https://mustachestudio.com/";


let images2 = createGallery(13 ,2, filePath+"02/", "", ext );

</script>

<svelte:head>
	<title>Storyboard Portfolio</title>
	<meta name="description" content="Storyboard" />
</svelte:head>

<main>
    <div class="gallery">
 <GalleryStory client={"Miller"} productionCompanyWeb={pcompweb1} productionCompany={pcomp1} images={images2} height={height2} {width}/>
    
   </div>

</main>

<style>
    .gallery{

        padding-top: 20px;
    }
</style>