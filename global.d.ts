declare global {
    namespace NodeJS {
      interface ProcessEnv {
        SITE_TITLE: string;
        SITE_DESCRIPTION: string;
        POST_INDEX_URL: string;
      }
    }
}

export {  }