import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

const List = ({ data, removeItem }) => {
  // console.log(data);

  return (
    <ul className="user-list">
      {data.map((el) => {
        return (
          <li key={el.id}>
            <Person {...el} removeItem={removeItem} />
          </li>
        );
      })}
    </ul>
  );
};

const Person = ({ id, nome, stato, img, removeItem }) => {
  // console.log({ PersonComponent: props });

  return (
    <article key={id}>
      <img src={img} alt="person-img" className="person-img"></img>
      <div className="person-info">
        <div className="person-action">
          <h4>{nome}</h4>
          <button className="btn" onClick={() => removeItem(id)}>
            <RiDeleteBack2Fill className="icon" />
          </button>
        </div>
        <p>{stato}</p>
      </div>
    </article>
  );
};

export default List;
