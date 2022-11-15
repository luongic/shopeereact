import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'




function UserInfo(isLogin){
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.user)

    const [userName, setUsername] = useState(user.username)
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

    console.dir(user)

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
                                        <input type="text" name="name" id='name' className='method-content__address-number form-control' value={userFirstName}/>
                                        {/* {userFirstName} */}
                                    </div>
                                </div>

                                <div className='user-info__datarow'>
                                    <div className='user-info__title'>
                                        Last name: 
                                    </div>
                                    <div className='user-info__value'>
                                        <input type="text" name="name" id='name' className='method-content__address-number form-control' value={userLastName}/>
                                    </div>
                                </div>

                                <div className='user-info__datarow'>
                                    <div className='user-info__title'>
                                        Gender: 
                                    </div>
                                    <div className='user-info__value'>
                                        <input type="radio" id="male" name="gender" value="male" />
                                        <label for="male">Male</label><br/>
                                        <input type="radio" id="female" name="gender" value="female" />
                                        <label for="female">Female</label><br/>
                                        <input type="radio" id="other" name="gender" value="other"/>
                                        <label for="other">Other</label>
                                    </div>
                                </div>

                                <div className='user-info__datarow'>
                                    <div className='user-info__title'>
                                        Email: 
                                    </div>
                                    <div className='user-info__value'>
                                        <input type="text" name="name" id='name' className='method-content__address-number form-control' value={userEmail}/>
                                    </div>
                                </div>

                                
                            </div>
                            <div className='infoChange-btn'>Save</div>

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo