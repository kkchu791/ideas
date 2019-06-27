import React from "react";
import ProjectItems from "./ProjectItems";

const App = () => {
  return (
      <div style={styles.body}>
        <ProjectItems />
      </div>
  );
}

const styles = {
  body: {
    fontFamily: 'Titillium Web',
  }
}


export default App;
