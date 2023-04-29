//import React, { Component } from "react";
import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';

export default function Counter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const handleClick = event => {
    const { name } = event.currentTarget;
    switch (name) {
      case 'good':
        setGood(state => state + 1)
        break;
      case 'neutral':
        setNeutral(state => state + 1)
        break;
      case 'bad':
        setBad(state => state + 1)
        break;
      default:
        return;
    }
  };

  const totalFeedbacks = good + neutral + bad;
  const positiveFeedbacks = parseInt(good / totalFeedbacks * 100);

  return (
  <>
    <Section title="Please leave feedback">
    <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
    </Section>
    {totalFeedbacks > 0
    ? (<Section title="Statistics">
      <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedbacks} positivePercentage={positiveFeedbacks} />
      </Section>)
    : (<Notification message ="There is no feedback" />)
    }
  </>
  )
}