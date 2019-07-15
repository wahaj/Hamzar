import React from "react"
import Link from "@material-ui/core/Link"


function BottomAncor(props){
    return (
        <div>
            <Link
                component="button"
                variant="body2"
                style={{color:'white'}}
            >
                {props.object.text}
            </Link>
        </div>
    )
}

export default BottomAncor
