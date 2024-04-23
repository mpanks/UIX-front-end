<script lang="ts">
    function assess(){
        window.location.href="/student/assess";
    }
    function bookMeeting(){
        window.location.href="/student/bookMeeting";
    }
    function viewMeeting() {
        window.location.href="./viewMeeting";
    }
    function logOut()
    {
        window.location.href="/"
    }
</script>
<section>
<main>
    <div class="center">
        <div class="template">
            <button class="assess" on:click={assess}>Self Assess</button><br>
            <div class="grid">
                <button class="grid-item" on:click={bookMeeting}>Book Meeting</button>
                <button class="grid-item" on:click={viewMeeting}>View Meeting</button>
            </div>
            <br>
            <button class="logout" on:click={logOut}>Log Out</button>
        </div>
    </div>
</main>
</section>
<style>
.grid{
    display:grid;
    grid-template-columns: auto auto;
    padding: 10px;
    gap:10px;
}
.grid-item{
    text-align: center;
    gap:4px;
}
.template{
    margin:auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.grid-item, .assess{
    width: 490px;
    height: 190px;
    font-size: 64px;
}
.logout{
    width: 220px;
    height: 90px;
    font-size: 55px;
}
</style>