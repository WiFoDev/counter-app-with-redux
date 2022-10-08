import { Card } from '../UI/Card'

import { title, counter, toggle__button } from './styles.module.css'
export const Counter = () => {
  return (
    <Card>
      <h1 className={title}>redux counter</h1>
      <h1 className={counter}>-- counter value --</h1>
      <button className={toggle__button}>Toggle Counter</button>
    </Card>
  )
}
