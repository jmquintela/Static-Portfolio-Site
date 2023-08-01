{#each images as images, index (images.id)}

{#if index%2 === 0}
<div class="row">
 <div class="col">
<ImageLoader src={images.path} alt={images.alt} id={images.id} {height}/>
</div>
{/if}

{#if index%2 === 1}
<div class="col">
<ImageLoader src={images.path} alt={images.alt} id={images.id} {height}/>
 </div>
 </div>
</div>
 {/if}

{/each}


{#each images as images, index (images.id)}

{#if index%2 === 0}
A
{/if}

{#if index%2 === 1}
B
 {/if}

{/each}



{#each images
    .map((item, index, arr) => {
        if (index % 2 == 0) {
            return [item, arr[index + 1]];
        }
    })
    .filter((a) => a) as [first, second] (images.id)}
    <div class="row">
        <div class="col">
            <ImageLoader src={first.path} alt={first.alt} id={first.id} {height}/>
            <div class="col">
        <div class="col">
                <ImageLoader src={second.path} alt={second.alt} id={second.id} {height}/>
        </div>
        
    </div>
{/each}



{#each images
    .map((item, index, arr) => {
        if (index % 2 == 0) {
            return [item, arr[index + 1]];
        }
    })
    .filter((a) => a) as [first, second] (images.id)}
    <div class="row">
        <div class="col">
            <ImageLoader src={first.path} alt={first.alt} id={first.id} {height}/>
        </div>
        <div class="col">
                <ImageLoader src={second.path} alt={second.alt} id={second.id} {height}/>
        </div>
         
    </div>
{/each}




This Works
\\\
{#each images as images, index (images.id)}

<ImageLoader src={images.path} alt={images.alt} id={images.id} {height}/>


item.replace("_"," "), path = item.concat(path+item+ext)

Why this doesn't work ?  the keys[x] is giving error

´´´javascript

    let filePath = "path";
    let keys = ["filPath" ,"name", "id"];
    let fileNames = [ "file1", "file2", "file3"];
    let ext = ".jpg";

let images =  fileNames.map( (item, index, arr) =>  {
    
    return{

        keys[0]: filePath ,
        keys[1]: item ,
        keys[2]: str(index)

    }
    
 } ) ;

console.log(images)
´´´

keys.forEach( (item, index, arr) =>  {
   
    if(index === 0 ){
   images[item] = fileNames[index]   
    };
    if(index === 1 ){
        images[item] = fileNames[index].concat( "string")   
         };
         if(index === 2 ){
            images[item] = fileNames[index].concat( "string44")   
             };
 });


{/each}
\\\
This Doesnt!
\\\
{#each images
    .map((item, index, arr) => {
        if (index % 2 == 0) {
            return [item, arr[index + 1]];
        }
    })
    .filter((a) => a) as , [first, second],(images.id)}

    <div class="nowrap">
        <ImageLoader src={first.path} alt={first.alt} id={first.id} {height}/>
    
        <ImageLoader src={second.path} alt={second.alt} id={second.id} {height}/>
    </div>

{/each}
``\\\``


).filter(
    (item, index, arr)=> {
        index%2 !==0
    } 



<Carousel {gallery} {height} />







<script>
    let galleries = [];

    for (let i = 0; i < 4; i++) {
        images[i] = createGallery(38 ,3, filePath, "", ext , 0);
    }
</script>

<main>
    {#each galleries as images, i}
        <h2 class="item__title">Storyboard 1</h2>
        <Carousel imsages={images} {height} />
    {/each}
</main>

<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
	
</script>

<header>
	
   
	<nav>
		
		<ul>
			<li class:active={$page.url.pathname === '/works'}>
				<a sveltekit:prefetch href="/works">Works</a>
			</li>
			
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>

			<li class:active={$page.url.pathname === '/contact'}>
				<a sveltekit:prefetch href="/about">Contact</a>
			</li>
		
		</ul>
		
	</nav>

	
</header>
<style>
	header {
		display: flex;
		height: 100px;
		justify-content: center;
	}


	nav {
	background-color: white;
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
	justify-content: center;
    box-shadow: 0 0 25px 0 black;
	}


	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		display: flex;
		
		flex-wrap: nowrap ;
	    justify-content: center;
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {

		
    position: fixed;
    
	top:0;
    left: 0;
    right: 0;
    height: 60px;
    box-shadow: 0 0 25px 0 black;
    display: flex;
    flex-wrap: nowrap ;
	justify-content: center;
		padding-top: 20px;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>



<script>

	let loaded = false;	
	let thisImage;

	let swicht = 0;
	
	const img = new Image();

    img.src = src;
	

	let proportions = (img.width / img.height);

	if( proportions >= 1 ) {

swicht = 1;

}


</script>



   <div class="menuitem">  
        <NavItem class="item">
            <NavLink href="store" on:click={() => (isOpen = !isOpen)}>Open Store</NavLink>
          </NavItem>
    </div> 