const formulario = document.getElementById("formularioContato");

formulario.addEventListener("submit", function(event){ // função que acontece ao clicar em enviar.

    event.preventDefault(); // evita que a pagina recarregue.

    const nome = document.getElementById("nome").value; // resgatando os valores dos campos digitados.
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if(nome === "" || email === "" || mensagem === ""){ // checando se os campos estão vazios.
        alert("Preencha todos os campos!");
        return;
    }

    if(!email.includes("@") || !email.includes(".")){ // checando se o email contém @ ou . que são obrigatórios
        alert("Digite um e-mail válido!");
        return;
    }

    alert("Mensagem enviada com sucesso!"); // caso não haja erros, aparece a mensagem de sucesso.

    formulario.reset();

});
