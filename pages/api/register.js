import { NextApiRequest, NextApiResponse } from "next";

export default async function register(req = Request, res = Response) {
    if (req.method === 'POST') {
        console.log('method: post, body: ', req.body);  
    } 
    console.log('in post')
    res.status(201).json({})
}
