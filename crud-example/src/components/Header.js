import useNavigate from "../hooks/useNavigate";
import "../css/Header.css";


const Header = () => {

  const {goBoard} = useNavigate()
  const {goCalendar} = useNavigate()
  const {goHome} = useNavigate()
  return( 
    <div className="header">
        <ul>
          <li onClick={goHome}>로고(home)</li>
          <li onClick={goBoard}> board </li>
          <li onClick={goCalendar}> calendar</li>
        </ul>
    </div>
  )
}


export default Header