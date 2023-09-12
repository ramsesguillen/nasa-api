import React from 'react'
import { currentDate } from '../utils/current-date'

export const Form = ({ form, handleInputChange, handleFilter}) => {
  return (
    <div className='row mt-5 mb-5'>
      <div className="mb-3 col-4">
        <label htmlFor="start_date" className="form-label">Fecha inicial</label>
        <input
          type="date"
          className="form-control"
          value={form.start_date}
          name='start_date'
          onChange={ handleInputChange }
          max={currentDate()}
        />
      </div>
      <div className="mb-3 col-4">
        <label htmlFor="end_date" className="form-label">Fecha final</label>
        <input
          type="date"
          className="form-control"
          name='end_date'
          value={form.end_date}
          onChange={ handleInputChange }
          max={currentDate()}
        />
      </div>
      <div className="mb-3 col-4">
        <div className="d-flex align-items-end h-100">
          <button className='btn btn-primary' onClick={handleFilter}>Buscar</button>
        </div>
      </div>
    </div>
  )
}
