import React, {useEffect, useState} from "react";

const useLocalStorage = ( localStorageKey, data ) => {

   // const initialState = JSON.parse(localStorage.getItem(localStorageKey)) || [];

    const [ value, setValue ] = useState(() => {
        const initialState = localStorage.getItem( localStorageKey );
        if ( initialState !== null ) {
            return JSON.parse(initialState);
        }
        return data;
    });

    useEffect( () => {
      localStorage.setItem( localStorageKey, JSON.stringify( value ));
    },[ localStorageKey, value ]);


    return[value,setValue];
};
export default useLocalStorage;