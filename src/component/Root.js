import React from 'react'
import { connect } from 'react-redux'
const  Root = () => {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      posts: state.posts
    }
  }
  
  export default connect(mapStateToProps)(Root)