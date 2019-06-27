import React from "react";
import Radium,{StyleRoot} from 'radium';

const ProjectItems = () => {
  return (
    <StyleRoot>
      <div style={styles.container}>
        <h1 style={styles.header}>My Projects</h1>
        <div style={styles.grid}>
          <div style={styles.cell}>
            <img src="http://placehold.it/800x800" alt="" style={styles.responsiveImage}/>
            <div style={styles.textBox}>Iddy - an app to allow you to express yourself in idioms</div>
          </div>
          <div style={styles.cell}>
            <img src="http://placehold.it/800x800" alt="" style={styles.responsiveImage}/>
            <div style={styles.textBox}>Iddy - an app to allow you to express yourself in idioms</div>
          </div>
          <div style={styles.cell}>
            <img src="http://placehold.it/800x800" alt="" style={styles.responsiveImage}/>
            <div style={styles.textBox}>Iddy - an app to allow you to express yourself in idioms</div>
          </div>
          <div style={styles.cell}>
            <img src="http://placehold.it/800x800" alt="" style={styles.responsiveImage}/>
            <div style={styles.textBox}>Iddy - an app to allow you to express yourself in idioms</div>
          </div>
          <div style={styles.cell}>
            <img src="http://placehold.it/800x800" alt="" style={styles.responsiveImage}/>
            <div style={styles.textBox}>Iddy - an app to allow you to express yourself in idioms</div>
          </div>
          <div style={styles.cell}>
            <img src="http://placehold.it/800x800" alt="" style={styles.responsiveImage}/>
            <div style={styles.textBox}>Iddy - an app to allow you to express yourself in idioms</div>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

const styles = {
  header: {
    textAlign: "center",
  },
  container: {
    margin: "0 auto",
    maxWidth: "1200px",
    padding: "0 1rem",
  },
  grid: {
    '@media (min-width: 600px)': {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
    }
  },
  cell: {
    '@media (min-width: 600px)': {
      width: "calc(50% - 2rem)",
    },
    '@media (min-width: 1000px)': {
      width: "calc(33.3333% - 2rem)",
    },
    margin: "1rem",
    display: "block",
  },
  textBox: {
    border: "1px solid black",
    padding: "0 0",
  },
  responsiveImage: {
    maxWidth: "100%"
  }
}

export default ProjectItems;
