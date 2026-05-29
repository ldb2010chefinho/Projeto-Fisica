# 📐 Calculadora de Movimento
Aplicação web para calcular e visualizar movimentos físicos (MRU e MRUV) com gráficos interativos gerados em tempo real.

 ## Funcionalidades

Seleção do tipo de movimento via menu dropdown
Exibição dinâmica apenas dos campos necessários para cada equação
Cálculo automático do tempo total a partir dos parâmetros fornecidos
Plotagem de gráficos de Posição, Velocidade e Aceleração × Tempo

---

## Estrutura de Arquivos
```
projeto/
├── index.html
├── script.js
└── style.css
```

---

## Como Usar

Abra o arquivo index.html em qualquer navegador moderno (sem necessidade de servidor).
Selecione o tipo de movimento no menu dropdown.
Preencha os campos que aparecerem.
Clique em Enviar para calcular e visualizar os gráficos.

---

## Parâmetros por Tipo de Movimento
### MRU — Movimento Retilíneo Uniforme

Velocidade constante, sem aceleração.

CampoDescriçãoEspaço (s)Posição final (m)Espaço Inicial (s₀)Posição inicial (m)Velocidade (v)Velocidade constante (m/s)
Fórmula: s = s₀ + v · t

### MRUV — Movimento Retilíneo Uniformemente Variado

Aceleração constante, velocidade variável.

CampoDescriçãoEspaço (s)Posição final (m)Espaço Inicial (s₀)Posição inicial (m)Velocidade Inicial (v₀)Velocidade no instante t = 0 (m/s)Aceleração (a)Aceleração constante (m/s²)
Fórmulas: s = s₀ + v₀·t + (a·t²)/2 | v = v₀ + a·t
---
## Tecnologias

HTML5 — estrutura da página
CSS3 — estilização
JavaScript (ES6) — lógica e manipulação do DOM
Chart.js — renderização dos gráficos (via CDN)

---
## Visite o Site
- https://ldb2010chefinho.github.io/Projeto-Fisica/
