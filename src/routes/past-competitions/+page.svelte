<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import Carousel from 'svelte-carousel';  

    let carousel: any; // for calling methods of the carousel instance
    
    const handleNextClick = () => {
      carousel.goToNext()
    }

    let imgNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<Navbar/>
<div>
    <h2 class="text-yellow-200 text-4xl font-black mt-8 mx-20 text-center">LBC2 2024 Photos</h2>
    <Carousel
      bind:this={carousel}
      particlesToShow={10}
      autoplayDuration={0}
      duration={6000}
      autoplay
      timingFunction="linear"
      dots={false}
      arrows={false}
      swiping={false}
    >
      {#each imgNum as index}
        <img src={`/images/2024/image${index}.jpeg`} alt={`Image ${index}`} class="my-4 object-cover rounded ml-4"/>
      {/each}
    </Carousel>
</div>
<div class="bg-blue-100">
    <img src="/images/wavesOpacity.svg" alt="divider" class="h-auto w-screen">
    <h2 class="text-yellow-200 text-4xl font-black mt-10 mx-20 text-center">LBC2 2023 Photos</h2>
    <Carousel
      bind:this={carousel}
      particlesToShow={5}
      autoplayDuration={0}
      duration={19200}
      autoplay
      timingFunction="linear"
      dots={false}
      arrows={false}
      swiping={false}
    >
      {#each imgNum as index}
        <img src={`/images/2023/image${index}.jpeg`} alt={`Image ${index}`} class="my-4 object-cover rounded ml-4"/>
      {/each}
    </Carousel>
    <img src="/images/wavesOpacity.svg" alt="divider" class="h-auto w-screen rotate-180 mt-10">
</div>
<div>
    <h2 class="text-yellow-200 text-4xl font-black mt-8 mx-20 text-center">LBC2 2022 Photos</h2>
    <Carousel
      bind:this={carousel}
      particlesToShow={6}
      autoplayDuration={0}
      duration={9600}
      autoplay
      timingFunction="linear"
      dots={false}
      arrows={false}
      swiping={false}
    >
      {#each imgNum as index}
        <img src={`/images/2022/image${index}.jpeg`} alt={`Image ${index}`} class="my-4 object-cover rounded ml-4"/>
      {/each}
    </Carousel>
</div>
<div class="bg-blue-100">
    <img src="/images/wavesOpacity.svg" alt="divider" class="h-auto w-screen mt-8">
    <h2 class="text-yellow-200 text-4xl font-black my-8 mx-20 text-center">LBC2 2021</h2>
    <p class="mx-20 text-center text-white text-xl">2021 marked the fourth year of LBC2. This competition was hosted online, due to COVID-19 restrictions. This made organizing and attending a little more difficult. This challenge was, created, tested, and run by students, led by Matt and Chris Fleschner. Despite the difficulty, The day was another success, with 34 teams attending, to compete, learn, and grow.</p>
    <p class="mx-20 text-center text-white text-xl mt-8">We were also graced by the presence of two speakers, LaLisha Hurt, Deputy CISO of GDIT, And Diane Janosek, Senior Legal Advisor for Women in Cybersecurity Critical Infrastructure Sector and Senior Advisor for Women in Cybersecurity Mid-Atlantic Affiliate.</p>
    <div class="flex flex-col justify-center items-center my-16 gap-4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/FsJ_bewRntQ?si=fRXLpSzIDPpqy9ci" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QLKN2lNJlQE?si=661T0lOH0ZXD1dCt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <img src="/images/wavesOpacity.svg" alt="divider" class="h-auto w-screen rotate-180">
</div>
<h2 class="text-yellow-200 text-4xl font-black my-8 mx-20 text-center">LBC2 2020</h2>
<p class="mx-20 text-center text-white text-xl">The third Loyola Blakefield Cyber Challenge took place on March 7, 2020, at Loyola Blakefield High School in Towson, Maryland. The challenge was created entirely by students, led that year by Henry Mackay and William Erdman. It was a rousing success, with over a hundred people in attendance. There were many industry mentors on hand as well, in order to make it a true day of teaching and learning.</p>
<p class="mx-20 text-center text-white text-xl mt-8">The third annual edition of LBC2 also included a Workforce Summit for parents, industry partners, guidance counselors, educators, friends and family of competitors. The summit was inspired by the Governor’s Workforce Development Board (GWDB) and highlighted the private and public sector’s need in all types of businesses for future employees capable of defending against complicated cyber threats. The Workforce Summit aimed to build a better relationship between students, educators, and employers to provide students the skills to make a positive impact on the future.</p>
<h3 class="text-yellow-100 text-2xl font-bold mt-8 text-center">Summit Speakers</h3>
<ul class="mb-8">
    <li class="mx-20 text-center text-white text-xl mt-2">Chris Sachse – CEO, ThinkStack</li>
    <li class="mx-20 text-center text-white text-xl mt-2">Larry Letow – Operating Partner, Interprise Partners</li>
    <li class="mx-20 text-center text-white text-xl mt-2">Jeff Smith – Apprenticeship, MD Labor</li>
    <li class="mx-20 text-center text-white text-xl mt-2">Brent Campbell – Admissions Team Lead, UMBC Training Centers</li>
    <li class="mx-20 text-center text-white text-xl mt-2">Bob Aydukovic – President, Maryland Center for Construction Education & Innovation – MCCEI</li>
    <li class="mx-20 text-center text-white text-xl mt-2">Sallie Sweeney – KPMG</li>
    <li class="mx-20 text-center text-white text-xl mt-2">Mason Dowell – CEO GUAP LLC</li>
    <li class="mx-20 text-center text-white text-xl mt-2">Steve Morrill – LBCSI</li>
    <li class="mx-20 text-center text-white text-xl mt-2">Ed Roberts – Outreach & Recruitment Coordinator School of Technology, Art & Design, CCBC</li>
</ul>
