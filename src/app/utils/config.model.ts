
export interface IConfig {
   isServed: boolean;
   withErrors?: boolean;
   API: {
      apiRoot: string;
   };

   Storage: {
      Timeout: number;
      Key: string;
      ResetKey: string;
   };

}
