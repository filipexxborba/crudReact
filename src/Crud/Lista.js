import React from 'react'

const Lista = ({dados, setDados}) => {
    function handleClick(event){
        console.log(event);

    }
    return (
        <>
            {dados.map((atividade) => <li data-index={atividade.index} onClick={handleClick} style={atividade.isFinally === true ? {backgroundColor: 'green'} : {backgroundColor: 'whitesmoke'}} key={atividade.index}>{atividade.text}</li>)}
        </>
    )
}

export default Lista

