//브라우저 상에 보여질 ui

import Todos from './componenets/Todos';
import CounterContainer from './containers/CounterContainer';

function App() {
  return (
    <div>
      <CounterContainer/>
      <hr />
      <Todos/>
    </div>
  );
}

export default App;
