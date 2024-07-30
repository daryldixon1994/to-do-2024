import React from "react";
import { Button } from "semantic-ui-react";
import "./style.css"
function BlockWithBtn() {
  return (
    <div id="block-with-btn">
      <h6>Welcome</h6>
      <h1>Keep your dreams aroused with a cup of coffee</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, fuga. A
        itaque harum odio officia? Quia necessitatibus temporibus nisi esse?
      </p>
      <Button color="orange">Book now</Button>
    </div>
  );
}

export default BlockWithBtn;
