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


let images = createGallery(38 ,2, filePath+"04/", "", ext );
let videos = [
    
    {
        video : "https://player.vimeo.com/video/657104764?h=95fd29f112"
}
]  ;

</script>

<svelte:head>
	<title>Storyboard Portfolio</title>
	<meta name="description" content="Storyboard" />
</svelte:head>

<main>
    <div class="gallery">
     
        <GalleryStory videos = {videos}  client={"Trisquel: One Day at a Time"} productionCompanyWeb={pcompweb4} productionCompany={pcomp4} images={images} {height}{width} />
 
   </div>

</main>

<style>
    .gallery{

        padding-top: 20px;
    }
</style>