import './styles/global.css';

import { Habit } from "./components/Habit";

function App() {
  return (
    <>
      <Habit completed={3} />
      <Habit completed={6} />
      <Habit completed={35} />
      <Habit completed={71} />
      <Habit completed={100} />
    </>
  )
}

export default App
