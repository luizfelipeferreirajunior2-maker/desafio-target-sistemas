# Desafio Técnico - Target Sistemas

Este repositório contém a resolução do desafio técnico proposto pela Target Sistemas para a vaga de Desenvolvedor de Sistemas Jr.

O desafio é composto por três exercícios envolvendo lógica de programação, manipulação de dados em JSON, controle de estoque e cálculo de juros.

## Tecnologias utilizadas

- JavaScript
- Node.js
- JSON
- Git
- GitHub

Não foram utilizadas bibliotecas externas.

---

## Estrutura do projeto

```text
desafio-target-sistemas/
│
├── exercicio-1/
│   ├── index.js
│   └── vendas.json
│
├── exercicio-2/
│   ├── index.js
│   └── estoque.json
│
├── exercicio-3/
│   └── index.js
│
└── README.md
```

---

## Exercício 1 - Cálculo de Comissões

O primeiro exercício realiza a leitura dos registros de vendas presentes em um arquivo JSON e calcula o valor total da comissão de cada vendedor.

### Regras de comissão

- Vendas abaixo de R$ 100,00 não geram comissão.
- Vendas entre R$ 100,00 e R$ 499,99 geram 1% de comissão.
- Vendas a partir de R$ 500,00 geram 5% de comissão.

O programa percorre todas as vendas, calcula a comissão correspondente a cada uma e acumula os valores de acordo com o vendedor responsável.

### Como executar

Entre na pasta do exercício:

```bash
cd exercicio-1
```

Execute:

```bash
node index.js
```

### Exemplo de resultado

```text
Comissão por vendedor:
João Silva: R$ 495.68
Maria Souza: R$ 465.95
Carlos Oliveira: R$ 379.37
Ana Lima: R$ 404.98
```

---

## Exercício 2 - Movimentação de Estoque

O segundo exercício implementa uma função para realizar movimentações de entrada e saída dos produtos presentes no estoque fornecido.

Cada movimentação possui:

- Identificador único;
- Descrição da movimentação;
- Produto movimentado;
- Tipo da movimentação;
- Quantidade movimentada;
- Quantidade final disponível em estoque.

### Validações implementadas

O programa verifica:

- Se o produto informado existe;
- Se a quantidade informada é maior que zero;
- Se o tipo da movimentação é válido;
- Se existe estoque suficiente para realizar uma saída.

Não é permitido retirar uma quantidade superior à disponível no estoque.

Para identificação das movimentações foi utilizado `Date.now()`, gerando um identificador baseado no momento em que a operação é realizada.

### Como executar

Entre na pasta:

```bash
cd exercicio-2
```

Execute:

```bash
node index.js
```

### Exemplo de resultado

Considerando uma saída de 20 unidades da Caneta Azul:

```text
Movimentação realizada com sucesso
ID: 1791220266504
Descrição: Saída de mercadoria para venda
Produto: Caneta Azul
Estoque final: 130
```

---

## Exercício 3 - Cálculo de Juros

O terceiro exercício recebe:

- Um valor;
- Uma data de vencimento.

A partir dessas informações, o programa calcula a quantidade de dias em atraso até a data atual e aplica uma taxa de 2,5% ao dia.

Caso a data de vencimento ainda não tenha ocorrido, nenhum juros é aplicado.

### Regra utilizada

O cálculo foi realizado utilizando juros simples por dia de atraso:

```text
juros = valor × 2,5% × dias de atraso
```

O valor final é calculado da seguinte forma:

```text
valor final = valor original + juros
```

Como o enunciado informa apenas a aplicação de 2,5% ao dia e não especifica juros compostos, foi adotado o cálculo simples sobre o valor original.

### Como executar

Entre na pasta:

```bash
cd exercicio-3
```

Execute:

```bash
node index.js
```

### Exemplo

Considerando:

```text
Valor: R$ 1.000,00
Vencimento: 01/10/2026
Data atual: 05/10/2026
```

Resultado:

```text
Valor original: R$ 1000.00
Dias em atraso: 4
Juros: R$ 100.00
Valor final: R$ 1100.00
```

---

## Como executar o projeto

### Pré-requisitos

É necessário possuir o Node.js instalado na máquina.

Para verificar:

```bash
node --version
```

Após clonar o repositório:

```bash
git clone https://github.com/luizfelipeferreirajunior2-maker/desafio-target-sistemas.git
```

Entre na pasta:

```bash
cd desafio-target-sistemas
```

Cada exercício pode ser executado individualmente utilizando o Node.js.

Exemplo:

```bash
cd exercicio-1
node index.js
```

---

## Considerações

As soluções foram desenvolvidas buscando manter o código simples, legível e organizado.

Além da resolução das regras propostas no desafio, foram adicionadas validações para evitar operações inválidas e tratar situações como produto inexistente, estoque insuficiente, quantidade inválida e contas ainda não vencidas.

O objetivo foi aplicar conceitos de lógica de programação e JavaScript de forma clara e de fácil manutenção.

---

## Autor

**Luiz Felipe Ferreira**  
Estudante de Engenharia de Software.

GitHub: [luizfelipeferreirajunior2-maker](https://github.com/luizfelipeferreirajunior2-maker)
