import React from 'react';
import { Styles } from './AboutStyles.js'


const About = () => {
  return(
    <Styles>
      <div className="about-container">
        <h1>About SaladBowl</h1>
        <div className="about-paragraph">
        <p>
          We all want to eat healthy.<br />
          Sometimes, though, it seems like too much work.
        </p>
        <p>
          First, we have to figure out what to eat. Then, we need to figure out
          whether we want to make something or purchase it. Once we figure that out,
          we need to either learn how to make it or find a place that sells it.
        </p>


        <p>
          <strong>Decisions upon decisions!</strong><br />
          It's so tiresome that we lose all motivation.
        </p>

        <p>
          I created SaladBowl to help with this.
          Its purpose it to help you skip all that decision making so focus on having a healthy meal.
        </p>
        </div>
      </div>
    </Styles>
  )
}

export default About;
