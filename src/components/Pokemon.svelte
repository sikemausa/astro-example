<script>
    export let types;
    export let baseExperience;
    export let name;
    export let imageUrl;
    const arr = [];
    while(arr.length < 100){
        arr.push({ text: 'This is what a Pokemon looks like', image: imageUrl})
    }
</script>
<div>
    <ul>
        {#each arr as poke}
            <li>
                <img src={poke.image} height=150 width=150 alt={poke.text} />
                <h1>{name}</h1>
                <ul class="flex justify-end mt-4">
                    {#each types as type}
                        <li class="text-xl font-medium text-indigo-500">
                            <a 
                                href={type.type.url}
                                class='text-xl font-medium text-indigo-500'
                            >
                                {type.type.name}
                            </a>
                        </li>
                    {/each}
                </ul>
                <h2>Base Experience: {baseExperience}</h2>
            </li>
        {/each}
    </ul>
</div>