import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const contextApi = React.createContext();
export const DELETE_ITEM = 'DELETE_ITEM';

export const ContextApi = props =>{
    const [ article, setArticle ] = useState('');
    const [buttonClick, setButtonClick] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [content, setContent] = useState('');
   
    useEffect(() => {
        axios.get('http://hn.algolia.com/api/v1/search?query=').then((res) => {
          setArticle(res.data.hits);
        });
      }, []);
    const value = {
        article,
        setArticle,
        buttonClick,
        setButtonClick,
        inputValue,
        setInputValue,
        content,
        setContent,
    }
    return (
        <contextApi.Provider value={value}>
            {props.children}
        </contextApi.Provider>
    )
}