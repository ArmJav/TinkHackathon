import Card from './components/Card'
import styles from './styles/container.module.css'
import cartimg from './img/T-8 1.png'
import cartimg2 from './img/T-9 1.png'

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.font}>Hello World</h1>
      <h2 className={styles.font}>Сервис турниров для игры в настольный футбол</h2>
      <div className={styles.container}>
        <Card
          cartimg = {cartimg}
          h1_text = "Профиль"
          span = "Войдите или зарегистрируйтесь"
        />
        <Card
          cartimg = {cartimg2}
          h1_text = "Турниры"
          span = "Посмотрите список актуальных турниров"
        />
      </div>

    </div>
  );
}

export default App;
