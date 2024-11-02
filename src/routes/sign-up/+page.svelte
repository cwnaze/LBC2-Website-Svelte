<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";

    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<Navbar />

<h1 class="text-yellow-200 text-4xl font-black mt-8 mx-20 text-center">Competitor Registration</h1>
<p class="text-white text-xl mt-8 mb-4 mx-20 text-center">Your team can have up to FOUR members. Only the team leader should register the team and its members (first and last names). All team members MUST be in Grades 8th-12th. Any team changes should be reported to <a href="mailto:lbc2staff@gmail.com" class="underline hover:text-yellow-100">lbc2staff@gmail.com</a></p>
<form method='POST' action='?/register' class='text-yellow-200 flex flex-col justify-center items-center text-2xl gap-6'>
    <div class='flex flex-col gap-6 my-5'>
        <div class='flex flex-col'>
            <label for='team-name'>Team Name</label>
            <input id='team-name' placeholder='John Doe Team' name='team-name' type='text' value={form?.t_name ?? ''} class='bg-yellow-100 rounded-lg text-blue-100 p-3 placeholder:text-blue-placeholder'/>
            {#if form?.t_name_missing}<p class='text-error'>Team name is required</p>{/if}
            {#if form?.t_name_exists}<p class='text-error'>Team name already exists</p>{/if}
        </div>
        <div class='flex flex-col'>
            <label for='experience-level'>Experience Level</label>
            <select id='experience-level' name='experience-level' class='bg-yellow-100 rounded-lg text-blue-100 p-3'>
                <option value='beginner'>Beginner</option>
                {#if form?.e_level === 'advanced'}<option value='advanced' selected>I've Done CTFs Before</option>
                {:else}<option value='advanced'>I've Done CTFs Before</option>{/if}
        </div>
        <div class='flex gap-10 max-lg:flex-col max-lg:gap-6'>
            <div class='flex flex-col'>
                <label for='tl-name'>Team Lead Name</label>
                <input id='tl-name' placeholder='John Doe' name='tl-name' type='text' value={form?.tl_name ?? ''} class='bg-yellow-100 rounded-lg text-blue-100 p-3 placeholder:text-blue-placeholder'/>
                {#if form?.tl_name_missing}<p class='text-error'>Team lead name is required</p>{/if}
                {#if form?.tl_name_exists}<p class='text-error'>Team lead is already registered</p>{/if}
            </div>
            <div class='flex flex-col'>
                <label for='tl-school'>Team Lead School</label>
                <input id='tl-school' placeholder='John Doe High' name='tl-school' type='text' value={form?.tl_school ?? ''} class='bg-yellow-100 rounded-lg text-blue-100 p-3 placeholder:text-blue-placeholder'/>
                {#if form?.tl_school_missing}<p class='text-error'>Team lead school is required</p>{/if}
            </div>
            <div class='flex flex-col'>
                <label for='tl-email'>Team Lead Email</label>
                <input id='tl-email' placeholder='jdoe@mail.com' name='tl-email' type='text' value={form?.tl_email ?? ''} class='bg-yellow-100 rounded-lg text-blue-100 p-3 placeholder:text-blue-placeholder'/>
                {#if form?.tl_email_missing}<p class='text-error'>Team lead email is required</p>{/if}
                {#if form?.tl_email_invalid}<p class='text-error'>Invalid email</p>{/if}
            </div>
        </div>
        <div class='flex flex-col'>
            <label for='member-2'>Team Member 2</label>
            <input id='email' placeholder='James Doe' name='member-2' type='text' value={form?.member_2 ?? ''} class='bg-yellow-100 rounded-lg text-blue-100 p-3 placeholder:text-blue-placeholder'>
        </div>
        <div class='flex flex-col'>
            <label for='member-3'>Team Member 3</label>
            <input id='member-3' placeholder='Jennifer Doe' name='member-3' type='text' class='bg-yellow-100 rounded-lg text-blue-100 p-3 placeholder:text-blue-placeholder'>
        </div>
        <div class='flex flex-col'>
            <label for='member-4'>Team Member 4</label>
            <input id='member-4' placeholder='Jeffrey Doe' name='member-4' type='text' class='bg-yellow-100 rounded-lg text-blue-100 p-3 placeholder:text-blue-placeholder'>
        </div>
        <button class='bg-yellow-200 text-blue-100 font-bold mx-auto p-3 px-16 rounded-lg border-4 border-yellow-200 mt-6 hover:bg-blue-200 hover:text-yellow-200'>Register</button>
    </div>
</form>