import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'

const App = () => {
    const obterTextoDoBotao = () => "Enviar";
    const textoDoRotulo = "Nome: ";
    const estilosBotao = {
        marginTop: 12, padding: '8px 0 8px 0', backgroundColor: 'blueviolet', color: 'white', 
        border: 'none', borderRadius: 8, width: '100%'
    };
    
    return (
        <div style={{margin: "auto", width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
            <label className="rotulo" htmlFor= "nome" style={{display: 'block', marginBottom: 4}}>{textoDoRotulo}</label>
            <input id='nome' type='text' style={{padding: '8px 0 8px 0', borderStyle: 'hidden', outline: 'none', width: '100%', borderRadius: 8, boxSizing: "border-box"}}></input>
            <button type='submit' style={estilosBotao}>{obterTextoDoBotao()}</button>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector("#root"))

/* {<html>
    <head>

    </head>
    <body>
        <div id="root">

        </div>
    </body>
</html>

function App (){
    return <div>Oi</div>
}} */