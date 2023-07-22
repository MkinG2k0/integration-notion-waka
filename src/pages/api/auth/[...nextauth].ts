// import { authOptions } from 'server/auth/auth-option'
// import NextAuth from 'next-auth'
//
// import { NextApiRequest, NextApiResponse } from 'next'
import { authOptions } from 'server/auth/auth-option'
import NextAuth from 'next-auth'
// import Cookies from 'js-cookie'

export default NextAuth(authOptions)
// const Auth = (req: NextApiRequest, res: NextApiResponse) => {
// 	res.status(200).end()
// }
//
// export default Auth
