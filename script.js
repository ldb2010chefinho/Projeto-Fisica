//Autoral
const espaco = document.getElementById("espaco");
const espaco_inicial = document.getElementById("espaco_inicial");
const velocidade_inicial = document.getElementById("velocidade_inicial");
const velocidade = document.getElementById("velocidade");
const aceleracao = document.getElementById("aceleracao");

const label_espaco = document.getElementById("label_espaco");
const label_espaco_inicial = document.getElementById("label_espaco_inicial");
const label_velocidade_inicial = document.getElementById("label_velocidade_inicial");
const label_velocidade = document.getElementById("label_velocidade");
const label_aceleracao = document.getElementById("label_aceleracao");

const btn_enviar = document.getElementById("btn_enviar");
const entradaValores = document.getElementById("entradaValores");
const tipo = document.getElementById("tipo");

tipo.addEventListener("change", function () {
    entradaValores.style.display = "block";
    if (tipo.value === "mru") {
        label_espaco.style.display = "block";
        espaco.style.display = "block";
        label_espaco_inicial.style.display = "block";
        espaco_inicial.style.display = "block";
        label_velocidade_inicial.style.display = "none";
        velocidade_inicial.style.display = "none";
        label_velocidade.style.display = "block";
        velocidade.style.display = "block";
        label_aceleracao.style.display = "none";
        aceleracao.style.display = "none";

    } else if (tipo.value === "mruv") {
        label_espaco.style.display = "block";
        espaco.style.display = "block";
        label_espaco_inicial.style.display = "block";
        espaco_inicial.style.display = "block";
        label_velocidade_inicial.style.display = "block";
        velocidade_inicial.style.display = "block";
        label_velocidade.style.display = "none";
        velocidade.style.display = "none";
        label_aceleracao.style.display = "block";
        aceleracao.style.display = "block";
    }
});

// ── Gráficos ──────────────────────────────────────────────
const graficos = {};

function criarGrafico(idCanvas, label, tempos, dados, corBorda) {
    if (graficos[idCanvas]) {
        graficos[idCanvas].destroy();
    }

    const ctx = document.getElementById(idCanvas).getContext("2d");
    //A parte do datasets foi gerada por IA
    graficos[idCanvas] = new Chart(ctx, {
        type: "line",
        data: {
            labels: tempos,
            datasets: [{
                label: label,
                data: dados,
                borderColor: corBorda,
                backgroundColor: "rgba(0,0,0,0)",
                borderWidth: 2,
                pointRadius: 3
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { title: { display: true, text: "Tempo (s)" } },
                y: { title: { display: true, text: label } }
            }
        }
    });
}
// ─────────────────────────────────────────────────────────

btn_enviar.addEventListener("click", function () {
    let tempos = [];
    let posicoes = [];
    let velocidades = [];
    let aceleracoes = [];

    let s0 = parseFloat(espaco_inicial.value);
    let s  = parseFloat(espaco.value);
    let v0 = parseFloat(velocidade_inicial.value);
    let v  = parseFloat(velocidade.value);
    let a  = parseFloat(aceleracao.value);

    if (tipo.value === "mru") {
        // s = s0 + v * t  →  t = (s - s0) / v
        let t_total = (s - s0) / v;
        for (let i = 0; i <= t_total; i++) {
            tempos.push(i);
            posicoes.push(s0 + v * i);
            velocidades.push(v);
        }
        criarGrafico("grafico_posicao",    "Posição (m)",      tempos, posicoes,    "blue");
        criarGrafico("grafico_velocidade", "Velocidade (m/s)", tempos, velocidades, "green");

    } else if (tipo.value === "mruv") {
        // s = s0 + v0*t + a*t²/2  →  resolve t via bhaskara
        let discriminante = v0 * v0 + 2 * a * (s - s0);
        let t_total = Math.max((-v0 + Math.sqrt(discriminante)) / a, (-v0 - Math.sqrt(discriminante)) / a);
        for (let i = 0; i <= t_total; i++) {
            tempos.push(i);
            posicoes.push(s0 + v0 * i + (a * i * i) / 2);
            velocidades.push(v0 + a * i);
            aceleracoes.push(a);
        }
        criarGrafico("grafico_posicao",    "Posição (m)",      tempos, posicoes,    "blue");
        criarGrafico("grafico_velocidade", "Velocidade (m/s)", tempos, velocidades, "green");
        criarGrafico("grafico_aceleracao", "Aceleração (m/s²)", tempos, aceleracoes, "red");
    }
});
