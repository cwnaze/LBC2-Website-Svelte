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
    <h2 class="text-yellow-200 text-4xl font-black mt-8 mx-20 text-center">2024</h2>
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
</div>
<div>
    <h2 class="text-yellow-200 text-4xl font-black mt-8 mx-20 text-center">2023</h2>
    <Carousel
      bind:this={carousel}
      particlesToShow={3}
      autoplayDuration={0}
      duration={7000}
      autoplay
      timingFunction="linear"
      dots={false}
      arrows={false}
      swiping={false}
    >
      {#each imgNum as index}
        <img src={`/images/2023/image${index}.jpeg`} alt={`Image ${index}`} class="my-8 object-cover rounded ml-4"/>
      {/each}
    </Carousel>
</div>
<div>
    <h2 class="text-yellow-200 text-4xl font-black mt-8 mx-20 text-center">2022</h2>
    <Carousel
      bind:this={carousel}
      particlesToShow={3}
      autoplayDuration={0}
      duration={7000}
      autoplay
      timingFunction="linear"
      dots={false}
      arrows={false}
      swiping={false}
    >
      {#each imgNum as index}
        <img src={`/images/2022/image${index}.jpeg`} alt={`Image ${index}`} class="my-8 object-cover rounded ml-4"/>
      {/each}
    </Carousel>
</div>
