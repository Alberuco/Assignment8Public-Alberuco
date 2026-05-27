import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// new defineConfig that connects with YELP API
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        '/api/yelp': {
          target: 'https://api.yelp.com/v3',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/yelp/, ''),
          headers: {
            Authorization: `Bearer ${env.VITE_YELP_KEY}`,
          },
        },

        // fallback proxy
        '/api': {
          target: 'http://localhost:3000',
        },
      },
    },
  };
});
