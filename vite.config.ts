import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { entry: "server" },
    }),
    // Build a long-running Node HTTP server (.output/server/index.mjs) that
    // listens on process.env.PORT. Do not use the cloudflare-module preset here:
    // it emits a Worker bundle that never binds a port on Railway.
    nitro(),
    react(),
    tailwindcss(),
  ],
  nitro: { preset: "node-server" },
  resolve: { tsconfigPaths: true },
});
