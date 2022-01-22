import React from "react";

const List = ({ data }) => {
  // console.log(data);
  return (
    <ul className="user-list">
      {data.map((el) => {
        return (
          <li key={el.id}>
            <Person {...el} />
          </li>
        );
      })}
    </ul>
  );
};

const Person = ({ id, nome, stato, img }) => {
  // console.log({ PersonComponent: props });
  return (
    <article key={id}>
      <img src={img} alt="person-img" className="person-img"></img>
      <div className="person-info">
        <div className="person-action">
          <h4>{nome}</h4>
          <button className="btn">Remove</button>
        </div>
        <p>{stato}</p>
      </div>
    </article>
  );
};

export default List;
