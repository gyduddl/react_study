//브라우저 상에 보여질 ui

import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div>
      <CounterContainer/>
      <hr />
      <TodosContainer/>
    </div>
  );
}

export default App;
