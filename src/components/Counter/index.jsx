import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement, increase, toggleCounter } from '../../store'
import { Card } from '../UI/Card'

import { title, counter, button, button__container } from './styles.module.css'
export const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const show = useSelector((state) => state.counter.show)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(increment())
  }
  const decrementHandler = () => {
    dispatch(decrement())
  }

  const toggleHandler = () => {
    dispatch(toggleCounter())
  }

  const incrementByAmount = () => {
    dispatch(increase(5))
  }

  return (
    <Card>
      <h1 className={title}>redux counter</h1>
      {show && <h1 className={counter}>{count}</h1>}
      <div className={button__container}>
        <button className={button} onClick={incrementHandler}>
          Increment
        </button>
        <button className={button} onClick={incrementByAmount}>
          Increment By 5
        </button>
        <button className={button} onClick={decrementHandler}>
          Decrement
        </button>
      </div>
      <button className={button} onClick={toggleHandler}>
        Toggle Counter
      </button>
    </Card>
  )
}
