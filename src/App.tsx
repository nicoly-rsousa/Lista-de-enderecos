import { useState } from 'react';
import { FormularioEndereco } from './components/FormularioEndereco';
import { ListaEnderecos } from './components/ListaEnderecos';
import type { Endereco } from './types/Endereco';
import './App.css';

function App() {

  const [enderecos, setEnderecos] = useState<Endereco[]>([]);


  const adicionarEndereco = (novoEndereco: Omit<Endereco, 'id'>) => {

    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);

    const enderecoCompleto: Endereco = {
      id,
      ...novoEndereco,
    };


    setEnderecos([...enderecos, enderecoCompleto]);

 
    alert(' Endereço cadastrado com sucesso!');
  };

  const excluirEndereco = (id: string) => {
    setEnderecos(enderecos.filter((endereco) => endereco.id !== id));
    alert(' Endereço excluído com sucesso!');
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Cadastro de Endereços</h1>
       
      </header>

      <main className="app-main">
        <FormularioEndereco onAdicionar={adicionarEndereco} />
        <ListaEnderecos enderecos={enderecos} onExcluir={excluirEndereco} />
      </main>

      
    </div>
  );
}

export default App;