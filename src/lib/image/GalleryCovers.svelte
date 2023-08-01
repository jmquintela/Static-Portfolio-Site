<script >
   
	import DeviceDetector from "svelte-device-detector" ;
	import { fade } from 'svelte/transition';
	export let sectionName;
    export let sections;
	let show = false;

	function toggleShow(){
		show = !show
	}
</script>


<div class="page_container">
      <DeviceDetector showInDevice="desktop">
		<div class="works_container"  >
		<div class="name">
			{sectionName}
		  </div>				
		</div>
	<div class="cover_container"  >

		{#each sections as section}
		<div class="selection" on:mouseenter={toggleShow} on:mouseleave={toggleShow} >
            <a class="link" href={section.Link} >
				
				{#if show}
				<div class="title" transition:fade={{duration:400}}>
					{section.Name}
				</div>
				{/if}
				
				<img class="section" src={section.ImgDesktop} alt={section.Name}>

			</a></div>
        
        {/each}

	 </div>
      </DeviceDetector>
   
      <DeviceDetector showInBrowser="chrome" showInDevice="mobile">

		<div class="works_container"  >
	
			<div class="name">
				{sectionName}
			  </div>				
			</div>
		<div class="cover_container"  >
		
			{#each sections as section}
			
			<div class="selection" >
				<a class="link" href={section.Link} >
				
				<div class="titleMobile" >
					{section.Name}
				</div>
					<img 
					class="section" src={section.ImgMobile} alt={section.Name}>
				
					
				</a></div>
			
			{/each}
		
		</div>
      
	</DeviceDetector>
       

    <DeviceDetector showInBrowser={["safari", "firefox","Instagram"]}>
		<div class="works_container"  >
	
			<div class="name">
				{sectionName}
			  </div>				
			</div>
		<div class="cover_container"  >
	
			{#each sections as section}
			
			<div class="selection" on:mouseenter={toggleShow} on:mouseleave={toggleShow} >
				<a class="link" href={section.Link} >
				
					{#if show}
					<div class="title" transition:fade={{duration:400}}>
						{section.Name}
					</div>
					{/if}
					
					<img class="section" src={section.ImgDesktop} alt={section.Name}>
			
				</a></div>
			
			{/each}
		 </div>
        
      </DeviceDetector>
   
	

</div>


<style>
.page_container{

display:flex;
flex-direction: column;
flex-wrap: nowrap ;
align-content: center;
width: 100%;
height: auto;

}
.title{
display:flex;
position: relative; 
top: 30px; 
margin-top: -30px;
align-content: center;
flex-direction: row;
justify-content:center;
z-index: 23;
background-color: rgba(255, 255, 255, 1);
flex-wrap: nowrap ;
width: auto;
height: 30px;


}
.titleMobile{
display:flex;
position: relative; 
top: 0px; 
margin-top: 0px;
align-content: center;
flex-direction: row;
justify-content:center;
z-index: 23;
background-color: rgba(255, 255, 255, 1);
flex-wrap: nowrap ;
width: auto;
height: 30px;


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
	.production_company {

		display:flex;
		flex-wrap: nowrap;
		flex-direction: row;
		align-content: center;
		justify-content: center;
		position:relative;
		color: rgb(0, 0, 0);
		width: auto;
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
		font-weight: 900;
		font-size: 25px;
		letter-spacing:5px;
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
    
	.cover_container {

		display:flex;
		flex-direction: row;
		flex-wrap: wrap ;
		gap: 12px 12px;
		width: auto;
		
		position: relative;
		
		align-content: center;
		justify-content: center;
		
	}
	.section {

width:45vw;
height: auto ;
padding-left: 1px ;
padding-right: 1px ;
position: relative;

align-content: center;
justify-content: center;
max-width: auto;

}
		

.selection {
     z-index: 10;
	 opacity: 1;
	 position: relative;
	text-decoration:solid;
	will-change: auto;

}
	.selection:hover {
     z-index: 122;
	 opacity: 1;
	 position: relative;
    transition: transform 300ms;
	
	color: rgb(255, 204, 37);
	transform: scale(1.02);
	text-decoration:solid;

	box-shadow: 1px 1px 15px rgba(0, 0, 0, 1);
}

</style>
