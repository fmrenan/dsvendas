import { Link } from "react-router-dom";

import Footer from "components/Footer";
import Header from "components/Header";

export default function Home(){
  
  return(
    <>
      <Header />        
      <div className="container">

        <div className="jumbotron">
          <h1 className="display-4">DSVendas</h1>
          <p className="lead">
            Analise o desempenho das suas vendas por diferentes perspectivas
          </p>
          <hr/>
          <p>
            Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.
          </p>
          
          <Link to='/dashboard'>
            <button className="btn btn-primary btn-lg">
              Acessar o Dashboard  
            </button> 
          </Link>
        </div>

      </div>
      <Footer/>
    </>
  )
}