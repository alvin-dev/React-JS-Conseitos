const NomeContext = React.createContext('nome')

    function MeuComponente1(){
      const myName = 'Alvaro Guedes'
      return (
          <div className="componente-1">
            <MeuComponente2>
              <MeuComponente4 nome={myName}/>
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
      
      setTimeout( () => {setIdade(30)}, 5000)

      return (
        <div className="componente-4">
          <p>Componente 4 {props.nome} {idade}</p>
        </div>
      )
    }

    function MeuComponente(){
      return (
        <div id="componentes">
          <MeuComponente1/>
        </div>
      )
    }

    function MeuComponenteIrmao(){
      return (
        <h1>Meu Componente Irmão</h1>
      )
    }

    function AppComponente(){
      return (
        <div>
          <MeuComponente/>
          <MeuComponenteIrmao/>
        </div>
      )
    }

    // metodo para dizer qual componente vc quer injetar e aonde vc quer injetar!
    ReactDOM.render(
      <AppComponente/>,
      document.querySelector('#app')
    )