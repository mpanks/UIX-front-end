<script lang="ts">
    let submitted=false;
    function close(){
        let modal = document.getElementById("modal");
        if(modal) modal.style.display = "none";  
        if(submitted) window.location.href=".";    
    }
    function submit(){
        let confidence = document.getElementById("confidence") as HTMLInputElement;
        let confLevel:number = confidence.valueAsNumber;
        let modal = document.getElementById("modal");
        let content = document.getElementById("modalText") as HTMLElement;

        if(confLevel <=5 && confLevel >0 && confLevel%1==0){
            if(content) content.textContent = "Report Submitted"; content.style.setProperty("color","green");
            submitted=true;
        }
        else{
            if(content){
                content.innerHTML="Report Rejected.<br>Please add a confidence level between 1 and 5.";
                content.style.setProperty("color","red");
            } 
            //if(modal) modal.textContent = "reject";
        }
        //modal?.appendChild(content);
        if(modal) modal.style.display = "block";
    }
    function cancel(){
        window.location.href="."
    };
</script>
<section>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale-1">
    </head>
<main>
        <div class="center">
            <div class="confidence">
                <label for='confidence' id='confidencelabel' class="confidenceLabel">Confidence Level</label>
                <input placeholder="1-5" type="number" id='confidence' class="confidenceInput"><br>
            </div>
            <div class="notes">
                <p class="noteslabel">Additional Notes</p>
                <textarea class="notesinput"/>
            </div>
            <div class="buttons">
                <button class="grid-item" on:click={cancel}>Cancel</button>
                <button class="grid-item" on:click={submit}>Submit</button>
            </div>
        </div>

    <div class="modal" id="modal" on:click={close}>
        <div class="modal-content">
            <span class="close" >&times;</span>
            <p id="modalText"></p>
        </div>
    </div>
</main>
</section>
<style>
    .modal{
        display: none;
        position: fixed;
        z-index: 1;
        padding-top: 100px;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        overflow: auto;
    }
    .modal-content{
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }
    .close{
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }
    .close:hover, .close:focus{
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
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
        margin-top: 0px;
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
    /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>