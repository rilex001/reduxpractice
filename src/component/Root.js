import React from 'react'
import { connect } from 'react-redux'
const  Root = () => {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  })
  
  export default connect(mapStateToProps)(Root)