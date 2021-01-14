import React from 'react'


const Book = (props) => {
  const {img, title, author} = props;

  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = () => {
    alert('Hello World');
  }

  const complexExample = (author) => {
    console.log(author);
  }

  return(
    <article className='book' onMouseOver={()=> {console.log(title)}}>
      <img src={img} alt=""/>
      <h1 onClick={()=> console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>Button</button>
      <button type="button" onClick={() => complexExample(author)}>complex</button>
    </article>
  )
}
export default Book