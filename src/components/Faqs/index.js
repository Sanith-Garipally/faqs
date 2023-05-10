import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {
    isAnswerOpenList: [],
  }

  handleAnswerOpen = id => {
    this.setState(prevState => ({
      isAnswerOpenList: [...prevState.isAnswerOpenList, id],
    }))
  }

  handleAnswerClose = id => {
    const {isAnswerOpenList} = this.state
    const updatedList = isAnswerOpenList.filter(objectId => objectId !== id)
    this.setState({
      isAnswerOpenList: updatedList,
    })
  }

  render() {
    const {faqsList} = this.props
    const {isAnswerOpenList} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="head">FAQs</h1>
          <ul className="list-container">
            {faqsList.map(object => (
              <FaqItem
                key={object.id}
                item={object}
                isAnswerOpenList={isAnswerOpenList}
                handleAnswerOpen={this.handleAnswerOpen}
                handleAnswerClose={this.handleAnswerClose}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
