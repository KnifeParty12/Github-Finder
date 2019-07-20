import React, { useReducer } from 'react';
import axios from 'axios';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

import {
SET_ALERT,
    REMOVE_ALERT
} from '../types';

const GithubState = props => {
    const initialState = null;
    const [state,dispatch] = useReducer(AlertReducer, initialState);

    //S


    return (
        <GithubContext.Provider
            value ={{
                users: state.users,
                user: state.user,
                repos:state.repos,
                loading: state.loading,
                searchUsers,
                clearUsers,
                getUser,
                getUserRepos
            }}
        >
            {props.children}
        </GithubContext.Provider>
    );
};

export default GithubState;
