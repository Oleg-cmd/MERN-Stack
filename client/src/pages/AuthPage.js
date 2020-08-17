import React from 'react'
import {useState, useEffect} from 'react'
import { useHttp } from '../hooks/http.hook'


const AuthPage = () => {
    const {loading, error, request} = useHttp()

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        
    }, [error]);
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async() =>{
        try{
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log('Data', data)
        }catch(e){

        }
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Сократи Ссылку</h1>
                <div className="card blue lighten-3">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>

                            <div className="input-field">
                                <input
                                    placeholder="Введите email"
                                    id="email"
                                    type="text"
                                    name="email"
                                    onChange={changeHandler} />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field">
                                <input
                                    placeholder="Введите пароль"
                                    id="password"
                                    type="password"
                                    name="password"
                                    onChange={changeHandler} />
                                <label htmlFor="password">Пароль</label>
                            </div>

                        </div>

                    </div>
                    <div className="card-action">
                        <button
                         className="btn gray"
                         style={{ marginRight: 10 }}
                         
                         
                         >Войти</button>
                        <button
                         className="btn blue darken-4"
                         onClick={registerHandler}
                         disabled={loading}
                         >Зарегистрироваться</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AuthPage