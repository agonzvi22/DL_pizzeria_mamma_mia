import { createContext, useState, useEffect } from 'react'
<<<<<<< HEAD
import axios from 'axios'
=======
>>>>>>> abc47f84d94594a30216e748fbf68d10624aec1c

const UserContext = createContext()

const UserProvider = ({ children }) => {
<<<<<<< HEAD
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState(null)
  const [email, setEmail] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    const storedEmail = localStorage.getItem('email')

    if (storedToken && storedEmail) {
      setIsAuthenticated(true)
      setToken(storedToken)
      setEmail(storedEmail)
      getProfile(storedToken) // Obtener el perfil al iniciar sesión
    }
  }, [])

  const getProfile = async (authToken = token) => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/me', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      setUser(response.data) // Guardar el perfil en el estado
    } catch (error) {
      console.error('Error al obtener el perfil:', error)
    }
  }

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        { email, password },
      )

      const { token, email: userEmail } = response.data

      setIsAuthenticated(true)
      setToken(token)
      setEmail(userEmail)

      localStorage.setItem('token', token)
      localStorage.setItem('email', userEmail)
      localStorage.setItem('auth', 'true')

      getProfile(token) // Obtener el perfil después del login

      return true
    } catch (error) {
      console.error('Error durante login:', error)
      return false
    }
  }

  const register = async (email, password) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/register',
        { email, password },
      )

      const { token, email: userEmail } = response.data

      setIsAuthenticated(true)
      setToken(token)
      setEmail(userEmail)

      localStorage.setItem('token', token)
      localStorage.setItem('email', userEmail)
      localStorage.setItem('auth', 'true')

      getProfile(token) // Obtener el perfil después del registro

      return true
    } catch (error) {
      console.error('Error durante registro:', error)
      return false
    }
=======
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  useEffect(() => {
    // Simular que el usuario está logueado por defecto (puede ser `false` si prefieres)
    const storedAuth = localStorage.getItem('auth')
    setIsAuthenticated(storedAuth === 'true')
  }, [])

  const login = () => {
    setIsAuthenticated(true)
    localStorage.setItem('auth', 'true')
>>>>>>> abc47f84d94594a30216e748fbf68d10624aec1c
  }

  const logout = () => {
    setIsAuthenticated(false)
<<<<<<< HEAD
    setToken(null)
    setEmail(null)
    setUser(null) // Limpiar el perfil del usuario

    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('auth')
  }

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        token,
        email,
        user, 
        login,
        register,
        logout,
        getProfile, 
      }}
    >
=======
    localStorage.setItem('auth', 'false')
  }

  return (
    <UserContext.Provider value={{ isAuthenticated, login, logout }}>
>>>>>>> abc47f84d94594a30216e748fbf68d10624aec1c
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }