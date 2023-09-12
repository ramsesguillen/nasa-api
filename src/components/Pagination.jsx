import React from 'react'

export const Pagination = ({ setCurrentPage,  currentPage, recordsPerPage, totalRecords }) => {
  return (
    <div className='float-end'>
      <button
        className='btn btn-success me-4'
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        className='btn btn-success'
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === Math.ceil(totalRecords / recordsPerPage)}
      >
        Next
      </button>
    </div>
  )
}
