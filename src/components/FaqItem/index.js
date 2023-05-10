import './index.css'

const FaqItem = props => {
  const {item, isAnswerOpenList, handleAnswerOpen, handleAnswerClose} = props
  const {id, questionText, answerText} = item
  const isAnswerOpen = isAnswerOpenList.includes(id)

  const closeAnswer = () => {
    handleAnswerClose(id)
  }

  const openAnswer = () => {
    handleAnswerOpen(id)
  }

  return (
    <li className="list-item">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        {isAnswerOpen ? (
          <button type="button" className="oc-btn" onClick={closeAnswer}>
            <img
              alt="minus"
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png "
            />
          </button>
        ) : (
          <button className="oc-btn" type="button" onClick={openAnswer}>
            <img
              alt="plus"
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
            />
          </button>
        )}
      </div>
      {isAnswerOpen && (
        <div>
          <hr />
          <p className="answer">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
