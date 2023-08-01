<script lang="ts">
	import GalleryStory from '$lib/image/GalleryStory.svelte';
    import {createGallery} from '$lib/GallerySet.js' ;
    let height = "1.1"
    
    let height2= "1.2"; 
    let width = "1.2";
    

let filePath =  "/images/storyboards/";
let ext = ".jpg";

let pcomp = "Mamba Studio";

let pcompweb = "https://mambastudio.tv/";


let images = createGallery(35 ,2, filePath+"03/", "", ext );
let videos = [
    
    {
        video : "https://player.vimeo.com/video/728731363?h=02db50482d"
}
]  ;
</script>

<svelte:head>
	<title>Storyboard Portfolio</title>
	<meta name="description" content="Storyboard" />
</svelte:head>

<main>
    <div class="gallery">
  
        <GalleryStory videos={videos}  client={"N-sure"} productionCompanyWeb={pcompweb} productionCompany={pcomp} images={images} {height}{width} />
    
 
   </div>

</main>

<style>
    .gallery{

        padding-top: 20px;
    }
</style>