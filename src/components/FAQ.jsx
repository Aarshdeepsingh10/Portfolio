import { useState } from 'react';

const questions = [
  {
    question: 'What is Taskflow?',
    answer: 'Taskflow is a simple place to organise projects, tasks, and team work.'
  },
  {
    question: 'Can I add my own features?',
    answer: 'Yes. Open the dashboard and use the feature cards section to add a card.'
  },
  {
    question: 'Is this a real product?',
    answer: 'No. This is a frontend practice project built to help you learn React.'
  }
];

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <section className="section faq" id="faq">
      <div className="section-heading">
        <p className="eyebrow">GOT QUESTIONS?</p>
        <h2>Frequently asked questions.</h2>
      </div>

      <div className="faq-list">
        {questions.map((item, index) => (
          <div className="faq-item" key={item.question}>
            <button
              className="faq-question"
              onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}
            >
              {item.question}
              <span>{openQuestion === index ? '−' : '+'}</span>
            </button>
            {openQuestion === index && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;