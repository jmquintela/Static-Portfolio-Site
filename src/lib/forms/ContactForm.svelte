<script >

</script>
<div class="container">

        <form action="https://api.staticforms.xyz/submit" method="post" id="staticform">
          <!-- Replace with your StaticForms accessKey -->
          <input type="hidden" name="accessKey" value="b459c69a-5076-4ed8-9097-96b3a246dee1">
          <input type="hidden" name="subject" value="Work">
          <!-- Replace with the url you want to redirect to -->
          
          <input type="hidden" name="redirectTo" value="https://www.paranaxus.com/sent.html">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" name="name" placeholder="Enter Your Name" required>
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" name="email" placeholder="Enter Your Email" required>
            </div>
          </div>
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" name="message" placeholder="Enter Your Message" required></textarea>
            </div>
          </div>

          <button class="button is-primary" type="Submit">Submit</button>
        </form>
     
  </div>


<style>

	.container {
display:flex;
flex-direction: column;
flex-wrap: wrap ;
align-content: left;
justify-content: left;
margin-left: 0;
width: fit-content;
height: fit-content;
}

.control {
display:flex;
flex-direction: column;
flex-wrap: wrap ;
align-content: left;
justify-content: left;
margin-bottom: 10px;
width:fit-content;
min-width:fit-content;

height: fit-content;
}

</style>
