import { NextApiRequest, NextApiResponse } from "next";

export default async function register(req = NextApiRequest, res = NextApiResponse) {
    if (req.method === 'POST') {
        console.log('method: post, body: ', req.body);  
    } 
    console.log('in post')
    return res.status(201)
}
