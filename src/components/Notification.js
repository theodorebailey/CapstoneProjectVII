import React from 'react'

const Notification = ( { showNotification }) => {
  return (
    // template literal with ternary operator takes show nofitication, if true add show / add nothing
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  )
}

export default Notification