// import jwt from 'jsonwebtoken'
import express from 'express'

import { createToken} from '../utils/token-utils.js'
import {getUserByUsername } from '../models/user-queries.js'
import { compareHash } from '../utils/crypto-utils.js'

const router = new express.Router()

const USERNAME = 'marie'

const user = {
  id: 1,
  username: USERNAME,
  password: '123456'
}

// to login
router.post('/token', (req, res) => {
  // const authorizedLogin = process.env.AUTHORIZED_LOGIN
  // const authorizedPasswd = process.env.AUTHORIZED_PASSWD

  const body = req.body || {}
  const { username, password } = body

  if (!username || !password) {
    res.status(401).json({
      success: false,
      message: 'Login and password are required'
    })
    return
  }

  const isValidCredentials = username === user.username && password === user.password
  if (!isValidCredentials) {
    res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    })
    return
  }

  const payload = {
    username
  }
  // const token = jwt.sign(payload, secret, options)
  const token = createToken(payload)

  res.status(201).json({
    success: true,
    user: {
      ...user,
      password: undefined
    },
    token
  })
})

export { router as authRoutes }
