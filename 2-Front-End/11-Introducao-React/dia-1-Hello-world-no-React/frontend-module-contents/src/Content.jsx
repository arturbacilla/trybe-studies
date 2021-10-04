import { Component } from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render(){
    return (
      <div>
        { conteudos.map((whichContent, index) => <div key={index}> { `O conteúdo é: ${whichContent.conteudo}
        Status: ${whichContent.status}
        Bloco: ${whichContent.bloco}
        `} </div>)}
      </div>    
    )
  }
}

export default Content