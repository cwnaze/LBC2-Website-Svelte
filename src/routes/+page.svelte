<script lang='ts'>
    import Carousel from 'svelte-carousel';
    import Navbar from '$lib/components/navbar.svelte';
    import { enhance } from '$app/forms';
  
    let carousel: any; // for calling methods of the carousel instance
    
    const handleNextClick = () => {
      carousel.goToNext()
    }

    let imgNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    /** @type {import('./$types').ActionData} */
    export let form;
</script>
<Navbar/>
<div class="flex gap-16 justify-center items-center mt-8">
    <div class="flex flex-col items-center">
        <h1 class="text-yellow-100 text-6xl font-black text-center"><section class="bg-gradient-to-t from-yellow-200 to-yellow-100 bg-clip-text text-transparent">Loyola Blakefield</section> Cyber Challenge</h1>
        <p class="text-white text-3xl text-center mt-8">March 2026 @ Loyola Blakefield</p>
        <p class="text-white text-3xl text-center mt-8">9:00am - 3:00pm</p>
        <button class="bg-yellow-200 text-blue-100 font-black text-xl mx-auto p-2 px-16 rounded-lg border-4 border-yellow-200 mt-6 hover:bg-blue-200 hover:text-yellow-200 hover:border-yellow-200"><a href="/sign-up">Sign Up</a></button>
    </div>
    <img src="/images/DSC00615.JPG" alt="Hero Image" class="h-96 w-auto rounded max-lg:hidden">
</div>
<div class="bg-blue-100 mt-8">
    <img src="/images/wavesOpacity.svg" alt="divider" class="h-auto w-screen">
    <div class="text-white text-center text-lg font-light italic bg-blue-200 my-6 mx-20 p-8 rounded border-l-4 border-yellow-200">
        <p>“Some of our students were feeling pretty intimidated at the beginning of the day, and by the end they had gained a lot of confidence and had a lot of fun largely due to help and encouragement from the yellow shirts.” – Faculty Member</p>
    </div>
    <img src="/images/wavesOpacity.svg" alt="divider" class="h-auto w-screen rotate-180">
</div>
<div class="mt-8 mx-20">
    <h2 class="text-yellow-200 text-4xl font-black text-center">Frequently Asked Questions</h2>
    <div class="text-center mt-16">
        <h3 class="text-yellow-100 text-2xl font-bold mt-4">What is LBC2?</h3>
        <p class="text-white text-xl mt-2">LBC2 is a cybersecurity competition run by Loyola's cybersecurity program. Competitors will learn cryptography skills, digital forensics, systems hardening, and much more.</p>
    </div>
    <div class="text-center mt-8">
        <h3 class="text-yellow-100 text-2xl font-bold mt-4">What division should I register for?</h3>
        <p class="text-white text-xl mt-2">If you're new to CTF (Capture the Flag) challenges, you should register for the beginner division. If you have experience with CTFs, you should register for the "I've Done CTFs Before" division.</p>
    </div>
    <div class="text-center mt-8">
        <h3 class="text-yellow-100 text-2xl font-bold mt-4">Do I need to bring anything?</h3>
        <p class="text-white text-xl mt-2">Beginner competitors will just need a charger and a laptop. Advanced ("I've Done CTFs Before") competitors will need Kali Linux tools along with their laptop and charger for many challenges.  We strongly recommend that competitors use laptops with access to a local administrator account. Food will be provided.</p>
    </div> 
    <div class="text-center mt-8">
        <h3 class="text-yellow-100 text-2xl font-bold mt-4">How much does it cost?</h3>
        <p class="text-white text-xl mt-2">The competition is entirely FREE, all thanks to our sponsors.</p>
    </div>
    <div class="text-center mt-8 mb-20">
        <h3 class="text-yellow-100 text-2xl font-bold mt-4">Do I need any experience?</h3>
        <p class="text-white text-xl mt-2">No.</p>
    </div> 
