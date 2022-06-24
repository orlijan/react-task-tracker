import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";
const Header = ({ title, onAdd,showAdd }) => {
  const location = useLocation()
  

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname=== '/react-task-tracker/' && 
      (<Button color={showAdd? '#a24936' : '#424342'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}
      />
      )}
    </header>
  )
  }
Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//        <h1 style={headingStyle}>{title}</h1> calls this in
// css in js
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }
export default Header;
