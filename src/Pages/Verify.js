import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'querystring';
import { Verification } from '../Redux/Action';
import { Redirect } from 'react-router-dom';

const Verify = (props) => {
    let params = queryString.parse(props.location.search)
    let username  = params["?username"];
    let password = params.password
    console.log(props)

    let dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(
            Verification({
                username,
                password
            })
        )
    })
    let verified = useSelector((state) => state.auth.verified)
    let err = useSelector((state) => state.auth.error)
    console.log(err.data)
    if(verified){
        return(
            <Redirect to='/'/>
        )
    }
    return ( 
        <div>
            {
                err
                ?
                err.data.message
                :
                'Verify'
            }
        </div>
    );
}
 
export default Verify;