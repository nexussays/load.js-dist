export = load;

declare function load(file: string): load.Promise;
declare function load(fileWithLabel: any): load.Promise;
declare function load(...files: any[]): load.Promise;

declare module load
{
   interface Promise
   {
      then(callback: () => void): Promise;
      then(file: string): Promise;
      then(fileWithLabel: any): Promise;
      then(...files: any[]): Promise;
   }

   function setBaseUrl(path: string): void;

   function getBaseUrl(): string;

   function setQuerystring(args: string): void;

   function when(dependency: string, callback: () => void, waiting?: (missing: string[]) => void): void;
   function when(dependencies: string[], callback: () => void, waiting?: (missing: string[]) => void): void;
   function when(dependency: string, file: string, waiting?: (missing: string[]) => void): void;
   function when(dependencies: string[], file: string, waiting?: (missing: string[]) => void): void;
   function when(dependency: string, files: string[], waiting?: (missing: string[]) => void): void;
   function when(dependencies: string[], files: string[], waiting?: (missing: string[]) => void): void;
   function when(dependency: string, fileWithLabel: any, waiting?: (missing: string[]) => void): void;
   function when(dependencies: string[], fileWithLabel: any, waiting?: (missing: string[]) => void): void;
}