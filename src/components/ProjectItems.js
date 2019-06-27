import React from "react";
import Radium, {StyleRoot} from 'radium';
import iddy from '../images/iddy.png';
import radio_days from '../images/radio_days.png';
import surf_kiosks from '../images/surfkiosks.png';
import fight_against_mlm_companies from '../images/fight_against_mlm_companies.png';
import coding_factory from '../images/coding_factory.png';

const ProjectItems = () => {
  return (
    <StyleRoot>
      <div style={styles.container}>
        <h1 style={styles.header}>My Projects</h1>
        <div style={styles.grid}>
          <div style={styles.cell}>
            <a href="http://iddy.surge.sh/">
              <img src={iddy} alt="" style={styles.responsiveImage}/>
            </a>
            <div style={styles.textBox}>
              <a href="http://iddy.surge.sh/" style={styles.link}>
                Iddy
              </a> - an app to allow you to express yourself in idioms
            </div>
          </div>
          <div style={styles.cell}>
            <a href="">
              <img src={radio_days} alt="" style={styles.responsiveImage}/>
            </a>
            <div style={styles.textBox}>
              <a href="" style={styles.link}>
                Radio Days
              </a> - an app to let you regain that sense of music discovery
            </div>
          </div>
          <div style={styles.cell}>
            <a href="">
              <img src={fight_against_mlm_companies} alt="" style={styles.responsiveImage}/>
            </a>
            <div style={styles.textBox}>
              <a href="" style={styles.link}>
                Fight Against MLM Companies
              </a> - donation app to fight against MLM Companies
            </div>
          </div>
          <div style={styles.cell}>
            <a href="">
              <img src={surf_kiosks} alt="" style={styles.responsiveImage}/>
            </a>
            <div style={styles.textBox}>
              <a href="" style={styles.link}>
                SurfKiosks
              </a> - the redbox for surfboards
            </div>
          </div>
          <div style={styles.cell}>
            <a href="">
              <img src={coding_factory} alt="" style={styles.responsiveImage}/>
            </a>
            <div style={styles.textBox}>
              <a href="" style={styles.link}>
                Coding Factory
              </a> - transitioning people to the new tech workforce
            </div>
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
    },
  },
  cell: {
    '@media (min-width: 600px)': {
      width: "calc(50% - 2rem)",
    },
    '@media (min-width: 1000px)': {
      width: "calc(33.3333% - 2rem)",
    },
    margin: "1rem",
  },
  textBox: {
    border: "1px solid black",
    padding: "10px 0",
    background: "white",
    textAlign: "center",
  },
  responsiveImage: {
    maxWidth: "100%"
  },
  link: {
    fontWeight: 'bold'
  }
}

export default ProjectItems;
