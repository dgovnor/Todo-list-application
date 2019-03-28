import React from "react";
import Head from "next/head";
const List = props => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
        />
      </Head>
      <ul className="list-group">
        {props.todo.map((item, index) => (
          <li
            key={index}
            style={{ overflow: "hidden" }}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item}
            <button
              onClick={() => props.onDelete(item)}
              className="badge badge-primary badge-pill"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
