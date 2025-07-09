import { Head, useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import '../../../css/LoginArcade.css';

export default function LoginArcade({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="arcade-container">
            <Head title="Log in" />

            <div className="login-left-pane">
                <h3>Don't have an account?</h3>
                <Link href={route('register')} className="arcade-register-button">
                    Sign Up
                </Link>
            </div>

            {/* Bagian kanan: form login */}
            <div className="login-right-pane">
                <div className="arcade-form-box">
                    <h2 className="arcade-title">Log In</h2>

                    {status && (
                        <div className="arcade-status">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="arcade-form">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />
                        {errors.email && <p className="error-text">{errors.email}</p>}

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />
                        {errors.password && <p className="error-text">{errors.password}</p>}

                        <div className="arcade-remember">
                            <label>
                                <input
                                    type="checkbox"
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span> Remember me</span>
                            </label>

                            {canResetPassword && (
                                <Link href={route('password.request')} className="arcade-reset-link">
                                    Forgot password?
                                </Link>
                            )}
                        </div>

                        <button type="submit" className="arcade-button" disabled={processing}>
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
