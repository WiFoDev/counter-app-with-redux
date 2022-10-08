import './App.css'
import { Card } from './components/UI/Card'

export const App = () => {
  return (
    <main>
      <section>
        <Card className="card">
          <h1 className="title">redux counter</h1>
          <h1 className="counter">-- counter value --</h1>
          <button className="toggle__button">Toggle Counter</button>
        </Card>
      </section>
    </main>
  )
}
