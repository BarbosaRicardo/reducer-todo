import React from 'react'
 const Todo = props => {

    return (
        <div>
            <p
                className={props.item.complete ? "complete" : ""}
                onClick={()=> {
                    props.dispatch({type: "toggleCompleteness",
                    payload:props.item.id})
                    console.log(props.item.id)
                }
            }>
                {props.item.item}
            </p>

        </div>
    )
 }

 export default Todo