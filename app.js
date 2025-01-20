//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let resultados = []; // Array para armazenar os resultados do sorteio
let indiceResultado = 0; // Índice do resultado atual

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarListaAmigos();
        input.value = '';
    } else {
        alert('Por favor, insira um nome válido e que ainda não foi adicionado.');
    }
}

// Função para atualizar a lista de amigos exibida na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear.');
        return;
    }

    resultados = []; // Limpa os resultados anteriores
    const amigosSorteados = [...amigos]; // Cria uma cópia do array de amigos

    amigos.forEach(amigo => {
        const index = Math.floor(Math.random() * amigosSorteados.length);
        const amigoSorteado = amigosSorteados[index];
        resultados.push(`${amigo} sorteou ${amigoSorteado}`);
        amigosSorteados.splice(index, 1); // Remove o amigo sorteado
    });

    indiceResultado = 0; // Reseta o índice para o primeiro resultado
    mostrarProximoResultado(); // Mostra o primeiro resultado
}

// Função para mostrar o próximo resultado
function mostrarProximoResultado() {
    const listaResultados = document.getElementById('resultado');
    listaResultados.innerHTML = ''; // Limpa a lista atual

    if (indiceResultado < resultados.length) {
        const li = document.createElement('li');
        li.textContent = resultados[indiceResultado]; // Exibe o resultado atual
        listaResultados.appendChild(li);
        indiceResultado++; // Incrementa o índice para o próximo resultado
    } else {
        alert('Todos os resultados foram exibidos!'); // Alerta quando todos os resultados foram mostrados
    }
}