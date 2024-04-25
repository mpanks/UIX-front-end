<script lang="ts">
	import { onMount } from 'svelte';
    import { setCookie} from 'typescript-cookie';

    function assess(){
        window.location.href="/studentAssess";
    }
    function bookMeeting(){
        window.location.href="/bookMeeting";
    }
    function viewMeeting(){
        window.location.href="viewMeeting";
    }
    function logOut(){
        setCookie('user','', {path:'/'});
        window.location.href="."
    }
</script>
<section>
    <main>
        <div class="center">
            <div class="template">
                <button class="assess" on:click={assess}>Student Assessments</button><br>
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
.center{
    margin-top: 5vh;
}
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