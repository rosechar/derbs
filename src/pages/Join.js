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
            do you ily back:
            <input type="checkbox" value={name} onChange={(e) => setName(e.target.value)}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
  };

  export default Join;