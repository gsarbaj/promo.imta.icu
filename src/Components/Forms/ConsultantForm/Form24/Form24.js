import React from 'react';
import Form24 from 'react-script-tag'

const B24Form = () => {


    return(
        <div className={"Form24"}>
            <Form24 type="text/javascript" src={process.env.PUBLIC_URL + '/forms/form24.js'}/>
        </div>
    )
}

export default B24Form