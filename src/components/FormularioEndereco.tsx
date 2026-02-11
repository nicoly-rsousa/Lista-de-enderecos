import { useState, FormEvent } from 'react';
import type { Endereco } from '../types/Endereco';

interface FormularioEnderecoProps {
  onAdicionar: (endereco: Omit<Endereco, 'id'>) => void;
}

export function FormularioEndereco({ onAdicionar }: FormularioEnderecoProps) {
  
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const formatarCep = (valor: string) => {
    const apenasNumeros = valor.replace(/\D/g, '');
    if (apenasNumeros.length <= 5) {
      return apenasNumeros;
    }
    return apenasNumeros.slice(0, 5) + '-' + apenasNumeros.slice(5, 8);
  };

  const validarFormulario = (): boolean => {
    if (!cep || !rua || !numero || !bairro || !cidade || !estado) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return false;
    }

    const cepSemHifen = cep.replace('-', '');
    if (cepSemHifen.length !== 8) {
      alert('CEP deve ter 8 dígitos!');
      return false;
    }

    return true;
  };

  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); 

    if (!validarFormulario()) {
      return;
    }

  
    const novoEndereco = {
      cep,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
    };

    onAdicionar(novoEndereco);

    
    limparFormulario();
  };

  
  const limparFormulario = () => {
    setCep('');
    setRua('');
    setNumero('');
    setComplemento('');
    setBairro('');
    setCidade('');
    setEstado('');
  };

  return (
    <div className="formulario-container">
      
      
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cep">CEP *</label>
            <input
              type="text"
              id="cep"
              value={cep}
              onChange={(e) => setCep(formatarCep(e.target.value))}
              placeholder="00000-000"
              maxLength={9}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="numero">Número *</label>
            <input
              type="text"
              id="numero"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              placeholder="123"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="rua">Rua *</label>
          <input
            type="text"
            id="rua"
            value={rua}
            onChange={(e) => setRua(e.target.value)}
            placeholder="Ex: Rua das Flores"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="complemento">Complemento</label>
          <input
            type="text"
            id="complemento"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
            placeholder="Ex: Apto 101, Bloco A"
          />
        </div>

        <div className="form-group">
          <label htmlFor="bairro">Bairro *</label>
          <input
            type="text"
            id="bairro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            placeholder="Ex: Centro"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cidade">Cidade *</label>
            <input
              type="text"
              id="cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              placeholder="Ex: São Paulo"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="estado">Estado *</label>
            <select
              id="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              required
            >
              <option value="">Selecione...</option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit">
            Cadastrar Endereço
          </button>
          <button type="button" onClick={limparFormulario} className="btn-clear">
             Limpar Campos
          </button>
        </div>
      </form>

      <p className="form-info">Campos obrigatórios</p>
    </div>
  );
}