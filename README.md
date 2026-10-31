# Portal Anjo-Cura

> Acolhimento psicoterapêutico e equilíbrio holístico sob a luz dos anjos.

Site institucional do Portal Anjo-Cura, publicado no GitHub Pages em
[www.portalanjocura.com.br](https://www.portalanjocura.com.br/).

## Estrutura

| Arquivo | Conteúdo |
| --- | --- |
| `index.html` | Página única: início, Sobre Nós, Atendimentos, Serviços, Mensagem do dia, Como funciona, Dúvidas e contato |
| `styles.css` | Tema celestial (céu, nuvens, luz dourada, céu estrelado) e responsividade |
| `script.js` | Menu mobile, animações de entrada, anjo em 3D, estrelas e “Mensagem de luz do dia” |
| `assets/anjo.jpg` | Imagem principal do anjo (a mesma usada no WhatsApp) |
| `assets/anjo-avatar.jpg` | Recorte redondo usado como avatar/logo |
| `assets/favicon.png`, `assets/icon-192.png`, `assets/apple-touch-icon.png` | Ícones do navegador e do celular |
| `assets/og-image.jpg` | Imagem de pré-visualização ao compartilhar o link (WhatsApp, Facebook etc.) |
| `CNAME` | Domínio personalizado do GitHub Pages |

## Como editar

- **WhatsApp:** todos os botões apontam para `https://wa.me/5549920086541` com uma mensagem pronta (parâmetro `text`). Para trocar o número, substitua `5549920086541` em `index.html`.
- **Mensagens do dia:** a lista de frases fica no array `mensagens` em `script.js`.
- **Cores e fontes:** variáveis no início de `styles.css` (`:root`).

## Publicação

O GitHub Pages publica automaticamente a branch `main` (pasta raiz). Basta enviar as alterações:

```bash
git add .
git commit -m "Atualiza o site"
git push
```
