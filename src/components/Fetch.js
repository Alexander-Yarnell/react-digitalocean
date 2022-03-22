import React from "react";
import axios from "axios";

import Card from "./Card";

function Fetch(props) {
  const [state, setState] = React.useState(null);
  const url = props.url;

  React.useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => console.log(err));
  }, [url]);

  if (state === null) {
    return <div>Loading...</div>;
  }

  if (state != null) {
    for (let i = 0; i < state.data.length; i++) {
      return (
        <div>
          {state.data.map((book) => {
            const number = book.id -1;
    console.log(state.data[number].attributes.cover.data.attributes.url);
            return (
              <Card
                url={url}
                key={book.id}
                title={book.attributes.title}
                author={book.attributes.author}
                img={
                  state.data[book.id -1].attributes.cover.data.attributes.url
                }
              />
            );
          })}
        </div>
      );
    }
  }
}

export default Fetch;
