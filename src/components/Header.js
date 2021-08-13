import {  useSelector, useDispatch } from 'react-redux'


function Header() {
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const dispatch = useDispatch();

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      dispatch({ type: "SET_CURRENT_USER", playload: null})
      // history.push('/')
    });
  }
  console.log(currentUser)

  return (
    <div className="header">
      <h2>Header</h2>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Header;