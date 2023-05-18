import { NextApiRequest, NextApiResponse } from "next";
import pool from '@/lib/db';

export default async function register(req, res) {
    if (req.method === 'POST') {
        const client = await pool.connect();
        const {firstName, lastName, email, password} = req.body;
        const queryRegisterUser = `
            INSERT INTO "user" (firstname, lastname, email, password)
                VALUES ($1, $2, $3, $4)
                RETURNING id;
            `;
        const queryValuesRegisterUser = [firstName, lastName, email, password];
        try {
            await client.query(queryRegisterUser, queryValuesRegisterUser)
        } catch (err) {
            console.log('err in register user', err);
            res.status(500);
        } finally {
            client.release();
        }
    } 
    console.log('in post')
    res.status(201).json({})
}
