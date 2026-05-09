# Travessia Ambiental

Projeto front-end desenvolvido com **HTML, CSS e JavaScript puro**, com o objetivo de conscientizar sobre a importância das **passagens de fauna** na preservação da biodiversidade e na redução de atropelamentos de animais silvestres em rodovias.

A página apresenta conteúdo educativo, cards informativos, galeria modal com alerta de imagens sensíveis e animações visuais representando diferentes tipos de estruturas de travessia para animais.

---

## Sobre o projeto

A **Travessia Ambiental** é uma página informativa voltada à educação ambiental. O projeto explica o que são passagens de fauna, por que elas são importantes e como diferentes estruturas podem auxiliar no deslocamento seguro de animais silvestres.

Entre os tipos apresentados estão:

- **Passagens superiores**, como ecodutos, pontes verdes e viadutos de fauna;
- **Passagens suspensas**, indicadas para animais arborícolas;
- **Passagens subterrâneas**, utilizadas por animais que se deslocam próximos ao solo.

O projeto utiliza uma abordagem visual e interativa para facilitar o entendimento do tema, com cenários ilustrados em CSS e animações controladas por JavaScript.

---

## Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript puro**
- Vídeo em background
- Animações com CSS e Web Animations API
- Layout responsivo com media queries

---

## Principais seções da página

### 1. Cabeçalho e navegação

A página possui uma barra de navegação com links para:

- Início;
- Contato;
- Sobre Nós.

O menu utiliza uma identidade visual verde, remetendo à temática ambiental.

---

### 2. Hero com vídeo de fundo

A primeira seção utiliza um vídeo em tela cheia como plano de fundo, com título e texto introdutório sobre passagens de fauna.

Essa área apresenta o propósito do projeto e contextualiza o visitante sobre a importância da conectividade entre habitats naturais.

---

### 3. Contexto sobre a fauna

A seção de contexto apresenta dados de impacto ambiental relacionados a atropelamentos de animais em rodovias brasileiras.

Ela utiliza cards informativos para destacar números importantes, como:

- Estimativa anual de animais mortos;
- Média de mortes por segundo;
- Percentual de pequenos vertebrados entre as vítimas.

---

### 4. Galeria com alerta de imagens sensíveis

A página possui um botão para abrir uma galeria modal com imagens relacionadas ao impacto das rodovias na fauna.

O modal inclui:

- Aviso de conteúdo sensível;
- Imagem principal;
- Botão de fechar;
- Navegação entre imagens;
- Legenda indicando a posição da imagem.

---

### 5. Tipos de passagens de fauna

A seção principal do conteúdo apresenta cards explicativos sobre os tipos de estruturas utilizadas para travessia segura de animais.

Cada card possui:

- Número identificador;
- Categoria;
- Título;
- Texto explicativo;
- Lista de características ou indicações;
- Cenário visual ilustrativo.

---

### 6. Cenários animados

O projeto possui cenários visuais desenvolvidos com HTML e CSS, representando:

- Uma ponte verde sobre a rodovia;
- Uma passagem suspensa entre árvores;
- Um túnel subterrâneo abaixo da estrada.

Os carros são animados com JavaScript para simular movimento e tornar a experiência mais dinâmica.


## Como executar o projeto

Como o projeto utiliza apenas HTML, CSS e JavaScript puro, não é necessário instalar dependências.

### Opção 1: abrir diretamente no navegador

1. Baixe ou clone o projeto;
2. Abra o arquivo `index.html` no navegador.

### Opção 2: usar uma extensão de servidor local

Caso utilize o VS Code, é recomendado abrir o projeto com a extensão **Live Server**.

1. Abra a pasta do projeto no VS Code;
2. Clique com o botão direito no `index.html`;
3. Selecione **Open with Live Server**.

Essa opção é mais indicada para evitar problemas de carregamento de arquivos locais, principalmente vídeos, imagens e scripts.

---

## Funcionalidades atuais

- Página inicial com vídeo em background;
- Menu de navegação;
- Conteúdo educativo sobre passagens de fauna;
- Cards com dados de impacto ambiental;
- Galeria modal com alerta de imagens sensíveis;
- Seção com tipos de passagens de fauna;
- Cenários ilustrados com CSS;
- Animação de carros com JavaScript;
- Layout adaptado para dispositivos menores.

---

## Boas práticas aplicadas

- Separação dos estilos em arquivos por responsabilidade;
- Uso de tags semânticas como `header`, `nav`, `main`, `section`, `article` e `aside`;
- Uso de atributos `aria-label` em áreas interativas e visuais;
- Layout responsivo com media queries;
- Organização visual baseada em cards e seções bem definidas;
- JavaScript separado do HTML;
- Animações criadas sem dependência de bibliotecas externas.

---

## Observações importantes

Alguns arquivos referenciados no `index.html` precisam existir na estrutura do projeto para que a página funcione corretamente:

- `assets/css/suspenso-cenario.css`
- `assets/css/subterraneo-cenario.css`
- `assets/js/galeria.js`
- `assets/videos/TravessiaAmbiental.mp4`
- Imagens da galeria dentro da pasta `img/`

Caso algum desses arquivos esteja ausente, partes visuais ou interativas da página podem não funcionar corretamente.

---

## Autor

Projeto desenvolvido para fins educacionais, com foco em conscientização ambiental e prática de desenvolvimento front-end com HTML, CSS e JavaScript.
