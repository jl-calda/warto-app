declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_CONNECTION_STRING: string;
      NODE_END: "production" | "development";
    }
  }
}

export {};
