<script>
  
</script>
<nav class="navbar-dark bg-dark navbar-expand-lg  center">
  <div class="container-fluid center">
     <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon  "></span>
    </button>
    <div class="collapse navbar-collapse center " id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item line">
          <a class="navlink" href="/">WORKS</a>
        </li>
        <li class="nav-item line">
          <a class="navlink" href="/about">ABOUT</a> 
        </li>
        <li class="nav-item">
        <a class="navlink" href="http://www.instagram.com/paranaxus">
          <img src="/images/web/ig.gif" width="20px" alt="instagram">
        </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  
<style>
 .navtop {
     background-color: rgb(0, 0, 0);
     justify-content: center;
     display: flex;
     margin: auto;
  }
  .line {  
  text-decoration: underline 0.11em rgba(0, 0, 0, 0);
  text-underline-offset: 0.2em;
  transition: text-decoration-color 600ms,text-underline-offset 300ms;
}
 .line:hover {  
  text-decoration: underline 0.11em rgba(0, 0, 0, 0);
  transition: text-decoration-color 600ms,text-underline-offset 300ms;
}
  .nav-item {
    padding: 0px 40px 0 0 ;
    margin:10px 10px 10px 10px;
    
  transform: scale(1);
  }
  .nav-item:hover {
 
    transition: transform 300ms;
  transform: scale(1.3);
  text-decoration-color: rgb(255, 247, 0);
  transition: text-decoration-color 300ms;
  }
.navlink {  

  font-size: 23pt;
  color: rgb(255, 255, 255);

}
.navlink:hover{
  color: rgb(249, 237, 0);
}
.navlink:active{
  color: rgb(241, 63, 119);
}
.container-fluid{
  background-color: rgb(0, 0, 0);
    padding:10px 10px 10px 10px;
    
  }
.center{
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  }
</style>