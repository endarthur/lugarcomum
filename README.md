# Lugar Comum

**O jogo de ser óbvio.** Um party game offline inspirado em *Herd Mentality* e *Segue o Fluxo* — o objetivo é dar a resposta mais previsível possível.

Todos jogam no próprio celular, sem servidor. Uma semente compartilhada garante que todos recebam as mesmas perguntas na mesma ordem.

4–8 jogadores · ~15 min · a partir de 10 anos

## Como jogar

1. Todos abrem o jogo e digitam a **mesma semente** (ou compartilham o link).
2. Uma pergunta aparece — escreva a resposta que **a maioria** vai dar, não a sua opinião pessoal.
3. Trave sua resposta e mostre o cadeado para a mesa.
4. Na contagem de três, todos apertam **revelar** e mostram a tela.
5. O grupo decide a maioria. Quem ficou fora marca **Fora** e ganha uma penalidade.
6. **Menos penalidades ganha.** Ser original aqui é perder.

## Jogar

Acesse direto pelo GitHub Pages ou abra `index.html` em qualquer navegador — não precisa de internet depois de carregar.

## Estrutura do projeto

```
src/
  template.html    ← HTML do jogo com placeholder para as perguntas
  questions.json   ← banco de perguntas (204 atualmente)
build.js           ← injeta as perguntas no template e gera index.html
index.html         ← arquivo final servido pelo GitHub Pages
```

## Build

```bash
npm run build
```

Só precisa de Node.js — sem dependências.

## Adicionando perguntas

Edite `src/questions.json`. Cada pergunta é um objeto com categoria e texto:

```json
{"c": "comida", "q": "Melhor sabor de pizza"}
```

Categorias disponíveis: `comida`, `cotidiano`, `cultura`, `hipotetico`, `opiniao`, `social`, `associacao`.

Depois rode `npm run build` para gerar o novo `index.html`.

## GitHub Pages

O jogo é servido direto da branch `main` como `index.html`. Para configurar:

1. Vá em **Settings → Pages**
2. Em **Source**, selecione **Deploy from a branch**
3. Escolha **main** / **/ (root)**

## Licença

[GNU GPL v3](LICENSE)
