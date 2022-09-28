import React, { useContext, useState, useEffect } from 'react'
import { FormButton, FormTitle, Input } from '../../components/GlobalStyles/FormStyles'
import { GlobalContext } from '../../utils/Context'
import { AuthContainer, ButtonsContainer, FormContainer, FormContainer2 } from './ModuleStyles'
import { Link, useNavigate } from 'react-router-dom'
import { PageContainer } from '../../components/GlobalStyles/PageStyles'
import Loader from "../../components/Loaders/Loader.js"
import { toast } from 'react-toastify'
import * as UsersService from '../../services/UsersService'
import { isEmailValid } from '../../services/UtilityService'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
const Login = () => {

    const navigate = useNavigate()

    const [data, setdata] = useState({
        email: '',
        password: '',
        isManager: false
    })

    const [loading, setLoading] = useState(false)

    const userLogin = async (e) => {
        e.preventDefault()
        if (!validateCaptcha(document.getElementById("captcha").value)) {
            toast.error("Invalid Captcha!" , {
                autoClose: 5000,
                pauseOnHover: true
            })
            return
        }
        if (!isEmailValid(data.email)) {
            toast.warning("Please Enter valid email." , {
                autoClose: 5000,
                pauseOnHover: true
            })
            return  
        }
        UsersService.loggedInUser(data.email, data.password, data.isManager).then(result => {
          toast.success("LoginSuccess" , {
            autoClose: 5000,
            pauseOnHover: true
          })
          const user = result.data[0]
          localStorage.setItem('user', JSON.stringify(user))
          user.isManager
          ? window.location.href = '/dashboard'
          : window.location.href = '/'

        }).catch(err => {
          toast.error("Incorrect email and password" , {
            autoClose: 5000,
            pauseOnHover: true
          })
        })
    }

    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, [])

    return (
        <PageContainer>
            <AuthContainer>
                {!loading ? (
                    <FormContainer>
                        <form className="form-box" onSubmit={userLogin}>
                            <FormTitle style={{ marginBottom: '20px' }}>Log In</FormTitle>
                            <Input style={{ margin: '10px 0' }}
                                placeholder="Email"
                                value={data.email}
                                onChange={(e) => setdata({ ...data, email: e.target.value })}></Input>
                            <Input style={{ margin: '10px 0' }}
                                placeholder="Password"
                                type="password"
                                value={data.password}
                                onChange={(e) => setdata({ ...data, password: e.target.value })}></Input>
                            <FormContainer2>
                              <input style={{ margin: '10px 10px', width: '20px', height: '20px' }}
                                  type="checkbox"
                                  value={data.isManager}
                                  onChange={(e) => setdata({ ...data, isManager: e.target.checked })} />
                              <label>Are you a manager ?</label>
                              <Input style={{ margin: '10px 0' }}
                                placeholder="Enter the captcha"
                                type="text"
                                id="captcha"
                                 />
                              <LoadCanvasTemplate />
                            </FormContainer2>
                            <Link to="/forgotPassword"><label style={{float:'right', padding:'10px 0px'}}>Forgot Password ?</label></Link>
                            <ButtonsContainer>
                                <FormButton type="submit">Log In</FormButton>
                                <FormButton style={{ border: '2px solid #ff6e29', background: "#fff", color: "#ff6e29" }}
                                    onClick={() => navigate('/register')}
                                >Register</FormButton>
                            </ButtonsContainer>
                            
                        </form>
                    </FormContainer>
                ) : <Loader />}
            </AuthContainer>
        </PageContainer>
    )
}

export default Login
