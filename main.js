const NomeContext = React.createContext('nome')

    function MeuComponente1(props){
      const myName = 'Alvaro Guedes'
      return (
          <div className="componente-1">
            <MeuComponente2>
              <MeuComponente4 nome={myName} onClickIncrementar={props.onClickIncrementar}/>
            </MeuComponente2>
          </div>
      )
    }

    function MeuComponente2(props){
      return (
        <div className="componente-2">
          <div>
            <header>{props.children}</header>
          </div>
        </div>
      )
    }

    function MeuComponente3(){
      return (
        <div  className="componente-3">
          <MeuComponente4/>
        </div>
      )
    }

    function MeuComponente4(props){
      const [idade, setIdade] = React.useState(29);
      
      setTimeout( () => {setIdade(30)}, 2000)

      return (
        <div className="componente-4">
          <p>Componente 4 {props.nome} {idade}</p>
          <button type="button" onClick={props.onClickIncrementar}>Incrementar</button>
        </div>
      )
    }

    function MeuComponente(props){
      return (
        <div id="componentes">
          <MeuComponente1 onClickIncrementar={props.onClickIncrementar}/>
        </div>
      )
    }

    function MeuComponenteIrmao(props){
      return (
        <div id="componente-irmao">
          <MeuComponenteIrmao2 contador={props.contador}/>
        </div>
      )
    }

    function MeuComponenteIrmao2(props){

      React.useEffect(function(){
        localStorage.setItem('contador', props.contador)
      })

      return(
        <h2>Contador: {props.contador}</h2>
      )
    }

    function AppComponente(){
      const [contador, incrementaContador] = React.useState(parseInt(localStorage.getItem('contador'), 10) || 0)

      const clickIncrementa = function(){
        incrementaContador(contador + 10)
      }

      return (
        <React.Fragment>
          <MeuComponente onClickIncrementar={clickIncrementa}/>
          <MeuComponenteIrmao contador={contador}/>
        </React.Fragment>
      )
    }

    // metodo para dizer qual componente vc quer injetar e aonde vc quer injetar!
    ReactDOM.render(
      <AppComponente/>,
      document.querySelector('#app')
    )