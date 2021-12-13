import React from 'react'
import Head from 'next/head'

/*
File to be deleted.
*/

const AddCounter = OriginalComponent => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      }
    }

    increment = () => {
      this.setState(prevState => {
        return {count: prevState.count + 1}
      })
    }

    render() {
      return <OriginalComponent count={this.state.count} increment={this.increment}/>
    }
  }
  return NewComponent;
}

const HoverCounter = ({count, increment}) => {
  return (
    <>
      <Head>
        <title>HOC</title>
      </Head>
      <button onMouseOver={increment}>Clicked {count} times.</button>
    </>
  )
}

const ClickCounter = ({count, increment}) => {
  return (
    <>
      <Head>
        <title>HOC</title>
      </Head>
      <button onClick={increment}>Clicked {count} times.</button>
    </>
  )
}

export default AddCounter(HoverCounter)