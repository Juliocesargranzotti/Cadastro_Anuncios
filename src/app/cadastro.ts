export interface Cadastro{
  delete(client: Cadastro): unknown;
  id : number;
  titulo : string;
  descricao : string;
  preco : number ;
  date : number;
  img : string;
  status: string;


}


