import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/geoinfo-lingua-web/", // <-- This must match your repo name
  plugins: [react()],
});
