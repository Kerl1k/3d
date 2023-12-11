export interface IFile {
  map(
    arg0: (f: any) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;
  id?: string;
  name: string;
  subdivision: string;
  email: string;
  phone: string;
  file: string;
  status: string;
}
