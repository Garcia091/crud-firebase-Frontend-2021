import React from 'react'

const CardsTaks = () => {


  return (
    <>
      <div className=" row ">
            <div  className="col-md-4 text-center py-1 container">
              <div className="card mt-2 container text-center">
                <div className="card-title text-center container">
                  <h3>title</h3>
                  <img className="text-center container" src="" alt="" width="60px" height="80px" />
                  <span className="badge badge-pill bg-danger ml-2">
                    priority
                  </span>

                </div>

                <div className="card-body">

                  <p>description</p>
                  <p>
                    <mark>responsible</mark>
                  </p>
                </div>
                <div className="card-footer text-center" >

                  <button
                   className="btn btn-warning"
                   >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
     
      </div>

    </>
  )
}

export default CardsTaks
