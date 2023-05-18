import pool from '@/lib/db';
import { comparePassword } from '@/lib/auth';

export default async function signin(req, res) {
    if (req.method === 'GET' ) {
        const { email, password } = req.body;

        //checkout user.strategy from citizenkanine
    }
}