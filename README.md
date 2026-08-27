# Bolão 26/27 — PWA

Protótipo/base do app, pronto para instalar via navegador ("Adicionar à Tela de Início"),
sem loja, sem Apple Developer.

## Estrutura

- `index.html` — o app inteiro (telas, estilo, lógica de UI)
- `manifest.json` — nome, ícone e comportamento de instalação
- `service-worker.js` — cache do app shell para abrir offline
- `icons/` — ícone da taça em 192px, 512px e versão maskable

## Publicar no GitHub Pages

1. Crie um repositório novo no GitHub (pode ser privado, dá para publicar Pages mesmo assim
   se a organização tiver GitHub Pro/Team; se for conta free, precisa ser público).
2. Suba estes arquivos para a raiz do repositório (ou para uma pasta `docs/`, se preferir):
   ```bash
   git init
   git add .
   git commit -m "Bolao 26/27 - PWA inicial"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   git push -u origin main
   ```
3. No GitHub: **Settings → Pages** → Source: `Deploy from a branch` → Branch: `main` (pasta
   `/root` ou `/docs`, dependendo de onde você colocou os arquivos) → Save.
4. Em alguns minutos o link fica ativo em `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`.

## Instalar no celular

- **Android (Chrome)**: abrir o link → menu (⋮) → "Adicionar à tela inicial".
- **iPhone (Safari)**: abrir o link → ícone de compartilhar → "Adicionar à Tela de Início".

## Pendências antes de virar o app "de verdade"

- Ligar a leitura/gravação nos arquivos do OneDrive via Microsoft Graph API (App Registration
  no Entra ID, tipo **SPA**, não "Mobile and desktop applications").
- Trilha de áudio da tela de login: o gancho já está no código (`tocarTrilha()` em
  `index.html`), só falta o arquivo `.mp3` licenciado.
- Preencher `Jornada` / `Data_Hora_Jogo` / `Prazo_Palpite` na aba `Jogos` assim que o
  calendário oficial da Champions sair (esperado até sábado, 29/08/2026).
