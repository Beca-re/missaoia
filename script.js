const perguntas = [

    {
        pergunta: "1. Você encontra uma câmera capaz de fotografar automaticamente os melhores momentos da sua vida. O que pensa?",
        alternativas: [
            "Isso é incrível! Quero experimentar.",
            "Prefiro continuar escolhendo o que fotografar."
        ]
    },

    {
        pergunta: "2. Uma nova inteligência artificial consegue melhorar suas fotos automaticamente. Você...",
        alternativas: [
            "Usaria a IA para deixar as fotos mais bonitas.",
            "Evitaria a IA para manter a fotografia mais natural."
        ]
    },

    {
        pergunta: "3. No futuro, câmeras poderão registrar imagens em 3D. Qual seria sua reação?",
        alternativas: [
            "Adoraria guardar memórias em 3D.",
            "A fotografia tradicional ainda seria minha preferência."
        ]
    },

    {
        pergunta: "4. Uma IA consegue criar uma fotografia de uma pessoa que nunca existiu. Isso seria...",
        alternativas: [
            "Uma nova forma de arte.",
            "Algo preocupante, pois pode confundir realidade e ficção."
        ]
    },

    {
        pergunta: "5. Você recebe uma câmera que não precisa de fotógrafo, pois escolhe automaticamente o melhor ângulo.",
        alternativas: [
            "Usaria a tecnologia para facilitar meu trabalho.",
            "Continuaria controlando câmera, luz e composição."
        ]
    },

    {
        pergunta: "6. As fotografias do futuro poderão ser projetadas como hologramas. Você gostaria de ter essa experiência?",
        alternativas: [
            "Sim! Seria incrível reviver momentos dessa maneira.",
            "Não. Prefiro fotos impressas ou digitais tradicionais."
        ]
    },

    {
        pergunta: "7. Uma tecnologia permite restaurar fotografias antigas usando inteligência artificial. Você...",
        alternativas: [
            "Usaria para recuperar memórias antigas.",
            "Teria cuidado para não alterar demais a fotografia original."
        ]
    },

    {
        pergunta: "8. No futuro, será possível tirar fotos sem usar câmeras físicas, apenas com dispositivos inteligentes.",
        alternativas: [
            "A tecnologia tornará a fotografia mais acessível.",
            "As câmeras físicas continuarão tendo um valor especial."
        ]
    },

    {
        pergunta: "9. Você acredita que a inteligência artificial poderá substituir alguns fotógrafos?",
        alternativas: [
            "Sim, em algumas áreas a tecnologia poderá assumir funções.",
            "Não completamente. A criatividade humana continuará sendo importante."
        ]
    },

    {
        pergunta: "10. Depois de conhecer todas essas tecnologias, como você imagina o futuro da fotografia?",
        alternativas: [
            "Um futuro tecnológico, criativo e cheio de novas possibilidades.",
            "Um futuro que deve equilibrar tecnologia, ética e criatividade humana."
        ]
    }

];


let perguntaAtual = 0;

let escolhas = [];

let pontosTecnologia = 0;

let pontosHumano = 0;


function iniciar() {

    document.getElementById("inicio").classList.remove("ativa");

    document.getElementById("perguntas").classList.add("ativa");

    mostrarPergunta();
}


function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    document.getElementById("pergunta").textContent =
        pergunta.pergunta;

    document.getElementById("contador").textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    const porcentagem =
        ((perguntaAtual + 1) / perguntas.length) * 100;

    document.getElementById("progresso").style.width =
        `${porcentagem}%`;


    const alternativas =
        document.getElementById("alternativas");

    alternativas.innerHTML = "";


    pergunta.alternativas.forEach((alternativa, indice) => {

        const botao = document.createElement("button");

        botao.classList.add("alternativa");

        botao.textContent = alternativa;

        botao.onclick = () => escolher(indice);

        alternativas.appendChild(botao);

    });

}


function escolher(indice) {

    const pergunta = perguntas[perguntaAtual];

    const escolha = pergunta.alternativas[indice];

    escolhas.push(escolha);


    /*
        A primeira alternativa representa
        uma visão mais tecnológica.

        A segunda representa uma visão
        mais ligada à criatividade humana,
        tradição e ética.
    */

    if (indice === 0) {

        pontosTecnologia++;

    } else {

        pontosHumano++;

    }


    perguntaAtual++;


    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        mostrarResultado();

    }

}


function mostrarResultado() {

    document.getElementById("perguntas")
        .classList.remove("ativa");

    document.getElementById("resultado")
        .classList.add("ativa");


    let titulo = "";

    let texto = "";


    if (pontosTecnologia >= 7) {

        titulo = "📸 A Fotografia do Futuro é Tecnológica";

        texto = `
            Você acredita que a tecnologia terá um papel muito importante
            no futuro da fotografia. Para você, inteligência artificial,
            câmeras inteligentes, imagens 3D e novas ferramentas digitais
            podem transformar completamente a maneira como registramos
            nossas memórias.
            
            No seu futuro, fotógrafos e tecnologias trabalham juntos para
            criar imagens cada vez mais criativas e impressionantes.
        `;

    } else if (pontosHumano >= 7) {

        titulo = "🎨 A Fotografia Continua Humana";

        texto = `
            Para você, a tecnologia pode ajudar, mas a essência da fotografia
            continuará dependendo da criatividade e do olhar humano.
            
            No seu futuro, fotógrafos continuam escolhendo momentos,
            sentimentos, enquadramentos e histórias. A inteligência artificial
            é apenas uma ferramenta, e não substitui a sensibilidade humana.
        `;

    } else {

        titulo = "⚖️ Tecnologia e Criatividade Caminham Juntas";

        texto = `
            Suas escolhas mostram que você acredita em um equilíbrio entre
            tecnologia e criatividade humana.
            
            No futuro, a inteligência artificial poderá ajudar os fotógrafos
            em diversas tarefas, mas decisões criativas, emoções e histórias
            continuarão tendo grande importância.
            
            A fotografia do futuro será uma mistura entre inovação tecnológica
            e o olhar único de cada pessoa.
        `;

    }


    document.getElementById("tituloResultado")
        .textContent = titulo;

    document.getElementById("textoResultado")
        .textContent = texto;


    const lista =
        document.getElementById("listaEscolhas");

    lista.innerHTML = "";


    escolhas.forEach((escolha, indice) => {

        const item = document.createElement("li");

        item.textContent =
            `Pergunta ${indice + 1}: ${escolha}`;

        lista.appendChild(item);

    });

}


function reiniciar() {

    perguntaAtual = 0;

    escolhas = [];

    pontosTecnologia = 0;

    pontosHumano = 0;


    document.getElementById("resultado")
        .classList.remove("ativa");

    document.getElementById("inicio")
        .classList.add("ativa");

}
