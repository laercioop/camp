# Acampamento ASJ

Site do encontro anual da Associação São José (FSSPX).

O site é uma página única, em português. Não usa framework nem etapa de build.
Publicado por GitHub Pages em `acampamento.associacaosaojose.com`.

## Estrutura

- `index.html` — todas as seções do site.
- `assets/css/style.css` — estilos e paleta.
- `assets/js/app.js` — navegação, cronograma, lista de itens e cópia do PIX.
- `assets/img/` — imagens.
- `cronograma.txt`, `informações.txt`, `trabalhos.txt` — textos de origem do conteúdo.

## Seções

O site tem cinco seções. A barra inferior alterna entre elas.

1. **Início** — apresentação, inscrição, endereço, chegada e encerramento.
2. **Cronograma** — atividades de cada dia, de 27/12 a 02/01.
3. **Trabalhos** — as cinco equipes e as tarefas de cada uma.
4. **Mais** — local, itens obrigatórios, vestimenta e contato.
5. **Doar** — chave PIX.

## Como rodar na sua máquina

1. Abra o terminal na pasta do projeto.
2. Execute o comando abaixo.

```bash
python -m http.server 8000 --bind 127.0.0.1
```

3. Abra http://127.0.0.1:8000/ no navegador.

## Como alterar o conteúdo

O cronograma e a lista de itens obrigatórios ficam em `assets/js/app.js`.
Edite as constantes `CRONOGRAMA` e `ITENS` no topo do arquivo.

Os demais textos ficam direto no `index.html`.

## Design

A paleta segue o site da Associação São José: azul `#213C8C`, dourado e fundo creme.
As fontes são Cormorant Garamond (títulos) e Inter (texto).
As barras e os botões usam vidro fosco (*glassmorphism*): fundo translúcido com
`backdrop-filter` e um brilho no topo.

## Pendências

- Incluir o e-mail e o WhatsApp da organização na seção **Mais**.
- Conferir as datas: a imagem do topo indica 2026–2027, e os textos de origem
  indicam 27/12/2025 a 02/01/2026.
