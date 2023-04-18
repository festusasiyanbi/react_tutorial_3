import './App'

const Button = ({ buttonText, reqType, setReqType }) => {

  return (
    <button 
      className={buttonText === reqType ? "selected" : null}
      onClick={() => setReqType(buttonText)}
    > {buttonText.toUpperCase()}
    </button>
  )
}

export default Button;
