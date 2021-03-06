import React from 'react'
import './all-books.css'
//просто заглушка пока
const AllBooks = () => {
  const data = Array(3)
    .fill(4)
    .map((el) => {
      return (
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Jane Doe</h4>
              <p className="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
              <a href="#" className="btn btn-primary">
                See Profile
              </a>
            </div>
            <img className="card-img-bottom" src="img_avatar6.png" alt="Card image" />
          </div>
        </div>
      )
    })
  return (
    <>
      <div className="allBook">
        <div className="container d-flex flex-wrap justify-content-between">{data}</div>
      </div>
    </>
  )
}

export default AllBooks
