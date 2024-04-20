<script lang="ts">
    import {getCookie} from 'typescript-cookie';
    import {reports, type report} from '$lib';

    function close(){
        let modal = document.getElementById("modal");
        if(modal) modal.style.display = "none";  
    }
    function cancel(){
        let user = getCookie("user");
        switch(user){
            case"student":
                window.location.href="/student";
                return;
            case"supervisor":
            case"tutor":
                window.location.href="/staff";
                return;
            default:
                window.location.href="/";
                return;
        }
    }
    function search(){
        let name = document.getElementById("nameinput") as HTMLInputElement;
        let exists = false;
        //Should search REPORTS - not a big dif ngl
        reports.forEach(report => {
            if(report.name.includes(name.value.toUpperCase())){
                //meeting exists
                output(report);
                exists=true;
            }
        });
        if(!exists){
            //100% not copied from /student/viewMeeting
            let modal = document.getElementById("modal");
            let content = document.getElementById("modalText") as HTMLElement;
            content.textContent="Cannot find meeting with information provided, please try agian";
            content.style.setProperty('color', 'red');
            if(modal) modal.style.display = "block";
        }
    }
    function output(result: report){
        let dateinput = document.getElementById("dateinput") as HTMLInputElement;
        let timeinput = document.getElementById("timeinput") as HTMLInputElement;
        let studentname = document.getElementById("nameinput") as HTMLInputElement;
        let confidence = document.getElementById("confidenceinput") as HTMLInputElement;
        let notes = document.getElementById("notesinput") as HTMLInputElement;

        studentname.value = result.name;
        dateinput.valueAsDate = result.datetime;
        timeinput.valueAsDate = result.datetime;
        confidence.value = result.confidence.toString();
        notes.value = result.additional;
    }
</script>
<section>
    <head>
        <link rel="stylesheet" href="src/routes/style.css"/>
    </head>
    <div class="center">
        <div class="name">
            <label for="nameinput" id="namelabel" class="namelabel">Student Name: </label>
            <input type="text" class="nameinput" id="nameinput" placeholder="John Smith"/>
        </div>
        <div class="datetime">
            <div class="date">
                <label for="dateinput" class="datelabel">Date: </label>
                <input type="date" id="dateinput" class="dateinput">
            </div>
            <div class="time">
                <label for="timeinput" class="timelabel">Time: </label>
                <input type="time" id="timeinput" class="timeinput">
            </div>
        </div>
        <div class="buttons">
            <button class="cancel" on:click={cancel}>Cancel</button>
            <button class="submit" on:click={search}>Search</button>
        </div>
        <div class="details">
            <div class="confidence">
                <label for="confidenceinput" class="confidencelabel">Confidence Level</label>
                <textarea name="confidenceinput" id="confidenceinput" class="confidenceinput" placeholder="1-5"/>
            </div>
            <div class="notes">
                <label for="notesinput" class="noteslabel">Additional Notes</label>
                <textarea name="notesinput" id="notesinput" class="notesinput"></textarea>
            </div>
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
    justify-content: center;
    align-items: center;
}
.name, .datetime, .date, .time, .buttons,.confidence{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top:1%;
    margin-bottom: auto;
}
.name,.datetime{
    margin-bottom:0px;
    max-height: 80px
}
.name{
    margin-top:auto;
}
.namelabel{
    margin-bottom: auto;
    text-align: center;
    line-height: auto;
    font-size: 44px;
    padding:2%;
    background-color: #DDDBFB;
    border-radius: 5px 0px 0px 5px; 
}
.nameinput{
    margin-bottom: auto;
    font-family: "Open Sans";
    text-align: center;
    width:40%;
    padding:2%;
    background-color: #C3BEF7;
    font-size: 44px;
    border: 0px;
    border-radius: 0px 5px 5px 0px;
}
.datetime, .buttons{
    width: 100%;
    gap:10%;
}
.datelabel, .timelabel{
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;
    padding: 2%;
    font-size: 44px;
    background-color: #DDDBFB;
    border-radius: 5px 0px 0px 5px; 
}
.dateinput, .timeinput{
    margin-top: auto;
    margin-bottom: auto;
    width: 291px;
    padding:2%;
    background-color: #C3BEF7;
    text-align: center;
    font-size: 44px;
    border: 0px;
    border-radius: 0px 5px 5px 0px;
}
button{
    width: 343px;
    height: 133px;
    font-size: 64px;
    margin-top: 0.5%;
}
button:hover{
    width: 347px;
    height: 137px;
}
.confidencelabel{
    max-height: 82px;
    margin-top: 1%;
    font-size: 54px;
    background-color: #DDDBFB;
    text-align: center;
    justify-self: center;
    padding:1%;
    border-radius: 5px 0px 0px 5px; 
}
.confidenceinput{
    max-height: 82px;
    text-align: center;
    font-family: "Open Sans";
    margin-top:1%;
    margin-bottom: auto;
    width:15%;
    background-color: #C3BEF7;
    font-size: 54px;
    border: 0px;
    border-radius: 0px 5px 5px 0px;
}
.notes{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.noteslabel{
    font-size: 54px;
    background-color: #DDDBFB;
    width: 830px;
    padding: 1.25% 2.7%;
    margin-top:1%;
    margin-bottom: 0;
    text-align: center;
    border-radius: 5px 5px 0px 0px;
}
.notesinput{
    margin-top: 0;
    font-size: 32px;
    width: 830px;
    height: 443px;
    padding: 1.25% 2.7%;
    background-color: #C3BEF7;
    border: 0px;
    border-radius: 0px 0px 5px 5px;
}
textarea{
    resize: none;
}
</style>