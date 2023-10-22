    // // import styles from './Statis.module.css'
    import logo from '../../img/Tinkoff 1.png'
import Headers from '../../components/Headers'


function Statis() {
      return (
      <div>
        <Headers
          path = {logo}
          Name = "Главная"
          navigate = '../'
        />
        <h1>Пока что это лучше не видеть</h1>
      </div>
      
      )

    }

export default Statis;
