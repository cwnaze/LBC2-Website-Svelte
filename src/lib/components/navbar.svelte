<script lang="ts">
    const handleMenu = () => {
        const menu = document.querySelector('#menu');
        if (menu && menu.classList.contains('hidden')) {
            console.log(menu);
            menu.classList.remove('hidden');
        } else if (menu) {
            menu.classList.add('hidden');
        }
    }
</script>

<div class='p-3 bg-blue-100 drop-shadow-dark flex justify-between items-center'>
    <img src='/images/logo.png' class='w-auto h-16 py-2' alt='LBC2 Logo'>
    <ul class='flex gap-12 text-yellow-200 justify-center ml-auto text-xl max-lg:hidden'>
        <li class="hover:underline"><a href="/">Home</a></li>
        <li class="hover:underline"><a href="/details">Details</a></li>
        <li class="hover:underline"><a href="/past-competitions">Past Competitions</a></li>
        <li class="hover:underline"><a href="/lbcsi">LBCSI</a></li>
        <li class="hover:underline"><a href="/sign-up">Sign Up</a></li>
    </ul>
    <button on:click={handleMenu}><img src='/images/menu.svg' class='w-8 h-8 mr-4 lg:hidden' alt='Menu'></button>
</div>
<div>
    <ul id='menu' class='hidden bg-blue-100 text-yellow-200 text-xl flex flex-col gap-4 p-4'>
        <li class="hover:underline"><a href="/">Home</a></li>
        <li class="hover:underline"><a href="/details">Details</a></li>
        <li class="hover:underline"><a href="/past-competitions">Past Competitions</a></li>
        <li class="hover:underline"><a href="/lbcsi">LBCSI</a></li>
        <li class="hover:underline"><a href="/sign-up">Sign Up</a></li>
    </ul>
</div>