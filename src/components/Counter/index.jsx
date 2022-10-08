import { useSelector, useDispatch } from 'react-redux'

import { Card } from '../UI/Card'

import { title, counter, button, button__container } from './styles.module.css'
export const Counter = () => {
  const counterState = useSelector((state) => state.counter)
  const counterDispatcher = useDispatch()

  const incrementHandler = () => {
    counterDispatcher({ type: 'increment' })
  }
  const decrementHandler = () => {
    counterDispatcher({ type: 'decrement' })
  }

  return (
    <Card>
      <h1 className={title}>redux counter</h1>
      <h1 className={counter}>{counterState}</h1>
      <div className={button__container}>
        <button className={button} onClick={incrementHandler}>
          Increment
        </button>
        <button className={button} onClick={decrementHandler}>
          Decrement
        </button>
      </div>
      <button className={button}>Toggle Counter</button>
    </Card>
  )
}
