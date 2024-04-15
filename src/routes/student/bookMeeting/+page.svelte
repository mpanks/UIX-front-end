<script lang="ts">
    let submitted = false;
    function cancel(){
        window.location.href=".";
    }
    function close(){
        let modal = document.getElementById("modal");
        if(modal) modal.style.display = "none";  
        if(submitted) window.location.href=".";    
    }
    function submit(){
        let name = document.getElementById("supervisorname") as HTMLInputElement;
        let date = document.getElementById("meetingdate") as HTMLInputElement;
        let time = document.getElementById("meetingtime") as HTMLInputElement;
        let purpose = document.getElementById("meetingpurpose") as HTMLInputElement;
        let message:string = "";

        if(!name.value) {message+=("Please input supervisor name.<br>");}
        if (!date.value) {message+= "Please input date for meeting.<br>";}
        if (!time.value) message+= "Please input time for meeting.<br>";
        if (!purpose.value) message+= "Please input time for meeting.<br>";

        let modal = document.getElementById("modal");
        let content = document.getElementById("modalText") as HTMLElement;
        if(content){
            if(message==""){
                content.textContent="Meeting request submitted.";
                content.style.setProperty('color','green');
                submitted=true;
            }
            else{
                content.innerHTML = message;
                content.style.setProperty('color','red');
                submitted=false;
            }
        } 
        if(modal) modal.style.display = "block";
    }
</script>
<section>
    <head>
        <link rel="stylesheet" href="/src/routes/style.css">
        <meta name="viewport" content="width=device-width, initial-scale-1">
    </head>
    <div class="center">
        <div class="supervisor">
            <!--Supervisors information-->
            <label for="supervisorname" id="namelabel" class="supervisorlabel">Supervisor Name: </label>
            <input type="text" placeholder="John Smith" id="supervisorname" class="supervisorinput"/>
        </div>
        <div class="datetime">
            <!--Date & Time-->
            <div class="grid-item">
                <label for="meetingdate" id="datelabel" class="datelabel">Date: </label>
                <input type="date" placeholder="DD/MM/YYYY" id="meetingdate" class="dateinput"/>
            </div>
            <div class="grid-item">
                <label for="meetingtime" id="timelabel" class="timelabel">Time: </label>
                <input type="time" placeholder="HH:MM" id="meetingtime" class="timeinput"/>
            </div>
        </div>
        <div class="details">
            <label for="meetingpurpose" id="purposelabel" class="purposelabel">Purpose of Meeting</label>
            <textarea id="meetingpurpose" class="purposeinput"/><br>
            <label for="addintionalnotes" id="noteslabel" class="noteslabel">Additional Notes</label>
            <textarea id="additionalnotes" class="notesinput"/>
        </div>
        <div class="buttons">
            <button class="cancel" on:click={cancel}>Cancel</button>
            <button class="submit" on:click={submit}>Submit</button>
        </div>
    </div>
    <div class="modal" id="modal" on:click={close}>
        <div class="modal-content">
            <span class="close" >&times;</span>
            <p id="modalText"></p>
        </div>
    </div>
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
        font-size: larger;
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
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .supervisor{
        display:flex;
        justify-content: center;
    }
    .supervisorlabel{
        font-size: 54px;
        background-color: #DDDBFB;
        padding: 3%;
        border-radius: 5px 0px 0px 5px; 
    }
    .supervisorinput{
        font-family: "Open Sans";
        text-align: center;
        width:40%;
        background-color: #C3BEF7;
        font-size: 54px;
        border: 0px;
        border-radius: 0px 5px 5px 0px;
    }
    .datetime{
        margin-top: 2%;
        width: 100%;
        display:flex;
        flex-direction: row;
        justify-content: center;
        gap: 10%;
    }
    .dateinput, .timeinput{
        width: 291px;
        background-color: #C3BEF7;
        text-align: center;
        font-size: 40px;
        border: 0px;
        border-radius: 0px 5px 5px 0px;
    }
    .grid-item{
        display:flex;
        flex-direction: row;
        justify-content: center;
    }
    .datelabel, .timelabel{
        text-align: center;
        padding: 2%;
        font-size: 54px;
        background-color: #DDDBFB;
        border-radius: 5px 0px 0px 5px; 
    }
    .details{
        display:flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }
    .purposelabel,.noteslabel{
        max-height: 72px;
        margin-top: 43px;
        font-size: 54px;
        background-color: #DDDBFB;
        width: 876px;
        padding-top: 2%;
        margin-bottom: 0;
        border-radius: 5px 5px 0px 0px;
    }
    .purposeinput, .notesinput{
        font-size: 32px;
        width: 872px;
        background-color: #C3BEF7;
        border: 0px;
        border-radius: 0px 0px 5px 5px;
        margin-top: 0px;
        resize: none;
    }
    .purposeinput{
        height: 85px;
    }
    .notesinput{
        height: 157px;
    }
    .buttons{
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 25%;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }
    button{
        width: 343px;
        height: 133px;
        font-size: 64px;
    }
    button:hover{
        width: 347px;
        height: 137px;
    }
</style>