

import { useState } from 'react';
import { FormularioEndereco } from './components/FormularioEndereco';
import { ListaEnderecos } from './components/ListaEnderecos';
import { Endereco } from './types/Endereco';
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

 
    alert('✅ Endereço cadastrado com sucesso!');
  };

 
  const excluirEndereco = (id: string) => {
    setEnderecos(enderecos.filter((endereco) => endereco.id !== id));
    alert('🗑️ Endereço excluído com sucesso!');
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📍 Sistema de Gerenciamento de Endereços</h1>
        <p>Cadastre e gerencie seus endereços de forma simples e rápida</p>
      </header>

      <main className="app-main">
        <FormularioEndereco onAdicionar={adicionarEndereco} />
        <ListaEnderecos enderecos={enderecos} onExcluir={excluirEndereco} />
      </main>

      <footer className="app-footer">
        <p>Desenvolvido por Nicoly R. Sousa | 2025</p>
      </footer>
    </div>
  );
}

export default App;