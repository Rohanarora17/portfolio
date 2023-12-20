/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly PUBLIC_TEMPLATE_ID: string;
    readonly PUBLIC_EMAILJS_PUBLIC_KEY: string;
    readonly PUBLIC_SERVICE_ID: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }