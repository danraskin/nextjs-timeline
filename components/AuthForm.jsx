'use client';

import { register, signin } from "@/lib/api";
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
        console.log('handleSubmit')
        try {
            if (mode === 'register') {
                console.log('registered');
                await register(formState);
            } else {
                console.log('huh?')
                await signin(formState);
            }
            // console.log(formState);
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
                        <div>
                            <div>
                                <div>Firt Name</div>
                                <input
                                    required
                                    placeholder="First Name"
                                    value={formState.firstName}
                                    onChange={(e) => 
                                        setFormState((s) => ({...s, firstName: e.target.value}))
                                    
                                    }
                                />
                            </div>
                            <div>
                                <div>Last Name</div>
                                <input
                                    required
                                    placeholder="Last Name"
                                    value={formState.lastName}
                                    onChange={(e) =>
                                        setFormState((s) => ({...s, lastName: e.target.value}))
                                    }
                                />
                            </div>
                        </div>
                    )}
                    <div>
                        <div>Email</div>
                        <input
                            required
                            placeholder="Email"
                            value={formState.email}
                            onChange={(e) =>
                                setFormState((s) => ({...s, email: e.target.value}))
                            }
                        />
                    </div>
                    <div>
                        <div>Password</div>
                        <input
                            required
                            placeholder="Password"
                            value={formState.password}
                            onChange={(e) =>
                                setFormState((s) => ({...s, password: e.target.value}))
                            }
                        />
                    </div>
                    <div>
                        <div>
                            <span>
                                <Link
                                    href={content.linkUrl}
                                >
                                    {content.linkText}
                                </Link>
                            </span>
                        </div>
                        <div>
                            <button type="submit">
                                {content.buttonText}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Card>
    )
}

export default AuthForm;
