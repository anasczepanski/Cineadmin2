const form = document.querySelector("#form");
const loginInput = document.querySelector("#login");
const passwordInput = document.querySelector("#password");
function enviar(){
    window.location = "telainicial.html";
}

form.addEventListener("submit", (event) => {

    event.preventDefault();

    //Verifica se o login é diferente de admin
    if(loginInput.value !== "admin") {
        alert("Somente usuários administradores podem logar no sistema");
        return;
    

    //Se usuário e senha estiverem corretos, o form é submetido
    }else{
    enviar();
}
});