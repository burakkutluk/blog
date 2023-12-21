// React
import React, { useEffect, useState } from 'react'

// i18n
import { withTranslation } from 'react-i18next'

// Navigate
import { Link, useNavigate } from 'react-router-dom'

// Axios
import axios from 'axios';

// Function 
function RegisterList({ t, i18n, props }) {

    // REDIRECT
    let navigate = useNavigate();

    // STATE
    let [getMockApi, setMockApi] = useState([]);

    // USE EFFECT 
    useEffect(() => {
        setRefleshAndSetApiList()
    }, []);

    // Persist Mock api Link
    const persistMockApiLink =()=>{
        return "https://657ae49d394ca9e4af12fae5.mockapi.io/api/v1/blog/register"
    }

    // FUNCTION
    // REFLESH AND SET API LIST
    const setRefleshAndSetApiList = () => {
        axios.get(persistMockApiLink())
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log(response.data);
                    setMockApi(response.data);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }; //end setRefleshAndSetApiList

    // DELETE
    const setDeleteMockApi = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            // axios.delete(persistMockApiLink()+`/${id}`)
            axios.delete(`${persistMockApiLink()}/${id}`)
                .then(() => {
                    setRefleshAndSetApiList();
                    // navigate("/register/list")
                })
                .catch((err) => {
                    console.error(err);
                })
        } else {
            window.alert("dont delete")
        }
    }; //end delete


    // setUpdateLocalStorage
    const setUpdateLocalStorage = (id) => {
        localStorage.setItem("updateId", id);
    } //end setUpdateLocalStorage


    // setViewLocalStorage
    const setViewLocalStorage = (id) => {
        localStorage.setItem("viewId", id);
    } //end setViewLocalStorage

    // RETURN
    return (
        <React.Fragment>
            <h1 className='text-center text-primary display-4 mt-5 mb-5 text-uppercase shadow'>{t('register')} List</h1>
            <Link to="/register/create" className='btn btn-primary mb-2'>{t('register')}</Link>

            <div className="table-responsive-md" >
                <table
                    className="table table-primary table-striped table-hover table-bordered"
                >
                    <thead>
                        <tr className="text-center">
                            <th scope="col">ID</th>
                            <th scope="col">{t('username')}</th>
                            <th scope="col">{t('surname')}</th>
                            <th scope="col">{t('email')}</th>
                            <th scope="col">{t('password')}</th>
                            <th scope="col">{t('systemCreatedDate')}</th>
                            <th scope="col">{t('update')}</th>
                            <th scope="col">{t('view')}</th>
                            <th scope="col">{t('delete')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getMockApi.map((item) => {
                                return (
                                    <tr key={item.id} className="text-center">
                                        <td>{item.id}</td>
                                        <td>{item.username}</td>
                                        <td>{item.surname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.password}</td>
                                        <td>{item.systemCreatedDate}</td>
                                        <td>
                                            <Link
                                                onClick={() => setUpdateLocalStorage(item.id)}
                                                to={`/register/update/${item.id}`}>
                                                <i
                                                    style={{ "cursor": "pointer" }}
                                                    className="fa-solid fa-pen-nib text-primary"></i>
                                            </Link>
                                        </td>
                                        <td>
                                            <Link
                                                onClick={() => setViewLocalStorage(item.id)}
                                                to={`/register/view/${item.id}`}>
                                                <i
                                                    style={{ "cursor": "pointer" }}
                                                    className="fa-solid fa-binoculars text-success"></i>
                                            </Link>
                                        </td>
                                        <td>
                                            <i
                                                onClick={() => setDeleteMockApi(item.id)}
                                                style={{ "cursor": "pointer" }}
                                                className="fa-solid fa-trash text-danger ms-3">
                                            </i>
                                        </td>
                                    </tr>

                                )
                            }) //end map
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    ) //end return
}//end function

// Export 
export default withTranslation()(RegisterList) 