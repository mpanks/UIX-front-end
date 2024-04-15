<script lang="ts">
    import {setCookie} from 'typescript-cookie';
    let usertype:string;
    function login(){
        switch(usertype.toLocaleLowerCase()){
            case "student":
                setCookie('user', 'student', {path:'/'});
                window.location.href="/student";
                break;
            case "supervisor":
                setCookie('user', 'supervisor', {path:'/'});
                window.location.href="/supervisor";
                break;
            case "tutor":
                setCookie('user', 'tutor');
                window.location.href="/tutor";
                break;
            default:
                let test:HTMLElement | null =document.getElementById("hidden");
                if (test) {test.style.color = "red";}
                break;
        }
    }
</script>
<!--<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div class="input">
    <input type="text" id="username"><br>
    <input type="password" id="password"><br>
    <button class="logIn"> LogIn</button><br>

</div>
<div class="labels">
    <label for="username" >Username</label><br>
    <label for="password">Password</label><br>
</div>
-->
<head>
    <link rel="stylesheet" href="src/routes/style.css">
</head>
<div class="center">
    <table>
        <tr>
            <!--<td><label for="username">Username</label></td>-->
            <td><input placeholder="Username" type="text" bind:value={usertype} id="username" ></td>
        </tr>
        <tr>
            <!--<td><label for="password">Password</label></td>-->
            <td><input placeholder="Password" type="password" id="password"></td>
        </tr>
    </table>
    <p class="hidden" id="hidden">Invalid Credentials</p>
    <div class="formbutton">
        <button on:click={login}>LogIn</button>
    </div>
</div>


<style src="style.css">
.center{
    position:relative;
    margin: auto;
    padding: 20%;
    justify-content: center;
}
.hidden{
    color: white;
}
table{
    margin: auto;
    padding: 1%;
    vertical-align: middle;
}
input{
    width: 200px;
    height: 40px;
    border-radius: 15px;
    box-shadow: 4px 4px 4px;
}
button{
    margin:0;
    box-shadow: 4px 4px 4px;
    font-size: 55px;
}

.formbutton{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>