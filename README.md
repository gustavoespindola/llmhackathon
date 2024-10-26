# Crea una app con la API de Mistral y Code GPT

### Este proyecto implementa una aplicación de chat utilizando la API de Mistral y CodeGPT, desarrollada con Svelte.
Desarrollado por [@GustavoEspindola – CodeGPT](https://www.linkedin.com/in/gustavoespindola/)

<!-- add an image -->
<img src="https://raw.githubusercontent.com/gustavoespindola/llmhackathon/refs/heads/master/static/hackathon.gif" alt="llmhackathon" width="100%">

## Requisitos Previos

Para utilizar esta aplicación necesitarás:

### Intro al proyecto
- Solicitar el [Mistral API KEY](https://console.mistral.ai/api-keys/)
- Prueba: Solicitar los modelos con una llamada a la API usando archivo .http en [Mistral Endpoints](https://docs.mistral.ai/api/#tag/models)
- Crea una interacción con el modelo usando la aplicación de chat en Svelte
### Agentes avanzados
- Crear un Agente AI con CodeGPT
- Carga la informacion al agente
- Obten el id del agente
- Obten la apikey CodeGPT
- Crear una interacción con el agente usando la aplicación de chat en Svelte

### Enlaces de Interés

- [🎯 LLMHackathon](https://llmhackathon.dev/)
- [🔑 Documentación API Mistral](https://console.mistral.ai/api-keys/)
- [🎯 Mistral Endpoints](https://docs.mistral.ai/api/#tag/models)
- [📚 SDK de Vercel AI](https://sdk.vercel.ai/)
- [🚀 Registro en CodeGPT](app.codegpt.co/r/gustavo)
- [📖 Documentación CodeGPT](https://app.codegpt.co/en/apikeys)
- [📖 CodeGPT Documentation](https://developers.codegpt.co/reference/completion-beta)
- [🌐 Plataforma Vercel](https://vercel.com/)
- [🔐 API OpenAI](https://platform.openai.com/api-keys)

---

## Instalación y Configuración

**Clonar el repositorio**

`git clone https://github.com/gustavoespindola/llmhackathon`

**Ingresar a la carpeta del proyecto**

`cd llmhackathon`


**Instalar dependencias**
Todo lo que necesitas para crear un proyecto Svelte, con la tecnología de [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).
Una vez que hayas creado un proyecto e instalado dependencias con `npm install` (or `pnpm install` or `yarn`)

`npm install`


**Iniciar el servidor de desarrollo**

```bash
npm run dev

# o para abrir automáticamente en el navegador:
npm run dev -- --open
```

``` bash
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

La aplicación estará disponible en http://localhost:5173/

---

## Despliegue en Producción

Preparación del Build

**Crear versión de producción**

```bash
npm run build
```

**Previsualizar el build**
``` bash
  npm run preview
```

> Para el despliegue, es posible que necesites instalar un [adapter](https://svelte.dev/docs/kit/adapters) para el entorno específico.


**Despliegue en Vercel**

1. Crear cuenta en Vercel
2. Crear nuevo proyecto
3. Vincular con el repositorio
4. Configurar variables de entorno
5. Ejecutar el despliegue

---
**Mas información sobre Vercel**

[Deploy Tutorial](https://vercel.com/docs/deployments/overview)
