import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/actions/userActions'

function UserInfo(isLogin){
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    const userName = user.username
    const [userFirstName, setUserFirstName] = useState(user.firstName)
    const [userLastName, setUserLastName] = useState(user.lastName)
    const [userGender, setUserGender] = useState(user.gender)
    const [userEmail, setUserEmail] = useState(user.email)

    useEffect(()=> {
        if(!isLogin.isLogin){
            navigate(`/login`)
        }
        
        
    },
    // eslint-disable-next-line
    [isLogin])

    const handleSave = () => {
        dispatch(login({
            ...user,
            firstName:userFirstName,
            lastName:userLastName,
            gender:userGender,
            email:userEmail
        }))
        alert('Thay đổi thông tin thành công')
    }

    return (
        <div className='grid wide'>
            <div className="row sm-gutter app__content">
                <div className="col l-12 m-12 c-12">
                    <div className='user-container'>
                        <div className='user-card'>
                            <div className='user-avatar'>
                                <img src={user.image} alt='pic' className='user-avatar__img' />
                            </div>
                            <div className='user-info'>

                                <div className='user-info__datarow'>
                                    <div className='user-info__title'>
                                        Username: 
                                    </div>
                                    <div className='user-info__value'>
                                        {userName}
                                    </div>
                                </div>

                                <div className='user-info__datarow'>
                                    <div className='user-info__title'>
                                        First name: 
                                    </div>
                                    <div className='user-info__value'>
                                        <input type="text" name="name" id='name' className='method-content__address-number form-control' 
                                        value={userFirstName}
                                        onChange={(e)=>setUserFirstName(e.target.value)}/>
                                        {/* {userFirstName} */}
                                    </div>
                                </div>

                                <div className='user-info__datarow'>
                                    <div className='user-info__title'>
                                        Last name: 
                                    </div>
                                    <div className='user-info__value'>
                                        <input type="text" name="name" id='name' className='method-content__address-number form-control' 
                                        value={userLastName}
                                        onChange={(e)=>setUserLastName(e.target.value)}/>
                                    </div>
                                </div>

                                <div className='user-info__datarow'>
                                    <div className='user-info__title'>
                                        Gender: 
                                    </div>
                                    <div className='user-info__value'>
                                        <input type="radio" id="male" name="gender" value="male" defaultChecked={userGender === 'male'}  onClick={()=>setUserGender('male')} />
                                        <label htmlFor="male">Male</label><br/>
                                        <input type="radio" id="female" name="gender" value="female" defaultChecked={userGender === 'female'}  onClick={()=>setUserGender('female')} />
                                        <label htmlFor="female">Female</label><br/>
                                        <input type="radio" id="other" name="gender" value="other" defaultChecked={userGender === 'other'}  onClick={()=>setUserGender('other')} />
                                        <label htmlFor="other">Other</label>
                                    </div>
                                </div>

                                <div className='user-info__datarow'>
                                    <div className='user-info__title'>
                                        Email: 
                                    </div>
                                    <div className='user-info__value'>
                                        <input type="text" name="name" id='name' className='method-content__address-number form-control' 
                                        value={userEmail}
                                        onChange={(e)=>setUserEmail(e.target.value)}/>
                                    </div>
                                </div>

                                
                            </div>
                            <div className='infoChange-btn' onClick={()=> handleSave()}>Save</div>

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo