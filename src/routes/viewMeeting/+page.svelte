<script lang="ts">
    //I hope the marking's going well, John
    import {meetings, type meeting} from '$lib';
    import {getCookie} from 'typescript-cookie'
    import{onMount} from 'svelte'

    onMount(()=>{
        let name = document.getElementById("namelabel");
        let text:string = "";
        let user = getCookie("user");
        switch(user){
            case "student":
                text = "Supervisor Name:"
                break;
            case "supervisor":
                case"tutor":
                text = "Student Name:"
                break;
            default:
                text = "Name:"
                break;
        }
        if(name) name.textContent = text;
    });
    function close(){
        let modal = document.getElementById("modal");
        if(modal) modal.style.display = "none";
    }
    function cancel(){
        let user = getCookie("user");
        switch(user){
            case "student":
                window.location.href="./student";
                return;
            case"supervisor":
            case"tutor":
                window.location.href="./staff";
                return;
            default:
                window.location.href = "/";
                return;
        }
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
    <main>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale-1">
        </head>
        <div class="center">
            <div class="supervisor">
                <!--Supervisors information-->
                <label for="supervisorname" id="namelabel" class="supervisorlabel">Student Name: </label>
                <input type="text" placeholder="John Smith" id="nameinput" class="supervisorinput"/>
            </div>
            <div class="datetime">
                <!--Date & Time-->
                <div class="grid-item">
                    <label for="meetingdate" id="datelabel" class="datelabel">Date: </label>
                    <input type="date" placeholder="DD/MM/YYYY" id="dateinput" class="dateinput"/>
                </div>
                <div class="grid-item">
                    <label for="meetingtime" id="timelabel" class="timelabel">Time: </label>
                    <input type="time" placeholder="HH:MM" id="timeinput" class="timeinput"/>
                </div>
            </div>
            <div class="details">
                <label for="meetingpurpose" id="purposelabel" class="purposelabel">Purpose of Meeting</label>
                <textarea id="meetingpurpose" class="purposeinput"/><br>
                <label for="addintionalnotes" id="noteslabel" class="noteslabel">Additional Notes</label>
                <textarea id="notes" class="notesinput"/>
            </div>
            <div class="buttons">
                <button class="cancel" on:click={cancel}>Cancel</button>
                <button class="submit" on:click={search}>Submit</button>
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
        width: 60%;
        text-align: center;
    }
    .supervisorlabel{
        font-size: 54px;
        background-color: #DDDBFB;
        padding: 3%;
        border-radius: 5px 0px 0px 5px; 
        width: 50%
    }
    .supervisorinput{
        font-family: "Open Sans";
        text-align: center;
        width:50%;
        background-color: #C3BEF7;
        font-size: 54px;
        border: 0px;
        border-radius: 0px 5px 5px 0px;

    }
    .datetime{
        margin-top: 2%;
        width: 60%;
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
        width: 60%;
    }
    .purposelabel,.noteslabel{
        margin-top: 43px;
        font-size: 54px;
        background-color: #DDDBFB;
        width: 100%;
        margin-bottom: 0;
        border-radius: 5px 5px 0px 0px;
    }
    .purposeinput, .notesinput{
        font-size: 32px;
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