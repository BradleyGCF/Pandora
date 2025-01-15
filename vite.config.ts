import * as path from "node:path";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig, loadEnv } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

dotenv.config();

export default defineConfig(() => {
  const mode = process.env.NODE_ENV || "development";
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return {
    plugins: [
      react(),
      dts({rollupTypes: true}),
      nodePolyfills({
        exclude: ["fs"],
        globals: {
          Buffer: true,
          global: true,
          process: true,
        },
        protocolImports: true,
      }),
    ],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/modules/library/components/main.ts'),
        name: 'Pandora',
        fileName: 'pandora',
      },
      rollupOptions: {
        external: ["react", "react-dom", "react/jsx-runtime"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDom",
            "react/jsx-runtime": "react/jsx-runtime"
          }
        }
      },
    },
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    server: {
      port: 3000,
      proxy: {
        "/server": {
          target: process.env.VITE_MORALIS_SERVER_URL,
          ws: false,
        },
      },
    },
  };
});
