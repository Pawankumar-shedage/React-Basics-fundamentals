
import { Button } from "./button"
import {AiOutlineClose} from "react-icons/ai"
import PropTypes from 'prop-types'

export const AppHeader = ({text, onAdd, showAdd}) => {
  return (
    <header className="header">
        <h1>{text} </h1>
        <Button   click1={onAdd} color={showAdd ? 'red' : 'green'} 
            text={showAdd ?
            <span> Close <AiOutlineClose color="white" /></span>  : 'Add'} 
        />
        
    </header>
  )
}

//obj
AppHeader.propTypes={
    text: PropTypes.string,
    onAdd:PropTypes.func,
    showAdd : PropTypes.bool
}