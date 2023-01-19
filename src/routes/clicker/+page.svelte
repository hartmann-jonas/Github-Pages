<script>
	import Nav from "../../components/Nav.svelte";
    
    let count = 0
    
    function add(){
        count += 1;
    }
</script>

<Nav></Nav>

<div class="clickerBox">
    <div class="clickerButton">
        <button id="clicker" on:click={add}>
            {#if count == 0}
                CLICK ME
            {:else}
                {count}
            {/if}
        </button>
    </div>
</div>

<style>
    * {
        font-family: Arial, Helvetica, sans-serif;
    }

    .clickerBox {
        text-align: center;
    }

    #clicker{
        background-color: red;
        width: 250px;
        height: 250px;
        border-radius: 100%;
        font-size: 33px;
        align-items: center;
        font-weight: bold;
        
    }

    .clickerButton{
        display: flex;
        justify-content: space-around;
        text-align: center;
        display:block;
        padding-top: 20px;
    }
</style>