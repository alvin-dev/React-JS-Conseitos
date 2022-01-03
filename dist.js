const NomeContext = React.createContext('nome');

function MeuComponente1() {
  const myName = 'Alvaro Guedes';
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-1"
  }, /*#__PURE__*/React.createElement(MeuComponente2, null, /*#__PURE__*/React.createElement(MeuComponente4, {
    nome: myName
  })));
}

function MeuComponente2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", null, props.children)));
}

function MeuComponente3() {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-3"
  }, /*#__PURE__*/React.createElement(MeuComponente4, null));
}

function MeuComponente4(props) {
  const [idade, setIdade] = React.useState(29);
  setTimeout(() => {
    setIdade(30);
  }, 5000);
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-4"
  }, /*#__PURE__*/React.createElement("p", null, "Componente 4 ", props.nome, " ", idade));
}

function MeuComponente() {
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes"
  }, /*#__PURE__*/React.createElement(MeuComponente1, null));
}

function MeuComponenteIrmao() {
  return /*#__PURE__*/React.createElement("h1", null, "Meu Componente Irm\xE3o");
}

function AppComponente() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MeuComponente, null), /*#__PURE__*/React.createElement(MeuComponenteIrmao, null));
} // metodo para dizer qual componente vc quer injetar e aonde vc quer injetar!


ReactDOM.render( /*#__PURE__*/React.createElement(AppComponente, null), document.querySelector('#app'));
