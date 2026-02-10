
export interface Endereco {
  id: string;
  cep: string;
  rua: string;
  numero: string;
  complemento?: string; // opcional
  bairro: string;
  cidade: string;
  estado: string;}