<script >
	import  ContactForm from "$lib/forms/ContactForm.svelte";

</script>

<svelte:head>
	<title>Message Sent!</title>
	<meta name="description" content="About Paranaxus" />
</svelte:head>

<div class="about">
	<div class="aboutme">
	Your message was succesfully sent, thanks for contacting me, I'll get back to you as soon as I can !
	<br>
    </div>
	
</div>

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
		width: auto;
		display: flex;
		flex-direction: column;
        flex-wrap: wrap ;
		padding-left: 20px;
		padding-right: 20px;
		padding-bottom: 20px;
		border-radius: 10px;
		margin-top: 100px;
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
		flex-direction: column;
        flex-wrap: nowrap;
		width: fit-content;
		height: fit-content;
		display: flex;
		justify-content: center;
	
	}
	.contact{
		margin-top: 5px;
		margin-left: -16px;
		flex-direction: column;
        flex-wrap: nowrap;
		width: fit-content;
		height: fit-content;
		display: flex;
		justify-content: center;
	
	}
	
</style>
