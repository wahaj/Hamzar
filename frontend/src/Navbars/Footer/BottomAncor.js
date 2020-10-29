import React from "react"
import Link from "@material-ui/core/Link"
import History from '../../History/history'


function BottomAncor(props){
    function handleClick(){
        History.push(props.object.path)
    }
    return (
        <div>
            <Link
                component="button"
                variant="body2"
                style={{color:'white'}}
                onClick={handleClick}
            >
                {props.object.text}
            </Link>
        </div>
    )
}

export default BottomAncor
