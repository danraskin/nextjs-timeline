'use client';

// //import { register, signin } from "@/lib/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Router from "next/router";
import { useState } from "react";
// //import Button from "./Button";
import Card from "./Card";
// //import Input from "./Input";

const registerContent = {
    linkUrl: '/signin',
    linkText: 'Already have an account?',
    header: 'Create a new account',
    subheader: 'Just a few things to get started',
    buttonText: 'Register'
}

const signinContent = {
    linkUrl: '/register',
    linkText: "Don't have an account?",
    header: 'Welcome back!',
    subheader: 'Enter your credentials to access your account',
    buttonText: 'Sign In'
}

const initial = {email:'', password:'', firstName:'', lastName:''}

const AuthForm = ({mode})=> {
    const [formState, setFormState] = useState({...initial});
    const router = useRouter();
    const content = mode === 'register' ? registerContent : signinContent;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // if (mode === 'register') {
            //     await registerContent(formState);
            //     console.log('registered');
            // } else {
            //     await signin(formState);
            // }
            console.log(formState);
            // router.push('/home');
            setFormState(initial);
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <Card>
            <div width="100%">
                <div>
                    <h2>{content.header}</h2>
                    <p>{content.subheader}</p>
                </div>
                <form onSubmit={handleSubmit}>
                    {mode === 'register' && (
                        <div></div>
                    )}
                </form>
            </div>
            
        </Card>
    )
}

export default AuthForm;
