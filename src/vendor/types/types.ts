export interface ICourse {
  bgColor: string;
  id: string;
  image: string;
  name: string;
  tags: string[];
}
export interface IServerResponse {
  data: ICourse[];
}
export interface IServerDataState<> {
  data: ICourse[] | null;
  loading: boolean;
  error: any | null;
}
