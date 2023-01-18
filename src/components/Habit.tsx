interface HabitProps {
  name: string;
  completed: number
}

export function Habit(props: HabitProps) {
  return (
    <div>
      <h1>{`${props.name} - Completed: ${props.completed}`}</h1>
    </div>

  )
}