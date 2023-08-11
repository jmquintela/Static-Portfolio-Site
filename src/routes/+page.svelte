<script >
	import GalleryCovers from '$lib/image/GalleryCovers.svelte';
  

	let innerWidth = 0;
    let innerHeight = 0;

	let smallw = 300;
	let midw = 550;
	let bigw = 1920;

	let pathMobile = "/images/covers/mobile/";
	let pathDesktop = "/images/covers/desktop/";

let ext2 = "";
let sectionName = [

"ArtBoards & Character Design" ,
"Storyboards",
];

let designsections = [

    {
	
	Name :"ArtBoards & Character Design" ,
	Description :"Korean Beauty Product", 
	Agency:"??",
	ProductionHouse: "Smog",
	ArtDirector:"Moises",
	MyContributions:"Storyboard",
	ProjectStatus:"Client filed the project", 

	Link : "artboards" + ext2 , 
    ImgMobile : pathMobile + "cover6.jpg", 
	ImgDesktop : pathDesktop + "cover6.jpg",
	id:1 ,

	Index:3 },

	{ 
	
	Name :"Logo Design" , 
	Description :"Mental Health Organization",
	Agency:"??",
	ProductionHouse: "Smog",
	Producer:"",
	ArtDirector: "",
	Director: "Moises",
	MyContributions:"Storyboard",
	ProjectStatus:"Currently On Sale",
	Link : "logos" + ext2 ,
	ImgMobile : pathMobile + "cover7.jpg",
	ImgDesktop : pathDesktop + "cover7.jpg",
	id:2 ,
	Index:4
	
}	
];

let storysections = [

    {
	
	Name :"Marubi" ,
	Description :"Korean Beauty Product", 
	Agency:"??",
	ProductionHouse: "Smog",
	ArtDirector:"Moises",
	MyContributions:"Storyboard",
	ProjectStatus:"Client filed the project", 

	Link : "story1" + ext2 , 
    ImgMobile : pathMobile + "cover1.jpg", 
	ImgDesktop : pathDesktop + "cover1.jpg",
	id:1 ,

	Index:12 },

	{ 
	
	Name :"Trisquel" , 
	Description :"Mental Health Organization",
	Agency:"??",
	ProductionHouse: "Smog",
	Producer:"",
	ArtDirector: "",
	Director: "Moises",
	MyContributions:"Storyboard",
	ProjectStatus:"Currently On Sale",
	Link : "story3" + ext2 ,
	ImgMobile : pathMobile + "cover2.jpg",
	ImgDesktop : pathDesktop + "cover2.jpg",
	id:2 ,
	Index:1
	
}
	,	
	{
	
	Name :"Nsure" , 
	Description :"E-Cash Ensurance Technology ",
	Agency:"Mustache Studio",
	ProductionHouse: "Mamba Studio",
	ArtDirector:"Monty",
	MyContributions: "Storyboard",
	ProjectStatus: "Published", 
	Link : "story2" + ext2 ,
	
	ImgMobile : pathMobile + "cover3.jpg", 
	ImgDesktop : pathDesktop + "cover3.jpg",
	id:3 ,
	Index:2   }
		,
	{ 
	Name :"Miller" , 
	Description :"Beer Add for the Superbowl", 
	Agency:"??",
	ProductionHouse: "Smog",
	ArtDirector: "Pablo",
	MyContributions:"Storyboard",
	ProjectStatus:"A pitch, Didn't see the light of day",
	Link : "story4" +ext2, 

	ImgMobile : pathMobile + "cover4.jpg",
	ImgDesktop : pathDesktop + "cover4.jpg",
	
	id:4 ,
	Index:3 
},
{ 
	Name :"Festival Frontera" , 
	Description :"Beer Add for the Superbowl", 
	Agency:"??",
	ProductionHouse: "Believe",
	ArtDirector: "Pablo",
	MyContributions:"Storyboard",
	ProjectStatus:"A pitch, Didn't see the light of day",
	Link : "story5" +ext2, 

	ImgMobile : pathMobile + "cover5.jpg",
	ImgDesktop : pathDesktop + "cover5.jpg",
	id:4 ,
	Index:3 
}
	
];

</script>

<svelte:window bind:innerWidth bind:innerHeight />

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Storyboard" />
</svelte:head>

<main>
{#if innerWidth <= smallw }

	   <div class="small" >   
		<GalleryCovers sections={designsections} sectionName={sectionName[0]} />
		 <GalleryCovers sections={storysections} sectionName={sectionName[1]} />
		</div>

{/if}

{#if innerWidth > smallw  && innerWidth <= midw }

	<div class="mid">
		<GalleryCovers sections={designsections} sectionName={sectionName[0]} />
		<GalleryCovers sections={storysections} sectionName={sectionName[1]} />
		
	   </div>

{/if}

{#if innerWidth > midw && innerWidth <= bigw}

	<div class="big">
		<GalleryCovers sections={designsections} sectionName={sectionName[0]} />
		<GalleryCovers sections={storysections} sectionName={sectionName[1]} />
		

   </div>

{/if}

{#if innerWidth > bigw}

	<div class="biggest">
		<GalleryCovers sections={designsections} sectionName={sectionName[0]} />
		<GalleryCovers sections={storysections} sectionName={sectionName[1]} />
		
   </div> 

{/if}

</main>


<style>
  	.small {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%; 
		
	}
	.mid {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		
	}
	.big {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		
	}
	.biggest {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		
	}
</style>