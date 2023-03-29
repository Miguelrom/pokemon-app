import classes from './ProjectDescription.module.css';

export default function ProjectDescription() {

  return (
    <div className={classes.descriptionCard}>
      <h4>About</h4>
      <p>
        This project is based on the Pokémon App development requested for the fourth stage of the Student of Excellence 2020
        contest of NearSoft, Inc. <br />
        The main purpose of the web application is to serve as an exercise to acquire skills in
        frontend web development, particularly in the use of the <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a> library. <br />
        Another goal of this project is to have it as a demo in my personal portfolio for potential employers.
      </p>
      <h4>Repository</h4>
      <p>You can find the code for this app in this public <a href="https://github.com/Miguelrom/pokemon-app" target="_blank" rel="noopener noreferrer">GitHub repo</a>.</p>
      <h4>Author</h4>
      <p>Miguel Romero V.</p>
      <h4>My portfolio</h4>
      <p>I showcase my latest projects on my <a href="https://miguelrom.github.io/" target="_blank" rel="noopener noreferrer">personal portfolio</a>.</p>
      <h4>LinkedIn</h4>
      <p>If you want, you can check out <a href="https://www.linkedin.com/in/miguel-romero-v/" target="_blank" rel="noopener noreferrer">my LinkedIn</a>.</p>
    </div>
  );
}
