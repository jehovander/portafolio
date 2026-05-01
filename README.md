# Portafolio · Jehovander Delgado

AI Developer & Full Stack Developer. Portafolio personal con asistente IA integrado.

## Stack

- **Vite + React 18 + TypeScript**
- **Tailwind CSS v4** + Framer Motion + lucide-react
- **Vercel Serverless Functions** para el chatbot
- **Grok (xAI)** vía SDK de OpenAI apuntando a `https://api.x.ai/v1`

## Desarrollo local

```bash
npm install
npm run dev
```

El frontend corre en `http://localhost:5173`. **El chatbot solo funciona desplegado en Vercel** (o usando `vercel dev`) porque depende de la Serverless Function en `api/chat.ts`.

Para probar el chat localmente:

```bash
npm i -g vercel
vercel dev
```

## Variable de entorno requerida

```
GROK_API_KEY=xai-tu-api-key-aqui
```

⚠️ **No uses el prefijo `VITE_`**. La key vive solo en el backend (Serverless Function) — nunca llega al cliente.

### En local
Copia `.env.example` a `.env` y rellena el valor:
```bash
cp .env.example .env
```

### En Vercel
Project Settings → Environment Variables → añade `GROK_API_KEY`.

## Despliegue

```bash
git add .
git commit -m "deploy"
git push
```

Vercel lo despliega automáticamente.

## Estructura

```
.
├── api/
│   └── chat.ts                  # Serverless Function (Grok)
├── public/
│   └── jeho3.png
├── src/
│   ├── components/
│   │   ├── sections/            # Hero, About, Skills, Projects, Experience, Chatbot, Contact
│   │   ├── ui/                  # Button, Section
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── content.ts           # Copy bilingüe + datos
│   │   └── system-prompt.ts     # Prompt del bot
│   ├── i18n/                    # Toggle ES/EN
│   ├── lib/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── vite.config.ts
├── vercel.json
└── package.json
```
