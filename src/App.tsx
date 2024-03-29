
import './App.css';
import { useCounterStore } from './store';

function App() {
  const count = useCounterStore((state) => state.count);  

  return <OtherComponent count={count} />;
}

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const multiply = useCounterStore((state) => state.multiply);

  return <div>
    {count}
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={multiply}>Multiply</button>
    </div>
    </div>;
}

export default App
