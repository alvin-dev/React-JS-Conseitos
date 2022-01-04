const NomeContext = React.createContext('nome');

function MeuComponente1(props) {
  const myName = 'Alvaro Guedes';
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-1"
  }, /*#__PURE__*/React.createElement(MeuComponente2, null, /*#__PURE__*/React.createElement(MeuComponente4, {
    nome: myName,
    onClickIncrementar: props.onClickIncrementar
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
  }, 2000);
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-4"
  }, /*#__PURE__*/React.createElement("p", null, "Componente 4 ", props.nome, " ", idade), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: props.onClickIncrementar
  }, "Incrementar"));
}

function MeuComponente(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes"
  }, /*#__PURE__*/React.createElement(MeuComponente1, {
    onClickIncrementar: props.onClickIncrementar
  }));
}

function MeuComponenteIrmao(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "componente-irmao"
  }, /*#__PURE__*/React.createElement(MeuComponenteIrmao2, {
    contador: props.contador
  }));
}

function MeuComponenteIrmao2(props) {
  React.useEffect(function () {
    localStorage.setItem('contador', props.contador);
  });
  return /*#__PURE__*/React.createElement("h2", null, "Contador: ", props.contador);
}

function AppComponente() {
  const [contador, incrementaContador] = React.useState(parseInt(localStorage.getItem('contador'), 10) || 0);

  const clickIncrementa = function () {
    incrementaContador(contador + 10);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MeuComponente, {
    onClickIncrementar: clickIncrementa
  }), /*#__PURE__*/React.createElement(MeuComponenteIrmao, {
    contador: contador
  }));
} // metodo para dizer qual componente vc quer injetar e aonde vc quer injetar!


ReactDOM.render( /*#__PURE__*/React.createElement(AppComponente, null), document.querySelector('#app'));
