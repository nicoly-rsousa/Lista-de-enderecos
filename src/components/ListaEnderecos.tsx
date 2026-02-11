import type { Endereco } from '../types/Endereco';

interface ListaEnderecosProps {
  enderecos: Endereco[];
  onExcluir: (id: string) => void;
}

export function ListaEnderecos({ enderecos, onExcluir }: ListaEnderecosProps) {

  const confirmarExclusao = (id: string, rua: string) => {
    const confirmacao = window.confirm(
      `Tem certeza que deseja excluir o endereço:\n${rua}?`
    );

    if (confirmacao) {
      onExcluir(id);
    }
  };


  if (enderecos.length === 0) {
    return (
      <div className="lista-vazia">
        <h2> Endereços Cadastrados</h2>
        <p>Nenhum endereço cadastrado ainda.</p>
        <p>Use o formulário acima para adicionar seu primeiro endereço!</p>
      </div>
    );
  }

  return (
    <div className="lista-container">
      <h2>Endereços Cadastrados ({enderecos.length})</h2>

      <div className="enderecos-grid">
        {enderecos.map((endereco) => (
          <div key={endereco.id} className="endereco-card">
            <div className="endereco-header">
              <h3> {endereco.rua}, {endereco.numero}</h3>
            </div>

            <div className="endereco-info">
              <p>
                <strong>CEP:</strong> {endereco.cep}
              </p>

              {endereco.complemento && (
                <p>
                  <strong>Complemento:</strong> {endereco.complemento}
                </p>
              )}

              <p>
                <strong>Bairro:</strong> {endereco.bairro}
              </p>

              <p>
                <strong>Cidade:</strong> {endereco.cidade} - {endereco.estado}
              </p>
            </div>

            <div className="endereco-actions">
              <button
                onClick={() => confirmarExclusao(endereco.id, endereco.rua)}
                className="btn-excluir"
                title="Excluir endereço"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}