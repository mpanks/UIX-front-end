<script lang="ts">
    function assess(){
        window.location.href="/student/assess"
    }
</script>
<section>
    <link rel="stylesheet" href="src/routes/style.css">

    <div class="template">
        <button class="assess" on:click={assess}>Student Assessments</button><br>
        <div class="grid">
            <button class="grid-item">Book Meeting</button>
            <button class="grid-item">View Meeting</button>
        </div>
        <br>
        <button class="logout">Log Out</button>
    </div>
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