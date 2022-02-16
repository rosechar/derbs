import React from "react";
import { useNavigate } from "react-router-dom";

const Join = () => {
    const navigate = useNavigate();
    const [name, setName] = React.useState("");

    const onSubmit = () => {
        setName(name);
        navigate("/tarek");
      };
  
      return (
        <React.Fragment>
        <form onSubmit={onSubmit}>
          <label>
            do you ily back:
            <input type="checkbox" value={name} onChange={(e) => setName(e.target.value)}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        </React.Fragment>
      );
  };

  export default Join;