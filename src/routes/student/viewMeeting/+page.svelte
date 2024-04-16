<script lang="ts">
    //I hope the marking's going well, John
    import {meetings, type meeting} from '$lib';

    function close(){
        let modal = document.getElementById("modal");
        if(modal) modal.style.display = "none";
    }
    function cancel(){
        window.location.href=".";
    };
    function search(){
        let nameinput = document.getElementById("nameinput") as HTMLInputElement;
        let exists = false;

        meetings.forEach(meeting => {
            //Currently search by name
            //Update to search date&time if possible in future
            if(meeting.name.includes(nameinput.value.toUpperCase())){
                output(meeting);
                exists = true;
            }
        });
        if(!exists)
        {
            let modal = document.getElementById("modal");
            let content = document.getElementById("modalText") as HTMLElement;
            content.textContent="Cannot find meeting with information provided, please try agian";
            content.style.setProperty('color', 'red');
            if(modal) modal.style.display = "block";
        }
    };
    function output(result: meeting){
        let dateinput = document.getElementById("dateinput") as HTMLInputElement;
        let timeinput = document.getElementById("timeinput") as HTMLInputElement;
        let supervisorname = document.getElementById("nameinput") as HTMLInputElement;
        let purpose = document.getElementById("meetingpurpose") as HTMLInputElement;
        let notes = document.getElementById("notes") as HTMLInputElement;

        supervisorname.value = result.name;
        dateinput.valueAsDate = result.datetime;
        timeinput.valueAsDate = result.datetime;
        purpose.value = result.purpose;
        notes.value = result.additional;
    }
</script>
<section>
    <head>
        <link rel="stylesheet" href="/src/routes/style.css"/>
    </head>
    <div class="center">
        <div class="supervisor">
            <label for="supervisorname" id="namelabel" class="namelabel">Supervisor Name: </label>
            <input type="text" id="nameinput" class="supervisorname" placeholder="John Smith"/>
        </div>
        <div class="buttons">
            <button class="cancel" on:click={cancel}>Return</button>
            <button class="search" on:click={search}>Search</button>
        </div>
        <div class="datetime">
            <div class="grid-item">
                <label for="dateinput" id="datelabel" class="datelabel">Date: </label>
                <input type="date" id="dateinput" class="dateinput"/>
            </div>
            <div class="grid-item">
                <label for="time" id="timelabel" class="timelabel">Time:</label>
                <input type="time" id="timeinput" class="timeinput"/>
            </div>
        </div>
        <div class="purpose">
            <label for="meetingpurpose" id="purposelabel" class="purposelabel">Purpose of Meeting</label>
            <textarea id="meetingpurpose" class="purposeinput"/>
        </div>
        <div class="notes">
            <label for="notes" id="noteslabel" class="noteslabel">Additional Notes</label>
            <textarea id="notes" class="notesinput"/>
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
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .supervisor{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .namelabel{
        font-size: 54px;
        background-color: #DDDBFB;
        
        border-radius: 5px 0px 0px 5px; 
    }
    .supervisorname{
        font-family: "Open Sans";
        text-align: center;
        width:40%;
        background-color: #C3BEF7;
        font-size: 54px;
        border: 0px;
        border-radius: 0px 5px 5px 0px;
    }
    .buttons{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10%;
        margin-top: 3%;
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
    .datetime{
        margin-top: 3%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10%;
    }
    .datelabel, .timelabel{
        text-align: center;
        padding: 2%;
        font-size: 54px;
        background-color: #DDDBFB;
        border-radius: 5px 0px 0px 5px; 
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
    .purpose, .notes{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    .purposelabel,.noteslabel{
        margin-top: 43px;
        font-size: 54px;
        background-color: #DDDBFB;
        width: 830px;
        padding: 2.7%;
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
</style>