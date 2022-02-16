import React from "react";

const Join = () => {
    const [name, setName] = React.useState("");

    const onSubmit = () => {
        setName(name)
        alert('A name was submitted: ' + name);
      };
  
      return (
        <form onSubmit={onSubmit}>
          <label>
            Name:
            <input type="text" value={name} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
  };

  export default Join;