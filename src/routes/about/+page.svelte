<script context="module">
	import  ContactForm from "$lib/forms/ContactForm.svelte";

</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About Paranaxus" />
</svelte:head>
<main>
<div class="about">
	<div class="aboutme">
	I´m a storyboard artist based on Santiago Chile ,
	I work mostly for animation production companies for 3d and motion graphics projects.
	
	<br><br>Feel Free to book me on your project:
	<br>
    </div>
	
	<div class="contact">
	<ContactForm/>
    </div>
</div>
</main>
<style>
	a{
     text-decoration: solid;
	 color: black;
	 font-size: 20px;
	}
	a:hover{
     text-decoration: solid;
	 color: black;

	}
	.about{
	
		font-variant-caps: all-petite-caps;
		font-weight: bold;
		font-size:20px;
		width:auto;
		display: flex;
		flex-direction: column;
        flex-wrap: nowrap ;
		padding-left: 20px;
		padding-right: 20px;
		padding-bottom: 20px;
		border-radius: 10px;
		margin-top: 10px;
		height: fit-content;
		min-height: 30vh;
		padding-top:10px;
  		margin-bottom: 10px;
  		margin-left: 20px;
 		margin-right: 20px;
  
  justify-content:center;
  align-content: center;
  background-image: linear-gradient(rgb(251, 255, 0),rgb(247, 210, 1));
	
	}
	.aboutme{
		
		margin-top: 5px;
		flex-direction: row;
        flex-wrap: nowrap;
		width: fit-content;
		height: fit-content;
		display: flex;
		justify-content: center;
		align-content: left;
	}
	.contact{
		margin-top: 5px;
		margin-left: 5px;
		flex-direction: column;
        flex-wrap: nowrap;
		width: fit-content;
		height: fit-content;
		display: flex;
		justify-content: center;
		align-content: center;
	}
	
</style>
