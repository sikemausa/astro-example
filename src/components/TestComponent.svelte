<script>
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
                <img src={poke.image} height=150 width=150 />
                {poke.text}
            </li>
        {/each}
    </ul>
</div>