</div>
<div class="bg-blue-100">
    <img src="/images/wavesOpacity.svg" alt="divider" class="h-auto w-screen">
    <h2 class="text-yellow-200 text-4xl font-black mt-8 mx-20 text-center">Check Out our Photos from Last Competition!</h2>
    <Carousel
      bind:this={carousel}
      particlesToShow={5}
      autoplayDuration={0}
      duration={7000}
      autoplay
      timingFunction="linear"
      dots={false}
      arrows={false}
      swiping={false}
    >
      {#each imgNum as index}
        <img src={`/images/2024/image${index}.jpeg`} alt={`Image ${index}`} class="my-8 object-cover rounded ml-4"/>
      {/each}
    </Carousel>
    <img src="/images/wavesOpacity.svg" alt="divider" class="h-auto w-screen rotate-180">
</div>
<h2 class="text-yellow-200 text-4xl font-black mt-8 mx-20 text-center">Loyola Blakefield CSI</h2>
<div class="grid grid-cols-2 justify-center items-center text-center max-lg:grid-cols-none">
    <img src="/images/lbcsiLogo.png" alt="LBCSI Logo" class="mx-auto mt-8 max-lg:hidden">
    <div class="mr-20 max-lg:mx-20">
        <p class="text-white text-xl">The Loyola Blakefield Cyber Science Initiative (LBCSI) is a student-run group directed by Steve Morrill, Director of Technology & Cyber Science at Loyola Blakefield. The vision for this competition is to bring new opportunities to all students in the country, in addition to connecting the business world with a diverse talent pool. LBCSI has become the international leader in Cyber education for students in middle and high school.</p>
        <button class="bg-yellow-200 text-blue-100 font-black text-xl mx-auto p-2 px-16 rounded-lg border-4 border-yellow-200 mt-6 hover:bg-blue-200 hover:text-yellow-200 hover:border-yellow-200"><a href="/lbcsi">Learn More</a></button>
        <h3 class="text-yellow-100 text-2xl font-bold mt-4">Contact Us</h3>
        <p class="text-white text-xl mt-2">Head of LBCSI - <a href="mailto:smorrill@loyolablakefield.org" class="underline hover:text-yellow-100">Steve Morrill</a></p>
        <p class="text-white text-xl mt-2">Support Staff - <a href="mailto:lbc2staff@gmail.com" class="underline hover:text-yellow-100">lbc2staff@gmail.com</a></p>
        <p class="text-white text-xl mt-2">LBC2 Logo Design - <a href="mailto:rcwachter2026@loyolablakefield.org" class="underline hover:text-yellow-100">Ryan Wachter</a></p>
        <p class="text-white text-xl mt-2">LBC2 Website Design - <a href="mailto:cwnazelrod2025@loyolablakefield.org" class="underline hover:text-yellow-100">Casey Nazelrod</a> and <a href="mailto:emomron2025@loyolablakefield.org" class="underline hover:text-yellow-100">Emmett Omron</a></p>
    </div>
</div>
<div class="bg-blue-100">
    <img src="/images/wavesOpacity.svg" alt="divider" class="h-auto w-screen">
    <h2 class="text-yellow-200 text-4xl font-black mt-8 mx-20 text-center">Sponsors</h2>
    <h3 class="text-yellow-100 text-2xl font-bold mt-4 mx-20 text-center">Thank you to our sponsors. If you are interested in sponsoring LBC2, please contact <a href="mailto:smorrill@loyolablakefield.org" class="underline">Steve Morrill</a>.</h3>
    <img src="/images/sponsors.png" alt="sponsors" class="mx-auto mt-8">
    <img src="/images/wavesOpacity.svg" alt="divider" class="h-auto w-screen rotate-180">
</div>
<div>
    <h2 class="text-yellow-200 text-4xl font-black mt-8 mx-20 text-center">Newsletter</h2>
    <form method='POST' action='?/newsletter' use:enhance>
        <div class="flex flex-col gap-4 justify-center items-center py-8">
            <div class="flex flex-col items-start">
                <label for="email" class="text-yellow-200 text-xl text-right">Email</label>
                <input type="email" id='email' name='email' placeholder="Email Address" class="bg-yellow-100 text-blue-200 p-3 rounded-lg w-120">
                {#if form?.email_missing}<p class='text-error'>Email is required</p>{/if}
                {#if form?.email_invalid}<p class='text-error'>Enter a valid email</p>{/if}
                {#if form?.email_exists}<p class='text-error'>Email has already joined the newsletter</p>{/if}
            </div>
            <button class="bg-yellow-200 text-blue-100 text-xl font-black p-2 px-16 rounded-lg border-4 border-yellow-200 hover:bg-blue-200 hover:text-yellow-200 hover:border-yellow-200">Join Newsletter</button>
        </div>
    </form>
</div>
