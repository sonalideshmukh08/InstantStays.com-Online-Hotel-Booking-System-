import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../utils/Context';
import { AuthContainer, ButtonsContainer, FormContainer, FormContainer2 } from './ModuleStyles';
import { FormButton, FormTitle, Input, InputContainer } from '../../components/GlobalStyles/FormStyles';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../../components/GlobalStyles/PageStyles';
import Loader from "../../components/Loaders/Loader.js"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as UserService from "../../services/UsersService";
import { isEmailValid } from '../../services/UtilityService';

const Register = () => {

    const navigate = useNavigate()

    const [info, setInfo] = useState({
        name: '',
        isManager : false,
        email: '',
        password: '',
        question: '',
        answer: ''
    })

    const [loading, setLoading] = useState(false)

    const register = (e) => {
        e.preventDefault()
        if (!isEmailValid(info.email)) {
            toast.warning("Please Enter valid email." , {
                autoClose: 5000,
                pauseOnHover: true
            })
            return
        }
        setLoading(true)
        info.password = window.btoa(info.password)
        UserService.createUser(info).then(result => {
          toast.success("User created successfully! Please login to continue." , {
            autoClose: 5000,
            pauseOnHover: true
          })
          setLoading(false)
          navigate("/login")
        }).catch(err => {
          toast.error("Failed to register please try again." , {
            autoClose: 5000,
            pauseOnHover: true
          })
        })
    }

    return (
        <PageContainer>
            <AuthContainer>
                {!loading ? (
                    <FormContainer>
                        <form className="form-box" onSubmit={register}>
                            <FormTitle style={{ marginBottom: '20px' }}>Register</FormTitle>
                            <Input style={{ margin: '10px 0' }}
                                placeholder="Name"
                                value={info.name}
                                onChange={(e) => setInfo({ ...info, name: e.target.value })}></Input>
                            <Input style={{ margin: '10px 0' }}
                                placeholder="Email"
                                value={info.email}
                                onChange={(e) => setInfo({ ...info, email: e.target.value })}></Input>
                            <Input style={{ margin: '10px 0' }}
                                placeholder="Password"
                                type="password"
                                value={info.password}
                                onChange={(e) => setInfo({ ...info, password: e.target.value })}></Input>
                            <Input style={{ margin: '10px 0' }}
                                placeholder="Security Question"
                                type="text"
                                value={info.question}
                                onChange={(e) => setInfo({ ...info, question: e.target.value })}></Input>
                            <Input style={{ margin: '10px 0' }}
                                placeholder="Answer"
                                type="answer"
                                value={info.answer}
                                onChange={(e) => setInfo({ ...info, answer: e.target.value })}></Input>

                            <FormContainer2>
                                      <input style={{ margin: '10px 10px', width: '20px', height: '20px' }}
                                          type="checkbox"
                                          value={info.isManager}
                                          onChange={(e) => setInfo({ ...info, isManager: e.target.checked })} />
                                      <label>Are you a manager ?</label>
                            </FormContainer2>
                            <ButtonsContainer>
                              <FormButton type="submit">Register</FormButton>
                                <FormButton style={{ border: '2px solid #ff6e29', background: "#fff", color: "#ff6e29" }}
                                    onClick={() => navigate('/login')}
                                >Log In</FormButton>
                            </ButtonsContainer>
                        </form>
                    </FormContainer>
                ) : <Loader />}
            </AuthContainer>
        </PageContainer>
    )
}

export default Register
