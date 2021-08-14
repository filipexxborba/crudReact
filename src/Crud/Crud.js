import React from 'react'
import Lista from './Lista'

const Crud = () => {
    const inputElement = React.useRef();
    const [dados, setDados] = React.useState(null);

    // Verifica o se já existe o INDEX no localStorage, caso não exista é criado.
    const currentIndexLista = localStorage.getItem('currentIndexLista');
    if(!currentIndexLista){localStorage.setItem('currentIndexLista', 0)}
  
    // Verifica se existe dados no localStorage
    React.useEffect(() => {
      const dados = JSON.parse(localStorage.getItem('dados'));
      if(dados){setDados(dados)}
    }, [])

    // Insere o valor do inputElement no localStorage e faz a nova renderização
    function handleClick(){
      if(JSON.parse(localStorage.getItem('dados')) !== null){
        const dados = JSON.parse(localStorage.getItem('dados'));
        let data = {'text': inputElement.current.value, 'isFinally': false, index: Number(currentIndexLista)}
        dados.push(data)
        localStorage.setItem('dados', JSON.stringify(dados));
        localStorage.setItem('currentIndexLista', Number(currentIndexLista + 1));
        setDados(dados);
        inputElement.current.value = '';
        inputElement.current.focus();
        

      }else{
        const dados = []
        let data = {'text': inputElement.current.value, 'isFinally': false, index: Number(currentIndexLista)}
        dados.push(data);
        localStorage.setItem('dados', JSON.stringify(dados));
        localStorage.setItem('currentIndexLista', Number(currentIndexLista + 1));
        setDados(dados);
        inputElement.current.value = '';
        inputElement.current.focus();
      }
    }

    // Render da aplicação
    return (
      <>
      <h1>Crud</h1>
      {dados !== null ? <Lista dados={dados} setDados={setDados}/> : null}
      <input  style={{marginTop: '24px'}} placeholder='Digite aqui a tarefa!' ref={inputElement}></input>
      <button onClick={handleClick}>Salvar</button>
      </>
    );
}

export default Crud
