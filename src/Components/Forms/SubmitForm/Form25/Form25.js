import React from 'react';
import Form25 from 'react-script-tag'

const B25Form = () => {


    return(
        <div className={"Form25"}>
            <Form25 type="text/javascript" src={process.env.PUBLIC_URL + '/forms/form25.js'}/>
        </div>
    )
}

export default B25Form