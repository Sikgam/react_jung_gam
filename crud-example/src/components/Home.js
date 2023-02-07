import useNavigate from "../hooks/useNavigate";

const Home = () => {
  const {goBoard} = useNavigate()
  const {goCalendar} = useNavigate()
 
  return (
    <div>
      <button onClick={goBoard}> board </button>

      <button onClick={goCalendar}> calendar</button>

    </div>
  )
}

export default Home