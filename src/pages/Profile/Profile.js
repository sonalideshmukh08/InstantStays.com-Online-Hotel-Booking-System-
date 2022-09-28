import React, { useContext, useEffect, useState } from 'react'
import { PageContainer, Text } from '../../components/GlobalStyles/PageStyles'
import { GlobalContext } from '../../utils/Context'
import styled from 'styled-components'
import { FormButton, Input } from '../../components/GlobalStyles/FormStyles'
import { getEasyDate } from '../../utils/utilFunctions'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HotelModal from '../../components/Modals/HotelModal'
import { toast } from 'react-toastify'
import * as UsersService from '../../services/UsersService'
import { isEmailValid } from '../../services/UtilityService'
const Fields = styled.div`
    margin-bottom: 16px;
    width: 100%;
    &.flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .first{
            margin-right: 16px
        }
    }
    label{
        display: block;
        margin-bottom: 10px
    }
`

const Badge = styled.div`
    position: absolute;
    top: -20px;
    right: -30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    background: #4158ff;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: #fff;
`

const Profile = () => {

    const [showBtn, setShowBtn] = useState(false)
    const [curUser, setCurUser] = useState()
    const [isUpdatePassword, setUpdatePassword] = useState(false)

    const updateUser = () => { 
        if (curUser.email && !isEmailValid(curUser.email)) {
            toast.warning("Please Enter valid email.", {
                autoClose: 5000,
                pauseOnHover: true
            })
            return
        }
        if (isUpdatePassword && window.btoa(curUser.oldPassword) !== curUser.password) {
            toast.warning("Please enter correct current password.")
            return
        }
        if (isUpdatePassword && !curUser.newPassword && !curUser.confirmPassword) {
            toast.warning("Please Enter the new password.")
            return
        }
        if (isUpdatePassword && curUser.newPassword !== curUser.confirmPassword) {
            toast.warning("Password does not match.")
            return
        }
        const obj = {}
        if (curUser.email) obj['email'] = curUser.email
        if (isUpdatePassword && curUser.password) obj['password'] = curUser.confirmPassword
        if (curUser.name) obj['name'] = curUser.name
        obj['id'] = curUser.id

        UsersService.updatUser(obj).then(result => {
            toast.success("User updated successfully!")
            localStorage.setItem("user", JSON.stringify(result.data[0]))
        }).catch(err => {
            toast.error("Failed to update the user")
        })

    }

    const updatePassword = () => {
        setUpdatePassword(!isUpdatePassword)
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        setCurUser(user)
    }, [])

    return (
        <PageContainer style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>

            <Text style={{ position: 'relative', width: 'fit-content' }}>
                Hello {curUser?.name}
                {curUser?.isManager && (<Badge>M</Badge>)}
            </Text>
            <Text className='small'>Type: {curUser?.isManager ? 'Hotel Manager' : curUser?.isAdmin ? 'Admin' : 'User'}</Text>

            <Fields className='flex'>
                <Fields className='first'>
                    <label>Name</label>
                    <Input value={curUser?.name}
                        onChange={(e) => setCurUser({ ...curUser, name: e.target.value })}></Input>
                </Fields>
            </Fields>

            <Fields className='flex'>
                <Fields className='first'>
                    <label>E-Mail</label>
                    <Input value={curUser?.email} type="email"
                        onChange={(e) => setCurUser({ ...curUser, email: e.target.value })}></Input>
                </Fields>
            </Fields>
            {isUpdatePassword && <div>
                <Fields className='flex'>
                    <Fields className='first'>
                        <label>Old Password</label>
                        <Input value={curUser?.oldPassword} type="password"
                            onChange={(e) => setCurUser({ ...curUser, oldPassword: e.target.value })}></Input>
                    </Fields>
                </Fields>

                <Fields className='flex'>
                    <Fields className='first'>
                        <label>New Password</label>
                        <Input value={curUser?.newPassword} type="password"
                            onChange={(e) => setCurUser({ ...curUser, newPassword: e.target.value })}></Input>
                    </Fields>
                </Fields>
                <Fields className='flex'>
                    <Fields className='first'>
                        <label>Confirm Password</label>
                        <Input value={curUser?.confirmPassword} type="password"
                            onChange={(e) => setCurUser({ ...curUser, confirmPassword: e.target.value })}></Input>
                    </Fields>
                </Fields>
            </div>}
            <Fields className='flex'>
                <FormButton onClick={updatePassword}>{`${isUpdatePassword ? "Don't want to update password" : 'Update Password'}`}</FormButton>
                <FormButton style={{ marginLeft: 'auto' }} onClick={updateUser}>Update & Save</FormButton>
            </Fields>
        </PageContainer>
    )
}

export default Profile
