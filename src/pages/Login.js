import React, { useContext, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'

export default function Login({ loginerr }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [usernameCondition, setUsernameCondition] = useState(true)
    const [passwordCondition, setPasswordCondition] = useState(true)
    const { authenticated, setAuthenticated } = useContext(AuthContext)

    const handleUsername = (e) => {
        setUsername(e.target.value)

    }
    const handlePassword = (e) => {
        setPassword(e.target.value)

    }

    const handleLogin = (e) => {
        e.preventDefault()
        if (username.length < 6) {
            setUsernameCondition(false)
        } else if (username.length >= 6) {
            setUsernameCondition(true)
        }
        if (password.length < 8) {
            setPasswordCondition(false)
        } else if (password.length >= 8) {
            setPasswordCondition(true)
        }
        if (usernameCondition && passwordCondition) {
            axios.post('http://localhost:4000/login', { username, password })
                .then((response) => {
                    setAuthenticated(response.status)
                }
                )
                .catch((error) => {
                    if (error.response) {
                        setAuthenticated(error.response.status);
                    }
                });
        }
    }
    return (
        <div className="container">
            <div className="col">
                <div className="row">
                    <form onSubmit={handleLogin}>{authenticated === 404 && <h4 className={`${authenticated === 404 && loginerr}`}>Username or password is incorrect</h4>}
                        <h1 className='my-3 text-info'>Login</h1>
                        <input value={username} style={{ border: `${usernameCondition ? "" : "1px solid red"}` }} type="text" name="" className='form-control mt-2' placeholder='Username*' onChange={handleUsername} autoComplete="on" />
                        <small className='m-0'>{!usernameCondition && "Username not shorter than 6 letter"}</small>
                        <input value={password} style={{ border: `${passwordCondition ? "" : "1px solid red"}` }} type="password" name="" className='form-control mt-2' placeholder='password*' onChange={handlePassword} autoComplete="on" />
                        <small className='m-0'>{!passwordCondition && "Username not shorter than 6 letter"}</small>
                        <button type="submit" className='btn btn-info px-4 my-3'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
