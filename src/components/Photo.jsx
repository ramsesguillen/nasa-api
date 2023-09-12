import React from 'react'

export const Photo = ({ data }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={data.url} className="card-img-top" alt={data.title} />
      <div className="card-body">
        <h5 className="card-title">{ data.title }</h5>
        <figcaption class="blockquote-footer mt-2 float-end">
          <cite title="Date">{data.date}</cite>
        </figcaption>
      </div>
    </div>
  )
}
