# 📐 Calculadora de Movimento

Aplicação web para calcular e visualizar movimentos físicos (**MRU** e **MRUV**).

---

## 📋 Funcionalidades

- Seleção do tipo de movimento via menu dropdown
- Exibição dinâmica apenas dos campos necessários para cada equação
- Cálculo das posições/velocidades ao longo do tempo
- Plotagem de gráfico com os resultados

---

## 🔢 Tipos de Movimento Suportados

| Opção | Tipo | Equação | Campos necessários |
|-------|------|---------|-------------------|
| MRU | Movimento Retilíneo Uniforme | `s = s₀ + v · t` | Espaço Inicial, Velocidade, Tempo |
| MRUV1 | MRUV — 1ª Equação | `v = v₀ + a · t` | Velocidade Inicial, Velocidade, Aceleração, Tempo |
| MRUV2 | MRUV — 2ª Equação | `s = s₀ + v₀·t + (a·t²)/2` | Espaço, Espaço Inicial, Velocidade Inicial, Aceleração, Tempo |
| MRUV3 | MRUV — 3ª Equação (Torricelli) | `v² = v₀² + 2·a·ΔS` | Velocidade Inicial, Velocidade, Aceleração, Variação do Espaço |

> **Observação:** o MRUV3 (Equação de Torricelli) ainda está em desenvolvimento.

---

## 🗂️ Estrutura de Arquivos

```
projeto/
├── index.html
├── script.js
└── style.css
```

---

## 🚀 Como Usar

1. Abra o arquivo `index.html` em qualquer navegador moderno (sem necessidade de servidor).
2. Selecione o tipo de movimento no menu dropdown.
3. Preencha os campos que aparecerem.
4. Clique em **Enviar** para calcular e visualizar o gráfico.

---

## 🛠️ Tecnologias

- **HTML5** — estrutura da página
- **CSS3** — estilização
- **JavaScript (ES6)** — lógica e manipulação do DOM
- **[Chart.js](https://www.chartjs.org/)** — renderização dos gráficos (via CDN)

---

## ⚠️ Limitações Conhecidas

- O cálculo do **MRUV3** ainda não foi implementado.
- Não há validação dos campos — valores em branco ou inválidos podem gerar resultados incorretos no gráfico.
- O gráfico não é recriado entre cálculos consecutivos; múltiplos cliques em "Enviar" podem sobrepor dados.

---

## 💡 Melhorias Futuras Sugeridas

- Implementar a equação de Torricelli (MRUV3)
- Adicionar validação e mensagens de erro nos campos
- Exibir o resultado numérico calculado junto ao gráfico
- Permitir limpar/resetar o formulário e o gráfico
- Adicionar unidades de medida (m, m/s, m/s²) nos labels
