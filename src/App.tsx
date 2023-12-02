/** External */
import { useDispatch, useSelector } from "react-redux/";

/** Internal */
import { increment, decrement } from "./store/counterSlice";

function App() {
  const count = useSelector(
    (state: { counter: { value: number } }) => state.counter.value
  );

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default App;
