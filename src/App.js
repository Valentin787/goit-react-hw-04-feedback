import s from './App.module.css';
import React from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  
   const countTotalFeedback=()=> {
     const values = Object.values(todos);
    return values.reduce((acc, value) => acc + value, 0);
   }
    const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((todos.good * 100) / total) : 0;
    }
  
  const createFeedbackOptionsComponent = (options) => {
    return (
      <FeedbackOptions
        options={options}
        onLeaveFeedback={handleLeaveFeedback}
      />
    );
    }
   const createStatisticsComponent = (total, goodPercentage) =>{
    return (
      <Statistics
        good={todos.good}
        neutral={todos.neutral}
        bad={todos.bad}
        total={total}
        goodPercentage={`${goodPercentage} %`}
      />
    );
   }
    const handleLeaveFeedback = e => {
    const label = e.target.innerText.toLowerCase();
      console.log(label)
      setTodos((prevState) => ( console.log(prevState),{
      
      ...prevState,[label]: prevState[label] + 1,
      }
      ));
    };
  
  const options = Object.keys(todos);
    const total = countTotalFeedback();
    const goodPercentage = countPositiveFeedbackPercentage();

    const feedbackOptionsComponent =
      createFeedbackOptionsComponent(options);
    const statisticsComponent = createStatisticsComponent(
      total,
      goodPercentage,
    );
    const notificationComponent = (
      <Notification message={'There is no feedback.'} />
    );
  
   return (
      <div className={s.container}>
        <Section
          title={'Please leave feedback'}
          children={feedbackOptionsComponent}
        />
        <Section
          title={'Statistics'}
          children={total ? statisticsComponent : notificationComponent}
        />
      </div>
    );
  
}

// class App extends React.Component {
//   // state = {
//   //   good: 0,
//   //   neutral: 0,
//   //   bad: 0,
//   // };

//   countTotalFeedback() {
//     const values = Object.values(this.state);
//     return values.reduce((acc, value) => acc + value, 0);
//   }

//   countPositiveFeedbackPercentage() {
//     const total = this.countTotalFeedback();
//     return total ? Math.round((this.state.good * 100) / total) : 0;
//   }

//   createFeedbackOptionsComponent(options) {
//     return (
//       <FeedbackOptions
//         options={options}
//         onLeaveFeedback={this.handleLeaveFeedback}
//       />
//     );
//   }

//   createStatisticsComponent(total, goodPercentage) {
//     return (
//       <Statistics
//         good={this.state.good}
//         neutral={this.state.neutral}
//         bad={this.state.bad}
//         total={total}
//         goodPercentage={`${goodPercentage} %`}
//       />
//     );
//   }

//   handleLeaveFeedback = e => {
//     const label = e.target.innerText.toLowerCase();

//     this.setState(prevState => ({
//       [label]: prevState[label] + 1,
//     }));
//   };

//   render() {
//     const options = Object.keys(this.state);
//     const total = this.countTotalFeedback();
//     const goodPercentage = this.countPositiveFeedbackPercentage();

//     const feedbackOptionsComponent =
//       this.createFeedbackOptionsComponent(options);
//     const statisticsComponent = this.createStatisticsComponent(
//       total,
//       goodPercentage,
//     );
//     const notificationComponent = (
//       <Notification message={'There is no feedback.'} />
//     );

//     return (
//       <div className={s.container}>
//         <Section
//           title={'Please leave feedback'}
//           children={feedbackOptionsComponent}
//         />
//         <Section
//           title={'Statistics'}
//           children={total ? statisticsComponent : notificationComponent}
//         />
//       </div>
//     );
//   }
// }

export default App;
