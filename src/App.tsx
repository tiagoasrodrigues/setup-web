import { Habit } from "./components/Habit";

function App() {
  return (
    <>
      <Habit name="Habit 1" completed={3} />
      <Habit name="Habit 2" completed={6} />
      <Habit name="Habit 3" completed={0} />
      <Habit name="Habit 4" completed={7} />
      <Habit name="Habit 5" completed={3} />
    </>
  )
}

export default App
