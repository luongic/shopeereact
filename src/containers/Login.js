import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Validator from "./Validator"

import { login } from '../redux/actions/userActions'
import { useDispatch } from "react-redux"


function Login () {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLeft, setIsleft] = useState(false)
    const [hiddenLogin, setHiddenLogin] = useState(true)
    const [hiddenSignup, setHiddenSignup] = useState(true)
    const [hiddenRepeat, setHiddenRepeat] = useState(true)

    function loginFunc(username, password){
        
        const fetchData = async () =>{
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    
                    username: username,
                    password: password,
                })
            })
            .then(res => res.json())
            .catch((err)=>{
                console.log("Fetch Data Err",err)
            })

            if(response.token){
                dispatch(login(response))
                alert('Đăng nhập thành công')
                navigate('/')
            }
            else{
                alert('Sai tài khoản hoặc mật khẩu')

            }

            }
            
            fetchData()
    }


    useEffect(()=>{
        Validator({
            form: '#form-2',
            formGroupSelector: '.form-group',
            errorSelector: '.form-message',
            rules: [
                Validator.isRequired('#email', 'Vui lòng nhập email'),
                // Validator.isEmail('#email'),
                Validator.isRequired('#password', 'Vui lòng nhập mật khẩu'),
                Validator.minLength('#password', 6),
            ],
            onSubmit: function (data) {
                loginFunc(data.email, data.password)
            }
        });
    
        Validator({
            form: '#form-1',
            formGroupSelector: '.form-group',
            errorSelector: '.form-message',
            rules: [
              Validator.isRequired('#name', 'Vui lòng nhập tên đầy đủ của bạn'),
              Validator.isRequired('#birthday', 'Chọn ngày sinh'),
              Validator.isOver16('#birthday'),
              Validator.isRequired('#phone', 'Vui lòng nhập SĐT'),
              Validator.isPhone('#phone'),
              Validator.isEmail('#email'),
              Validator.minLength('#password', 6),
              Validator.isRequired('#password_confirmation'),
              Validator.isConfirmed('#password_confirmation', function () {
                return document.querySelector('#form-1 #password').value;
              }, 'Mật khẩu không khớp')
            ],
            onSubmit: function (data) {

                setIsleft(false)
            }
        });// eslint-disable-next-line
    }, [])

    return <div className="app__container">
                <div className="grid wide">
                    <div className="row sm-gutter app__content">

                    <div className="col l-12 m-12 c-12">
                        
                    <div className="login ">

                        <div className='login-container'>

                            <div className={isLeft ? 'login-login isLeft' : 'login-login '}>
                                <div className="login__heading">ĐĂNG NHẬP</div>
                                <div className="login__content">

                                    <form action="" method="POST" className="form" id="form-2" >

                                        <div className='login__content-input form-group' >
                                            <div className='login__content-label'>Tài khoản: * <span className ="form-message"></span></div>
                                            <input type="text" name="email" id='email' className='method-content__address-number form-control' placeholder=''/>
                                        </div>

                                        <div className='login__content-input form-group' >
                                            <div className='login__content-label'>Mật khẩu: * <span className ="form-message"></span></div>
                                            <input type={hiddenLogin ? 'password' : 'text'} name="password" id='password' className='method-content__address-number form-control' placeholder=''/>
                                            <div className="login__content-hiden" onClick={() => setHiddenLogin(!hiddenLogin)}>
                                                <i className={hiddenLogin ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'} ></i>
                                            </div>
                                        </div>

                                        <div className='login__content-passwordoption' >
                                            <div className="login__content-passwordsave">
                                                <div className="login__content-passwordsave-checkbox">
                                                    <input type="checkbox" id="savepass" name="savepass"/>
                                                </div>
                                                <label htmlFor='savepass' className="login__content-passwordoption-text">Lưu mật khẩu</label>
                                            </div>
                                            <div className="login__content-forgotpass">
                                                <div className="login__content-passwordoption-text">Quên mật khẩu ?</div>
                                            </div>
                                        </div>

                                        <button className="login__content-btn form-submit" type="submit">Đăng nhập</button>

                                    </form>

                                </div>

                                <div className="login__bottom">
                                    <div >Bạn chưa có tài khoản ?</div>
                                    <div className="signup__link" onClick={() => setIsleft(!(isLeft))} >Đăng ký ngay</div>
                                </div>
                                <div className="login__given"> username: kminchelle </div>
                                <div className="login__given"> password: 0lelplR </div>
                                <div className="login__given">
                                    Another account here: 
                                    <a href="https://dummyjson.com/users" target="_blank" rel="noopener noreferrer">
                                    [ https://dummyjson.com/users ]
                                    </a> 
                                </div>
                            </div>

                            <div className={isLeft ? 'login-signup' : 'login-signup  isLeft'}>
                                <div className="login__heading">ĐĂNG KÝ THÀNH VIÊN</div>
                                <div className="login__content">

                                    <form action="" method="POST" className="form" id="form-1">
                                        <div className='login__content-input form-group' >
                                            <div className='login__content-label'>Tên: * <span className ="form-message"></span> </div> 
                                            <input type="text" id='name' name="fullname" className='method-content__address-number form-control' placeholder=''/>
                                        </div>

                                        <div className='login__content-input-2' >
                                            <div className="login__content-input-wrap form-group" >
                                                <div className='login__content-label'>Ngày sinh: * <span className ="form-message"></span> </div> 
                                                <input type="date" name="birtday" id='birthday' className='method-content__address-number form-control' placeholder=''/>
                                            </div>

                                            <div className="login__content-input-wrap" >
                                                <div className='login__content-label'>Giới tính: * </div>
                                                {/* <input type="text" id='gender' className='method-content__address-number form-control' placeholder=''/> */}
                                                <select name="gender" className='login__content-input-selected' defaultValue={'male'}>
                                                    <option value="male">Nam</option>
                                                    <option value="female">Nữ</option>
                                                </select>
                                            </div>
                                            
                                        </div>

                                        <div className='login__content-input-2' >
                                            <div className="login__content-input-wrap form-group" >
                                                <div className='login__content-label'>Điện thoại: * <span className ="form-message"></span> </div> 
                                                <input type="text" id='phone' name="phone" className='method-content__address-number form-control' placeholder=''/>
                                            </div>

                                            <div className="login__content-input-wrap form-group" >
                                                <div className='login__content-label'>Email: * <span className ="form-message"></span></div>
                                                <input type="text" id='email' name="email" className='method-content__address-number form-control' placeholder=''/>
                                            </div>
                                            
                                        </div>

                                        <div className='login__content-input form-group' >
                                            <div className='login__content-label'>Mật khẩu: * <span className ="form-message"></span></div>
                                            <input type={hiddenSignup ? 'password' : 'text'} id='password' name="password" className='method-content__address-number form-control' placeholder=''/>
                                            <div className="login__content-hiden" onClick={() => setHiddenSignup(!hiddenSignup)}>
                                                <i className={hiddenSignup ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'} ></i>
                                            </div>
                                        </div>

                                        <div className='login__content-input form-group' >
                                            <div className='login__content-label'>Nhập lại mật khẩu: * <span className ="form-message"></span></div>
                                            <input type={hiddenRepeat ? 'password' : 'text'} id='password_confirmation' className='method-content__address-number form-control' placeholder=''/>
                                            <div className="login__content-hiden" onClick={() => setHiddenRepeat(!hiddenRepeat)}>
                                                <i className={hiddenRepeat ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'} ></i>
                                            </div>
                                        </div>


                                        <button className="login__content-btn form-submit">Đăng ký</button>
                                    </form>

                                </div>
                                <div className="login__bottom">
                                    <div >Bạn đã có tài khoản ?</div>
                                    <div className="signup__link" onClick={() => setIsleft(!(isLeft))} >Đăng nhập ngay</div>
                                </div>
                            </div>

                            
                        </div>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
}

export default Login