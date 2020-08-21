import React from 'react'
import {useState, useEffect, useContext} from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

import {AuthContext} from '../context/AuthContext'

const AuthPage = () => {
    const auth = useContext(AuthContext)

    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])


    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async() => {
        try{
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        }catch(e){

        }
    }

    const loginHandler = async() => {
        try{
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
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
                                    onChange={changeHandler}
                                    autoFocus
                                    value={form.email} />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field">
                                <input
                                    placeholder="Введите пароль"
                                    id="password"
                                    type="password"
                                    name="password"
                                    onChange={changeHandler}
                                    autoFocus
                                    value={form.password} />
                                <label htmlFor="password">Пароль</label>
                            </div>

                        </div>

                    </div>
                    <div className="card-action">
                        <button
                         className="btn gray"
                         style={{ marginRight: 10 }}
                         disabled={loading}
                         onClick={loginHandler}
                         
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