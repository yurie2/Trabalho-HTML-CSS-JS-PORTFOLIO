const botaoTema = document.getElementById("tema"); // capturando o ID do html "tema" para maniupula-la no JS
const logo = document.querySelector(".logo"); // capturando a class "logo" do html para maniupula-la
const card = document.querySelector(".card"); // capturando a class "card" do html para maniupula-la

botaoTema.addEventListener("click", function(){ // esse comando faz com que aconteça uma função ao clicar no botão

    document.body.classList.toggle("claro"); // esse comando atua como um interruptor de luz, quando clica-do ele altera o tema, e quando clicar novamente é como se tudo voltasse ao padrão. Ele adiciona uma classe ao body chamada "claro".

    if(document.body.classList.contains("claro")){ // se dentro do body existir uma class chamada "claro", o próximo bloco de comando é executado

        logo.src = "imagens/logo-YE-Escuro.png"; // Fiz uma logo escura para a original não sumir com o tema claro

        botaoTema.textContent = "Alterar tema para Escuro"; // modifica o texto do botão
        botaoTema.style.backgroundColor = "#555"; // altera a cor de fundo 
        botaoTema.style.color = "white"; // altera a cor do texto

    } else { // se não existir, o tema fica claro.

        logo.src = "imagens/logo-YE.png";

        botaoTema.textContent = "Alterar tema para Claro"; // altera o texto do botão
        botaoTema.style.backgroundColor = "#1C73E6"; // altera cor de fundo
        botaoTema.style.color = "white"; // altera a cor do texto

    }
    
});