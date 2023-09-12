import React from 'react'

export const ErrorAlert = ({ error }) => {
  return (
    <div className="alert alert-danger" role="alert">
      { error }
    </div>
  )
}
