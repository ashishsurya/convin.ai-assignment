import { useDispatch } from "react-redux";
import { setUserId } from "../features/userIdSlice";

export default function UserButton({ userId, title }) {

  const dispatch = useDispatch();



  function handleClick() {
    dispatch(setUserId(userId))
  }

  return <button onClick={handleClick}>{title}</button>;
}
