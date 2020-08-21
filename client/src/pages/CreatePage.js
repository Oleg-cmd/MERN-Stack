import React, { useState, useContext } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import {useHistory} from 'react-router-dom'
const CreatePage = () => {
    const auth = useContext(AuthContext)
    const { request } = useHttp()
    const [link, setLink] = useState('')

    const history = useHistory()
    
    const pressHandler = async event => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/link/generate', 'POST', { from: link }, {
                    Authorization: `Bearer ${auth.token}`
                })
                console.log(data)
                //shistory.push(`/detail/${data.link._id}`)

            } catch (e) {}
        }
    }
    return (
        <div className="row">
            <div className="col s8 offset-s2" style={{ paddingTop: "2rem" }}>
                <div className="input-field">
                    <input
                        placeholder="Вставьте ссылку"
                        id="link"
                        type="text"
                        onChange={e => setLink(e.target.value)}
                        autoFocus
                        value={link}
                        onKeyPress={pressHandler} />
                    <label htmlFor="link">Введите ссылку</label>
                </div>
            </div>
        </div>
    )
}

export default CreatePage