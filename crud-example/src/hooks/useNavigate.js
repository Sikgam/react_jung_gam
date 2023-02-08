import { useNavigate as _useNavigate } from "react-router-dom"; 

const useNavigate = () => {
  const navigate = _useNavigate();

  return {
    goBoard: () => navigate("/board"),
    goCalendar: () => navigate("/calendar"),
    goHome: () => navigate("/")
    
}
}

export default useNavigate