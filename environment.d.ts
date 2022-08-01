declare global {
    namespace NodeJS {
      interface ProcessEnv {
        IMGUR_API_TOKEN: "134d859012dc89de8c593af057eaff2bbd567488";
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}