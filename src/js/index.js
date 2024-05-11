/* 
    Objetivo 1 - Quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html.
        Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário cliecar em cima dele.
        Passo 2 - identificar o clique no botão.
        Passo 3 - adicionar a classe "ativo" nos projetos escondidos.

    Objetivo 2 - esconder o botão de mostrar mais
        Passo 1 - pegar o botão e esconder ele
*/

// Objetivo 1 - Quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html.

// Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário cliecar em cima dele.

// console.log(document.querySelector('.btn-mostrar-projetos')); -> Só para exemplificar.
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    // Passo 3 - adicionar a classe "ativo" nos projetos escondidos.
    mostrarMaisProjetos(); // Refatoração.
    
    // Objetivo 2 - esconder o botão de mostrar mais.
    // Passo 1 - pegar o botão e esconder ele.
    esconderBotao(); // // Refatoração.
})

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
