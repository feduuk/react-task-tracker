import PropTypes from 'prop-types'
import Button from './Button'

const Header = () => {
    const onClick = () => {
        console.log("click")
    }
  return (
    <header className="header">
        <h1>Task tracker</h1>
        <Button color="green" text="Add" onClick={onClick}/>
    </header>
  )
}

/* <h1 style={headingStyle}>Task tracker for {title}</h1> */
// const headingStyle = {
//     color: "red", 
//     backgroundColor: "teal"
// }

Header.defaultProps={
    title: "defaultTitle",
}
Header.propTypes={
    title: PropTypes.string.isRequired,
}

export default Header