import { NextApiRequest, NextApiResponse } from "next";

export default async function register(req = NextApiRequest, res = NextApiResponse) {
    if (req.method === 'POST') {
        console.log(req.body)
    }

    res.sendStatus(201);

}