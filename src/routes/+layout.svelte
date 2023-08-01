<script>
	import '../app.css';
	import Header from '$lib/header/Header.svelte';

</script>

<Header />
<main>
	<slot/>
</main>


<footer>
	<img src="/images/web/footericon.gif" alt="PARANAXUS">
</footer>

<style>
	main {
		
		justify-content:center;
        align-content: center;
		display: flex;
		flex-direction: column;
		padding-top: 10px;;
		padding-bottom: 10px;
		width: 100%;
		height: 100%;
		margin:  0px auto;
		position: relative;
	}

	footer {
		display: flex;
		margin-top: 10px;
		padding-top: 20px;
		justify-content: center;
		background-color: black;
	    box-shadow: 2px 2px 50px rgb(71, 70, 70);
		align-items: center;
		width:100%;
		height: 260px;
		position: relative; 
	}

	footer a {
		height: fit-content;
		font-weight: bold;
		
	}

	@media (min-width: 480px) {
		footer {
			padding: 30px 0;
		}
	}
</style>
