import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props:any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error:any) {
    // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    return { hasError: true };
  }

  componentDidCatch(error:any, errorInfo:any) {
    // Você também pode registrar o erro em um serviço de relatórios de erro
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI alternativa
      return ${{"<h1>Algo deu errado.</h1>"}};
    }

    return this.props.children; 
  }
}

function logErrorToMyService(error: any,errorInfo: any) {
throw new Error("Function not implemented.");
}
