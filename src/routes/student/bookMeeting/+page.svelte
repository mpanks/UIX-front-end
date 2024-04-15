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
            <button class="cancel">Cancel</button>
            <button class="submit">Submit</button>
        </div>
    </div>
</section>
<style>
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
        /*Edit width...I'm lazy*/
        text-align: center;
        width:40%;
        background-color: #C3BEF7;
        font-size: 54px;
        border: 0px;
        border-radius: 0px 5px 5px 0px;
    }
    .datetime{
        margin-top: 50px;
        width: 100%;
        max-height: 62px;
        display:flex;
        flex-direction: row;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
        gap: 10%;
    }
    .dateinput, .timeinput{
        width: 291px;
        background-color: #C3BEF7;
        text-align: center;
        font-size: 40px;
    }
    .grid-item{
        display:flex;
        flex-direction: row;
    }
    .datelabel, .timelabel{
        max-height: 71px;
        font-size: 54px;
        background-color: #DDDBFB;
        padding: 3%;
        border-radius: 5px 0px 0px 5px; 
    }
    .details{
        display:flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    .purposelabel,.noteslabel{
        margin-top: 43px;
        font-size: 54px;
        background-color: #DDDBFB;
        width: 830px;
        padding: 2.7%;
        margin-bottom: 0;
        text-align: center;
        border-radius: 5px 5px 0px 0px;
    }
    .purposeinput, .notesinput{
        font-size: 32px;
        width: 872px;
        background-color: #C3BEF7;
        border: 0px;
        border-radius: 0px 0px 5px 5px;
        margin-top: 0px;
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
</style>