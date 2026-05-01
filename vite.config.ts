import { defineConfig, loadEnv, type Connect } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  if (env.GROK_API_KEY) process.env.GROK_API_KEY = env.GROK_API_KEY;

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "dev-api-chat",
        configureServer(server) {
          const middleware: Connect.NextHandleFunction = async (req, res, next) => {
            if (!req.url?.startsWith("/api/chat")) return next();
            if (req.method !== "POST") {
              res.statusCode = 405;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ error: "Method not allowed" }));
              return;
            }

            try {
              const chunks: Buffer[] = [];
              for await (const chunk of req) chunks.push(chunk as Buffer);
              const raw = Buffer.concat(chunks).toString("utf-8");
              const body = raw ? JSON.parse(raw) : {};

              const { handleChat } = await server.ssrLoadModule(
                "/src/server/chat-handler.ts",
              );
              const result = await handleChat(body);

              res.statusCode = result.status;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify(result.body));
            } catch (err) {
              console.error("[dev /api/chat]", err);
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.end(
                JSON.stringify({
                  error: err instanceof Error ? err.message : "Unknown error",
                }),
              );
            }
          };
          server.middlewares.use(middleware);
        },
      },
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      port: 5173,
    },
  };
});
