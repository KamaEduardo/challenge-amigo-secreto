//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista para armazenar os nomes
let amigos = [];


 /**
 * Função para adicionar um novo amigo
 * - Lê o valor do campo de texto
 * - Valida se não está vazio
 * - Impede nomes duplicados
 * - Limpa o campo após adicionar
 */
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Digite um nome válido!');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = '';
}

// Função para atualizar a lista exibida
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((nome, index) => {
        const li = document.createElement('li');
        li.textContent = nome;

        // Botão para remover nome
        const btnRemover = document.createElement('button');
        btnRemover.textContent = '❌';
        btnRemover.onclick = () => removerAmigo(index);

        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}

// Função para remover amigo
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

// Função para sortear amigo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear!');
        return;
    }

// Escolhe um índice aleatório entre 0 e (amigos.length - 1)
// e pega o nome correspondente do array amigos
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}
