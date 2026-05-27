const espaco = document.getElementById("espaco");
const espaco_inicial = document.getElementById("espaco_inicial");
const posicao_inicial = document.getElementById("posicao_inicial");
const posicao = document.getElementById("posicao");
const velocidade_inicial = document.getElementById("velocidade_inicial");
const velocidade = document.getElementById("velocidade");
const tempo = document.getElementById("tempo");
const aceleracao = document.getElementById("aceleracao");
const variacaoEspaco = document.getElementById("variacaoEspaco");

const label_espaco = document.getElementById("label_espaco");
const label_espaco_inicial = document.getElementById("label_espaco_inicial");
const label_posicao = document.getElementById("label_posicao");
const label_posicao_inicial = document.getElementById("label_posicao_inicial");
const label_velocidade_inicial = document.getElementById("label_velocidade_inicial");
const label_velocidade = document.getElementById("label_velocidade");
const label_tempo = document.getElementById("label_tempo");
const label_aceleracao = document.getElementById("label_aceleracao");
const label_variacaoEspaco = document.getElementById("label_variacaoEspaco");

const btn_enviar = document.getElementById("btn_enviar");
const entradaValores = document.getElementById("entradaValores");
const tipo = document.getElementById("tipo");
tipo.addEventListener("change", function () {
    entradaValores.style.display = "block";
    if (tipo.value === "mru") {
        // double espaco, espacoInicial, velocidade, tempo
        label_espaco.style.display = "block";
        espaco.style.display = "block";

        label_espaco_inicial.style.display = "block";
        espaco_inicial.style.display = "block";

        label_posicao_inicial.style.display = "none";
        posicao_inicial.style.display = "none";

        label_posicao.style.display = "none";
        posicao.style.display = "none";

        label_velocidade_inicial.style.display = "none";
        velocidade_inicial.style.display = "none";

        label_velocidade.style.display = "block";
        velocidade.style.display = "block";

        label_tempo.style.display = "block";
        tempo.style.display = "block";

        label_aceleracao.style.display = "none";
        aceleracao.style.display = "none";

        label_variacaoEspaco.style.display = "none";
        variacaoEspaco.style.display = "none";

    } else if (tipo.value === "mruv1") {
        // double aceleracao, velocidadeInicial, velocidade, tempo
        label_espaco.style.display = "none";
        espaco.style.display = "none";

        label_espaco_inicial.style.display = "none";
        espaco_inicial.style.display = "none";

        label_posicao_inicial.style.display = "none";
        posicao_inicial.style.display = "none";

        label_posicao.style.display = "none";
        posicao.style.display = "none";

        label_velocidade_inicial.style.display = "block";
        velocidade_inicial.style.display = "block";

        label_velocidade.style.display = "block";
        velocidade.style.display = "block";

        label_aceleracao.style.display = "block";
        aceleracao.style.display = "block";

        label_tempo.style.display = "block";
        tempo.style.display = "block";

        label_variacaoEspaco.style.display = "none";
        variacaoEspaco.style.display = "none";

    } else if (tipo.value === "mruv2") {
        // double espaco, espacoInicial, velocidadeInicial, tempo, aceleracao
        label_espaco.style.display = "block";
        espaco.style.display = "block";

        label_espaco_inicial.style.display = "block";
        espaco_inicial.style.display = "block";

        label_posicao_inicial.style.display = "none";
        posicao_inicial.style.display = "none";

        label_posicao.style.display = "none";
        posicao.style.display = "none";

        label_velocidade_inicial.style.display = "block";
        velocidade_inicial.style.display = "block";

        label_velocidade.style.display = "none";
        velocidade.style.display = "none";

        label_aceleracao.style.display = "block";
        aceleracao.style.display = "block";

        label_tempo.style.display = "block";
        tempo.style.display = "block";

        label_variacaoEspaco.style.display = "none";
        variacaoEspaco.style.display = "none";

    } else if (tipo.value === "mruv3") {
        // double velocidadeInicial, aceleracao, velocidade, variacaoEspaco
        label_espaco.style.display = "none";
        espaco.style.display = "none";

        label_espaco_inicial.style.display = "none";
        espaco_inicial.style.display = "none";

        label_posicao_inicial.style.display = "none";
        posicao_inicial.style.display = "none";

        label_posicao.style.display = "none";
        posicao.style.display = "none";

        label_velocidade_inicial.style.display = "block";
        velocidade_inicial.style.display = "block";

        label_velocidade.style.display = "block";
        velocidade.style.display = "block";

        label_aceleracao.style.display = "block";
        aceleracao.style.display = "block";

        label_tempo.style.display = "none";
        tempo.style.display = "none";

        label_variacaoEspaco.style.display = "block";
        variacaoEspaco.style.display = "block";
    }
});

btn_enviar.addEventListener("click", function () {
        let tempos = [];
        let espacos = [];
        let s0 = parseFloat(espaco_inicial.value);
        let v0 = parseFloat(velocidade_inicial.value);
        let v = parseFloat(velocidade.value);
        let t = parseFloat(tempo.value);
        let a = parseFloat(aceleracao.value); 

        if (tipo.value === "mru") {
            // Fórmula: s = s0 + v * t
            for (let i = 0; i <= t; i++) {
                tempos.push(i);
                espacos.push(s0 + v * i);
            }
        } else if (tipo.value === "mruv1") {
            // Fórmula: v = v0 + a * t
            for (let i = 0; i <= t; i++) {
                tempos.push(i);
                espacos.push(v0 + a * i);
            }
            
        } else if (tipo.value === "mruv2") {
            // Fórmula: s = s0 + v0 * t + (a * t²) / 2
            for (let i = 0; i <= t; i++) {
                tempos.push(i);
                espacos.push(s0 + v0 * i + (a * i * i) / 2);

            }
        } else if (tipo.value === "mruv3") {
            // Fórmula: Δs = v0 * t + (a * t²) / 2
            for (let i = 0; i <= t; i++) {
                tempos.push(i);
                espacos.push(v0 * i + (a * (i * i)) / 2);
            }
        }
    })
