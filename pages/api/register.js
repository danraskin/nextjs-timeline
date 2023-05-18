import pool from '@/lib/db';
import { encryptPassword } from '@/lib/auth';

export default async function register(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, email} = req.body;
        const password = encryptPassword(req.body.password);
        const queryRegister = `
            INSERT INTO "user" (firstname, lastname, email, password)
                VALUES ($1, $2, $3, $4)
                RETURNING id;
            `;
        const queryRegisterValues = [firstName, lastName, email, password];

        try {
            await pool.query(queryRegister, queryRegisterValues)
        } catch (err) {
            console.log('err in register user', err);
            res.status(500);
        }
        console.log('post success');
        res.status(201).json({});
    } else {
        console.log('wrong method', req.method);
        res.status(402).json({})
    }

}
