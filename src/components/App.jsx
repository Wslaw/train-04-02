import React, { useState } from 'react';
import Section from './Feedback/Section';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Feedback/Statistics';
import styles from './Feedback/feedbackForm.module.css';
import Notification from './Feedback/Notification';
//
// ДЗ-4-1
// 
const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = option => {
    setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const { good, neutral, bad } = state;
  const total = good + neutral + bad;
  const countPositiveFeedbackPercentage =
    total === 0 ? 0 : Math.round((good / total) * 100);

  return (
    <div className={styles.app}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <div className={styles.result}>
            {<Notification message="There is no feedback." />}
          </div>
        )}
      </Section>
    </div>
  );
};

export default App;
