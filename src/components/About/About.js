import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .about-container {
    padding-top: 25px;
    padding-bottom: 25px;
    text-align: center;
  }

  .about-paragraph {
    width: 545px;
    display: inline-block;
    padding-top: 25px;
  }

  h1, p {
    color: #efefef
  }
`;


const About = () => {
  return(
    <Styles>
      <div className="about-container">
        <h1>About SaladBowl</h1>
        <div className="about-paragraph">
        <p>
          We all want to eat healthy. Sometimes, though, it seems like too much work.
          First, we have to figure out what to eat. Then, we need to figure out
          whether we want to make something or purchase it. Once we figure that out,
          we need to either learn how to make it or find a place that sells it.

          Decisions upon decisions! It's so tiresome that we lose all motivation.

          I created SaladBowl to help with this. It is meant to decrease the amount
          of decisions you need to make so that you can get to having a healthy meal.
        </p>
        </div>
      </div>
    </Styles>
  )
}

export default About;
