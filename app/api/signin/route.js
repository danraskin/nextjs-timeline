import { NextApiRequest, NextApiResponse } from "next";

export default async function signin(req = NextApiRequest, res = NextApiResponse) {
    if (req.method === 'POST') {
        console.log('req')
    }
    // return res.json({})
}