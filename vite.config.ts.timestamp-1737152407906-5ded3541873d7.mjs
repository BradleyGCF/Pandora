// vite.config.ts
import * as path from "node:path";
import react from "file:///C:/Users/VALENTINA/Desktop/Pandora1/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dotenv from "file:///C:/Users/VALENTINA/Desktop/Pandora1/node_modules/dotenv/lib/main.js";
import { defineConfig, loadEnv } from "file:///C:/Users/VALENTINA/Desktop/Pandora1/node_modules/vite/dist/node/index.js";
import { nodePolyfills } from "file:///C:/Users/VALENTINA/Desktop/Pandora1/node_modules/vite-plugin-node-polyfills/dist/index.js";
import { resolve as resolve2 } from "path";
import dts from "file:///C:/Users/VALENTINA/Desktop/Pandora1/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\VALENTINA\\Desktop\\Pandora1";
dotenv.config();
var vite_config_default = defineConfig(() => {
  const mode = process.env.NODE_ENV || "development";
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return {
    plugins: [
      react(),
      dts({ rollupTypes: true }),
      nodePolyfills({
        exclude: ["fs"],
        globals: {
          Buffer: true,
          global: true,
          process: true
        },
        protocolImports: true
      })
    ],
    build: {
      lib: {
        entry: resolve2(__vite_injected_original_dirname, "src/modules/library/components/main.ts"),
        name: "pandora_components",
        fileName: "pandora_components"
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
      }
    },
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }]
    },
    server: {
      port: 3e3,
      proxy: {
        "/server": {
          target: process.env.VITE_MORALIS_SERVER_URL,
          ws: false
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxWQUxFTlRJTkFcXFxcRGVza3RvcFxcXFxQYW5kb3JhMVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcVkFMRU5USU5BXFxcXERlc2t0b3BcXFxcUGFuZG9yYTFcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1ZBTEVOVElOQS9EZXNrdG9wL1BhbmRvcmExL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0ICogYXMgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgeyBub2RlUG9seWZpbGxzIH0gZnJvbSBcInZpdGUtcGx1Z2luLW5vZGUtcG9seWZpbGxzXCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG5kb3RlbnYuY29uZmlnKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoKSA9PiB7XG4gIGNvbnN0IG1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBcImRldmVsb3BtZW50XCI7XG4gIHByb2Nlc3MuZW52ID0geyAuLi5wcm9jZXNzLmVudiwgLi4ubG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKSB9O1xuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFtcbiAgICAgIHJlYWN0KCksXG4gICAgICBkdHMoe3JvbGx1cFR5cGVzOiB0cnVlfSksXG4gICAgICBub2RlUG9seWZpbGxzKHtcbiAgICAgICAgZXhjbHVkZTogW1wiZnNcIl0sXG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICBCdWZmZXI6IHRydWUsXG4gICAgICAgICAgZ2xvYmFsOiB0cnVlLFxuICAgICAgICAgIHByb2Nlc3M6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHByb3RvY29sSW1wb3J0czogdHJ1ZSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIGxpYjoge1xuICAgICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvbW9kdWxlcy9saWJyYXJ5L2NvbXBvbmVudHMvbWFpbi50cycpLFxuICAgICAgICBuYW1lOiAncGFuZG9yYV9jb21wb25lbnRzJyxcbiAgICAgICAgZmlsZU5hbWU6ICdwYW5kb3JhX2NvbXBvbmVudHMnLFxuICAgICAgfSxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgZXh0ZXJuYWw6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCIsIFwicmVhY3QvanN4LXJ1bnRpbWVcIl0sXG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICAgIHJlYWN0OiBcIlJlYWN0XCIsXG4gICAgICAgICAgICBcInJlYWN0LWRvbVwiOiBcIlJlYWN0RG9tXCIsXG4gICAgICAgICAgICBcInJlYWN0L2pzeC1ydW50aW1lXCI6IFwicmVhY3QvanN4LXJ1bnRpbWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiBbeyBmaW5kOiBcIkBcIiwgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpIH1dLFxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICBwb3J0OiAzMDAwLFxuICAgICAgcHJveHk6IHtcbiAgICAgICAgXCIvc2VydmVyXCI6IHtcbiAgICAgICAgICB0YXJnZXQ6IHByb2Nlc3MuZW52LlZJVEVfTU9SQUxJU19TRVJWRVJfVVJMLFxuICAgICAgICAgIHdzOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxUyxZQUFZLFVBQVU7QUFDM1QsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sWUFBWTtBQUNuQixTQUFTLGNBQWMsZUFBZTtBQUN0QyxTQUFTLHFCQUFxQjtBQUM5QixTQUFTLFdBQUFBLGdCQUFlO0FBQ3hCLE9BQU8sU0FBUztBQU5oQixJQUFNLG1DQUFtQztBQVF6QyxPQUFPLE9BQU87QUFFZCxJQUFPLHNCQUFRLGFBQWEsTUFBTTtBQUNoQyxRQUFNLE9BQU8sUUFBUSxJQUFJLFlBQVk7QUFDckMsVUFBUSxNQUFNLEVBQUUsR0FBRyxRQUFRLEtBQUssR0FBRyxRQUFRLE1BQU0sUUFBUSxJQUFJLENBQUMsRUFBRTtBQUNoRSxTQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixJQUFJLEVBQUMsYUFBYSxLQUFJLENBQUM7QUFBQSxNQUN2QixjQUFjO0FBQUEsUUFDWixTQUFTLENBQUMsSUFBSTtBQUFBLFFBQ2QsU0FBUztBQUFBLFVBQ1AsUUFBUTtBQUFBLFVBQ1IsUUFBUTtBQUFBLFVBQ1IsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBLGlCQUFpQjtBQUFBLE1BQ25CLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsUUFDSCxPQUFPQyxTQUFRLGtDQUFXLHdDQUF3QztBQUFBLFFBQ2xFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxNQUNaO0FBQUEsTUFDQSxlQUFlO0FBQUEsUUFDYixVQUFVLENBQUMsU0FBUyxhQUFhLG1CQUFtQjtBQUFBLFFBQ3BELFFBQVE7QUFBQSxVQUNOLFNBQVM7QUFBQSxZQUNQLE9BQU87QUFBQSxZQUNQLGFBQWE7QUFBQSxZQUNiLHFCQUFxQjtBQUFBLFVBQ3ZCO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPLENBQUMsRUFBRSxNQUFNLEtBQUssYUFBa0IsYUFBUSxrQ0FBVyxLQUFLLEVBQUUsQ0FBQztBQUFBLElBQ3BFO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxXQUFXO0FBQUEsVUFDVCxRQUFRLFFBQVEsSUFBSTtBQUFBLFVBQ3BCLElBQUk7QUFBQSxRQUNOO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsicmVzb2x2ZSIsICJyZXNvbHZlIl0KfQo=
