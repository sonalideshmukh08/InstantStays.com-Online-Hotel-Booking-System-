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
import { red } from '@mui/material/colors'

const ForgotPassword = () => {

    const navigate = useNavigate()

    const [data, setdata] = useState({
        email: '',
        question: '',
        answer: ''
    })
    const [recoverData, setRecoverData] = useState({})

    const [loading, setLoading] = useState(false)
    const [showOtherInput, setShowOtherInput] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()
        if (data.answer.toLowerCase() === recoverData.Answer.toLowerCase()) {
            document.getElementById('password').innerHTML = "Your Password is:" + window.atob(recoverData.Password)
        } else {
            toast.error("Please enter the correct answer." , {
                autoClose: 5000,
                pauseOnHover: true
            })
            document.getElementById('password').innerHTML = ''
        }
    }

    const checkEmail = (e) => {
        UsersService.forgotPassword({email: data.email}).then(res => {
            if (res.data.length === 1) {
                setShowOtherInput(true)
                setRecoverData(res.data[0])
                setdata({...data, question:res.data[0].SecurityQuestion})
            } else {
                toast.error("Email not found." , {
                    autoClose: 5000,
                    pauseOnHover: true
                })
            }
        })
    }

    return (
        <PageContainer>
            <AuthContainer>
                {!loading ? (
                    <FormContainer>
                        <form className="form-box" onSubmit={onSubmit}>
                            <FormTitle style={{ marginBottom: '20px' }}>Forgot Password</FormTitle>
                            <FormContainer2>
                                <Input style={{ margin: '10px 0' }}
                                    placeholder="Email"
                                    value={data.email}
                                    onBlur={checkEmail}
                                    onChange={(e) => setdata({ ...data, email: e.target.value })}></Input>
                                {showOtherInput && <><Input style={{ margin: '10px 0' }}
                                    placeholder="Question"
                                    value={data.question}
                                    onChange={(e) => setdata({ ...data, question: e.target.value })}></Input>
                                <Input style={{ margin: '10px 0' }}
                                    placeholder="Answer"
                                    type="Answer"
                                    value={data.answer}
                                    onChange={(e) => setdata({ ...data, answer: e.target.value })}></Input></>}
                                
                                <span id="password" style={{color:"red", textAlign:'center'}}></span>
                            </FormContainer2>
                            <Link to="/login"><label style={{float:'right', padding:'10px 0px'}}>Back to login</label></Link>
                            <ButtonsContainer>
                                <FormButton type="submit">Submit</FormButton>
                            </ButtonsContainer>
                        </form>
                    </FormContainer>
                ) : <Loader />}
            </AuthContainer>
        </PageContainer>
    )
}

export default ForgotPassword
