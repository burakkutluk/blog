// Axios
import axios from 'axios';

// React
import React, { useEffect, useState } from 'react'

// i18n
import { withTranslation } from 'react-i18next'

// Router
import { useNavigate, useParams } from 'react-router-dom';


// FUNCTION VIEW
function RegisterView({ t, i18n, props }) {

  // REDIRECT
  let navigate = useNavigate();

  // STATE  Object
  const [registerViewState, setRegisterViewState] = useState([])

  // STATE  ID
  const [viewId, setViewId] = useState(null);

  // PARAMS ID:
  // Dikkat: routerdan yazıldığı gibi aldım:
  // Örnek:  <Route path={ `/register/view/:id`} element={<RegisterView />} />
  let { id } = useParams();

  // USE EFFECT 
  useEffect(() => {
    viewFindById()
  })

  // FIND BY ID
  const viewFindById = () => {
    // 1.YOL (ID)
    // Local Storage
    //setViewId(localStorage.getItem('viewId'))

    // 2.YOL (ID)
    // useParams()

    // useParams
    axios.get(persistMockApiLink().concat(`/${viewId}`)) //${viewId}
      .then((response) => {
        console.log(response.data);
        setRegisterViewState(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  // FUNCTION
  // Persist Mock api Link
  const persistMockApiLink = () => {
    return "https://657ae49d394ca9e4af12fae5.mockapi.io/api/v1/blog/register"
  }

  // RETURN
  return (
    <React.Fragment>
      <div className='container text-center mt-3 mb-3'>
        <div className='row'>
          {/* Card */}
          <div className="card col-xs-12  col-md-5 col-xl-4 mx-auto">
            {/* Card image */}
            <div className="view overlay">
              <img
                className="card-img-top"
                src="data:image/png;base64,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"
                alt="Card image cap" 
                style={{height:"300px"}}
              />
              <a href="#!">
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* Card content */}
            <div className="card-body">
              {/* Title */}

              <h4 className="card-title">{registerViewState.id}</h4>
              {/* Text */}
              <p className="card-text">

                {registerViewState.username}
                <br />
                {registerViewState.surname}
                <br />
                {registerViewState.email}
                <br />
                {registerViewState.password}
              </p>
              {/* Button */}
              <a href="#" className="btn btn-primary">
                Button
              </a>

              <div className="container p-5 pb-0">
                {/* Section: Social media */}
                <section className="mb-4">
                  {/* Google */}
                  <a
                    data-mdb-ripple-init=""
                    className="btn text-white btn-floating m-1"
                    style={{ backgroundColor: "#dd4b39" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-google" />
                  </a>
                  {/* Linkedin */}
                  <a
                    data-mdb-ripple-init=""
                    className="btn text-white btn-floating m-1"
                    style={{ backgroundColor: "#0082ca" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  {/* Github */}
                  <a
                    data-mdb-ripple-init=""
                    className="btn text-white btn-floating m-1"
                    style={{ backgroundColor: "#333333" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-github rounded" />
                  </a>
                </section>
                {/* Section: Social media */}
              </div>
            </div>
          </div>
          {/* Card */}
        </div>
      </div>


    </React.Fragment>
  ) //end return
} //end function


// EXPORT
export default withTranslation()(RegisterView) 