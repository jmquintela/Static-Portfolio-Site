<script context="module">
	import  ContactForm from "$lib/forms/ContactForm.svelte";


</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About Paranaxus" />
</svelte:head>

<div class="about">
	<div class="aboutme">
	Freelance story artist from Santiago, Chile.<br>
	Currently Working for Buck.co
	<br>
</div></div>

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
		text-align: center;
		font-weight: bold;
		font-size:20px;
		width:auto;
		display: flex;
		flex-direction: row;
        flex-wrap: wrap ;
		padding-left: 20px;
		padding-right: 20px;
		padding-bottom: 20px;
		border-radius: 10px;
		vertical-align: middle;
		min-height: 30vh;

  		margin-bottom: 10px;
  		margin-left: 20px;
 		margin-right: 20px;
  
  justify-content:center;
  align-content: center;
  background-image: linear-gradient(rgb(251, 255, 0),rgb(247, 210, 1));
	
	}
	.aboutme{
		text-align: center;
		vertical-align: middle;
		flex-direction:row;
        flex-wrap: wrap;
		width: fit-content;
		display: flex;
		justify-content: center;
		align-content: center;
	}
	.contact{
		margin-top: 5px;
		margin-left: -15px;
		flex-direction: row;
        flex-wrap: nowrap;
		width: fit-content;
		height: fit-content;
		display: flex;
		justify-content: left;
	
		align-content: left;
	}
	
</style>
