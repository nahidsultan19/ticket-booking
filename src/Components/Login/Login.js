import React from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const onSubmit = data => {
        console.log(data)
    };

    return (

        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="card flex-shrink-0 shadow-2xl bg-base-100">
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                            })} type="email" placeholder="Enter Email" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input {...register('password', {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Provide a valid Password'
                                }
                            })} type="password" placeholder="Enter Password" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        <button className='btn w-full max-w-xs'>Login</button>
                    </form>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Login</button>
                    </div>
                    <p>Don't have an Account?<Link to='/' className='btn btn-link'>Create an Account</Link></p>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-outline'>Continue with Google</button>
                </div>
            </div>
        </div>

    );
};

export default Login;