<script lang="ts">
	import { onMount } from "svelte";
    import {getCookie} from "typescript-cookie";

    let user: string = getCookie("user") ?? "";
    let student: Boolean = true;
    let submitted:Boolean = false;
    onMount(()=>{
        let label:string="";
        switch(user){
            case "supervisor":
                label = "Tutor"
                break;
            case "tutor":
                label = "Supervisor"
                break;
            default:
                //...how?
                window.location.href="/";
                break;
        }
        let def_tog = document.getElementById("right") as HTMLButtonElement;
        if(def_tog) def_tog.innerText=label;
    });
    function toggle(){
        let left = document.getElementById("left");
        let right = document.getElementById("right");
        if(student){
            student = false;
            left?.style.setProperty('background-color','#DDDBFB');
            right?.style.setProperty('background-color','#C3BEF7');
        } 
        else{
            student = true;
            left?.style.setProperty('background-color','#C3BEF7');
            right?.style.setProperty('background-color','#DDDBFB')

        }
    };
    function cancel(){
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
    function close(){
        let modal = document.getElementById("modal");
        if(modal) modal.style.display = "none";  
        if(submitted) window.location.href="./staff";    
    }
    function submit(){
        //TODO: Modify to check date is in future - maybe
        let name = document.getElementById("nameinp") as HTMLInputElement;
        let date = document.getElementById("dateinp") as HTMLInputElement;
        let time = document.getElementById("timeinp") as HTMLInputElement;
        let purpose = document.getElementById("purposeinp") as HTMLInputElement;
        let message:string="";

        if(!name.value) message+= "Please input name.<br>";
        if(!date.value) message+= "Please input date.<br>";
        if(!time.value) message+= "Pleaes input time.<br>";
        if(!purpose.value) message+= "Please input meeting purpose.<br>";
        let modal = document.getElementById("modal");
        let content = document.getElementById("modalText");

        if(message==""){
            if(content) {
                content.textContent = "Meeting requested.";
                content.style.setProperty('color','green');
                submitted = true;
            }
        }
        else{
            if(content){
                content.innerHTML = message;
                content.style.setProperty('color','red');
            }
        }
        if(modal) modal.style.display = "block";
    }
</script>

<section>
    <main>
        <head>
        </head>
        <div class="center">
            <div class="row1">
                <div class="toggle">
                    <button id="left" class="left" on:click={toggle}>Student</button>
                    <button id="right" class="right" on:click={toggle}></button>
                </div>
                <div class="name">
                    <label for="nameinp" id="namelabel" class="namelabel">Name: </label>
                    <input type="text" id="nameinp" class="nameinp" placeholder="John Smith"/>
                </div>
            </div>
            <div class="datetime">
                <div class="grid-item">
                    <label for="dateinp" id="datelabel" class="datelabel">Date: </label>
                    <input type="date" id="dateinp" class="dateinput"/>
                </div>
                <div class="grid-item">
                    <label for="timeinp" id="timelabel" class="timelabel">Time: </label>
                    <input type="time" id="timeinp" class="timeinput"/>
                </div>
            </div>
            <div class="purpose">
                <label for="purposeinp" id="purposelabel" class="purposelabel">Purpose of Meeting</label>
                <textarea id="purposeinp" class="purposeinput"/>
            </div>
            <div class="additional">
                <label for="additionalinp" id="additionallabel" class="additionallabel">Additional Notes</label>
                <textarea id="additionalinp" class="additionalinput"/>
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
.center, .additional, .purpose{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.row1, .toggle{
    gap: 2%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.name{
    display: flex;
    flex-direction: row;
    justify-content: center;
    
}
.namelabel{
    background-color: #DDDBFB;
    height: 80px;
    font-size: 64px;
    line-height: auto;
    text-align: center;
}
.nameinp{
    background-color: #C3BEF7;
    font-size: 41px;
    max-width: 244px;
    border:0;
}
.toggle, .name{
    max-width: 457px;
    height:80px;
}
.toggle{
    gap:0;
}
.left, .right{
    width:240px;
    font-size: 49px;
}
.left{
    border-radius: 5px 0px 0px 5px;
    background-color: #C3BEF7;
}
.right{
    border-radius: 0px 5px 5px 0px;
    background-color: #DDDBFB;
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
.purposelabel, .additionallabel{
    max-height: 72px;
    margin-top: 43px;
    font-size: 54px;
    background-color: #DDDBFB;
    width: 876px;
    padding-top: 2%;
    margin-bottom: 0;
    border-radius: 5px 5px 0px 0px;
    text-align: center;
}
button{
    font-size: 54px;
}
button:hover{
    width: 228px;
    height: 80px;
    box-shadow: 4px 4px 4px 4px;
}
.buttons{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    gap: 5%;
}
.purposeinput, .additionalinput{
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
.additionalinput{
    height: 157px;
}
</style>