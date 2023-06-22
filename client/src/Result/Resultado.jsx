import './style.css'
import Banner from '../Components/Banner'

const Resultado = (props) => {

  return (
    <><div>
      <Banner />
    </div>
    <center>
        <div className='result-cont card'>
          <h2>Resultado del Escaneo:</h2>
          <center>
            <p>{props.result}</p>
          </center>
          <br /><br />
        </div>
      </center></>
  );
}

export default Resultado;