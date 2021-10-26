import React from 'react'

function Alerts(props) {
    const capitalizeLer = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
     
       props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show py-2`} role="alert">
            <strong>{capitalizeLer(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      
    )
}

export default Alerts
