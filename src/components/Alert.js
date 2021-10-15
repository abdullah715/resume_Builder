import React from 'react'
import {Alert} from 'react-bootstrap'
export default function AlertUI(props){
    const [alert, setAlert] = props.toggler

    
    return(
        <>
        {alert.show && (
                <Alert variant={alert.type} className="" onClose={() => setAlert(old=>({...old,show:false}))} dismissible>
                    <Alert.Heading>{alert.msg}</Alert.Heading>
                </Alert>
        )}
        </>
    )
}