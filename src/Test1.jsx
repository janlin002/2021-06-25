import React, { useContext } from 'react';
import './style/index.css';
import { contextApi } from './ContextApi';

function Test1() {
  const {
    article,
    buttonClick,
    setButtonClick,
    inputValue,
    setInputValue,
    content,
    setContent,
  } = useContext(contextApi);

  const contentRender = buttonClick === false ? [...article] : [...content];

  const clickHandler = () => {
    setButtonClick(true);
    [...article].map((item) => {
      if (item.title) {
        const check = item.title.toLowerCase().search(inputValue);
        if (check !== -1) {
          setContent([item]);
        } else {
          return null;
        }
      }
      return item;
    });
  };
  const deleteItem = (index) => {
    article.splice(index, 1);
    setButtonClick(true);
    setContent([...article]);
    setButtonClick(false);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value.toLowerCase());
        }}
      />
      <button onClick={() => clickHandler()}>search</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Author</th>
            <th>Comments</th>
            <th>Title</th>
            <th>URL</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {contentRender.map((item, index) => (
            <tr>
              <td>{item.objectID}</td>
              <td>{item.author}</td>
              <td>{item.num_comments}</td>
              <td>{item.title}</td>
              <td>{item.url}</td>
              <td>
                <button onClick={() => deleteItem(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>load more</button>
    </div>
  );
}

export default Test1;
