import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {addFaq, removeFaq, removeAll, updateFaq} from './actions/faq'

function FAQS() {

    const question = useSelector((state)=>{
        return state.faq.question;
    });
    const dispatcher = useDispatch();

    const [valor, setValor] = useState('');
    function cambiaValor (e){
        setValor (e.target.value)
    }


    const agregaPregunta =() =>{
        dispatcher(addFaq(valor))        
    }

    const borraTodo = () =>{
        dispatcher(removeAll())
    }

    const editaPregunta = () =>{
        dispatcher(updateFaq('preg', 'Holaaa'))
    }


    return (
    <div className="App">

        <input value = {valor} onChange={cambiaValor} />
        
        <button onClick={agregaPregunta}>Add question</button>
        
        <p>Tus preguntas:</p>


        {
            question && question.map ((preg, index) => (
                <div>
                    <input placeholder={preg} /> 
                    <button onClcik={() => editaPregunta('preg', 'Hola')}>Edit question</button>
                    <button onClcik={() => {dispatcher(removeFaq(index))}}>Remove question</button>
                </div>
            ))
        }

        <button onClick={borraTodo}>REMOVE ALL</button>
    </div>
    )
}

export default FAQS;
