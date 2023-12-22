// React
import React, { useEffect, useState } from "react";

// Axios
import axios from "axios";

// i18n
import { withTranslation } from "react-i18next";

// Redirect
import { useNavigate, useParams } from "react-router-dom";

// FUNCTION CREATE
function RegisterUpdate({ t, i18n, props }) {
  // REDIRECT
  let navigate = useNavigate();

  // STATE  Object
  const [registerUpdateState, setRegisterUpdateState] = useState([]);

  // STATE  ID
  const [updateId, setUpdateId] = useState(null);

  // PARAMS ID:
  // Dikkat: routerdan yazıldığı gibi aldım:
  // Örnek:  <Route path={"/register/update/:id"} element={<RegisterUpdate />} />
  let { id } = useParams();

  // STATE
  // Dikkat: username,surname,email,password mutlaka api attributes aynı olmalıdır.
  // Dikkat: username,surname,email,password mutlaka input içindeki id ve name bu isimlerde olmalıdır.
  const [username, setUsername] = useState(null);
  const [surname, setSurname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  // Çoklu isteği kapatmak
  const [multipleRequest, setMultipleRequest] = useState(false);

  // spinner
  const [spinner, setSpinner] = useState(false);

  // Is Read
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    updateFindById();
  }, [username]);

  // FIND BY ID
  const updateFindById = () => {
    // 1.YOL (ID)
    // Local Storage
    // setUpdateId(localStorage.getItem('updateId'))

    // 2.YOL (ID)
    // useParams()

    // useParams
    axios
      .get(persistMockApiLink().concat(`/${id}`)) //${updateId}
      .then((response) => {
        console.log(response.data);
        const { username, surname, email, password } = response.data;
        setUsername(username);
        setSurname(surname);
        setEmail(email);
        setPassword(password);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // FUNCTION
  // Persist Mock api Link
  const persistMockApiLink = () => {
    return "https://657ae49d394ca9e4af12fae5.mockapi.io/api/v1/blog/register";
  };

  // registerNameOnChange
  const registerUsernameOnChange = (event) => {
    const { name, value } = event.target;
    setUsername(value);
  };

  // registerSurnameOnChange
  const registerSurnameOnChange = (event) => {
    const { name, value } = event.target;
    setSurname(value);
  };

  // registerEmailOnChange
  const registerEmailOnChange = (event) => {
    const { name, value } = event.target;
    setEmail(value);
  };
  // registerPasswordOnChange
  const registerPasswordOnChange = (event) => {
    const { name, value } = event.target;
    setPassword(value);
  };

  // IS READ
  const registerIsReadOnChange = (event) => {
    //alert(event.target.checked)
    setIsRead(event.target.checked);
  };

  // CLEANER
  const registerCleaner = () => {
    setUsername(null);
    setSurname(null);
    setEmail(null);
    setPassword(null);
  };

  // ON SUBMIT EVENT
  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  // UPDATE
  const registerUpdate = async (event) => {
    // Çoklu isteğe izin ver
    setMultipleRequest(true);

    //  Spinner
    setSpinner(true);

    // API
    try {
      const response = await axios.put(persistMockApiLink().concat(`/${id}`), {
        username,
        surname,
        email,
        password,
      });
      //console.log(response)

      if (response.status == 200) {
        // Çoklu isteğe izin ver
        setMultipleRequest(true);

        //  Spinner
        setSpinner(false);

        // Alert
        alert("Kayıt Güncellendi.");

        // Navigate
        navigate("/register/list");
      }
    } catch (err) {
      console.error(err);

      // Çoklu isteğe izin ver
      setMultipleRequest(false);

      //  Spinner
      setSpinner(true);
    }
  };

  // RETURN
  return (
    <React.Fragment>
      <h1 className="text-center text-primary display-5 mb-5">
        {t("register_update")}
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-2 col-lg-2"></div>

          {/* FORM */}
          <div className="col-xs-12 col-md-8 col-lg-8  w-50" style={{marginLeft:"100px"}}>
            <form onSubmit={onSubmitForm}>
              {/* USERNAME */}
              <input
                className="form-control me-2 mb-3"
                type="text"
                id="username"
                name="username"
                title={t("username")}
                placeholder={t("username")}
                onChange={registerUsernameOnChange}
                required={true}
                value={username}
              />

              {/* SURNAME */}
              <input
                className="form-control me-2 mb-3"
                type="text"
                id="surname"
                name="surname"
                title={t("surname")}
                placeholder={t("surname")}
                // onChange={(event) => { setSurname(event.target.value) }}
                onChange={registerSurnameOnChange}
                required={true}
                value={surname}
              />

              {/* EMAİL */}
              <input
                className="form-control me-2 mb-3"
                type="email"
                id="email"
                name="email"
                title={t("email")}
                placeholder={t("email")}
                // onChange={(event) => { setEmail(event.target.value) }}
                onChange={registerEmailOnChange}
                required={true}
                value={email}
              />

              {/* PASSWORD */}
              <input
                className="form-control me-2 mb-3"
                type="password"
                id="password"
                name="password"
                title={t("password")}
                placeholder={t("password")}
                // onChange={(event) => { setPassword(event.target.value) }}
                onChange={registerPasswordOnChange}
                required={true}
                value={password}
              />

              {/* RESET-SUBMIT */}
              <button
                type="reset"
                //className="btn btn-outline-danger mt-2 me-2 mb-3"
                className="btn btn-danger mt-5 me-2 mb-5" 
                onClick={registerCleaner}
              >
                {t("cleaner")}
              </button>

              <button
                type="submit"
                // className="btn btn-outline-primary mt-2 mb-3"
                className="btn btn-primary mt-5 mb-5 "
                onClick={registerUpdate}
                disabled={multipleRequest || !isRead}
              >
                {/* {
                  spinner ? <div class="spinner-border text-warning" style={{ fontSize: "0.5rem" }} role="status"> </div> : ''
                } */}

                {spinner && (
                  <div
                    class="spinner-border text-warning "
                    style={{ fontSize: "0.5rem" }}
                    role="status"
                  >
                    {" "}
                  </div>
                )}
                {t("updated")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  ); //end return
} //end RegisterUpdate

// EXPORT
export default withTranslation()(RegisterUpdate);
