import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: "/BatFlip-App/", // 👈 must match your repo name
  plugins: [react()],
});
