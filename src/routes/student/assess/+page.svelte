<script lang="ts">
    function cancel(){
        window.location.href="."
    };
</script>
<section>
    <head>
    <link rel="stylesheet" href="/src/routes/style.css">
    </head>
    <div class="center">
        <div class="confidence">
            <label for='confidence' id='confidencelabel' class="confidenceLabel">Confidence Level</label>
            <input type="number" id='confidence' class="confidenceInput"/> <br>
        </div>
        <div class="notes">
            <p class="noteslabel">Additional Notes</p>
            <input class="notesinput"/>
        </div>
        <div class="buttons">
            <button class="grid-item" on:click={cancel}>Cancel</button>
            <button class="grid-item">Submit</button>
        </div>
    </div>
</section>
<style>
    .center{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .confidence{
        display: flex;
        justify-content: center;
        width: 872px;
    }
    .confidenceLabel{
        font-size: 54px;
        background-color: #DDDBFB;
        padding: 3%;
        border-radius: 5px 0px 0px 5px; 
    }
    .confidenceInput{
        width:15%;
        background-color: #C3BEF7;
        font-size: 54px;
        border: 0px;
        border-radius: 0px 5px 5px 0px;
    }
    .notes{
        display:flex;
        flex-direction: column;
        grid-template-columns: auto;
        align-items: center;
        justify-content: center;
        width: 872px;
    }
    .noteslabel{
        margin-top: 43px;
        font-size: 54px;
        background-color: #DDDBFB;
        width: 830px;
        padding: 2.7%;
        margin-bottom: 0;
        text-align: center;
        border-radius: 5px 5px 0px 0px;
    }
    .notesinput{
        font-size: 32px;
        width: 872px;
        height: 443px;
        background-color: #C3BEF7;
        border: 0px;
        border-radius: 0px 0px 5px 5px;
        margin-bottom: 43px;
    }
    .buttons{
        display:grid;
        grid-template-columns: auto auto;
        justify-content: center;
        gap: 20%;
    }
    .grid-item{
        width: 343px;
        height: 133px;
        font-size: 64px;
    }
</style>