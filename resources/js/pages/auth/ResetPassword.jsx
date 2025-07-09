import { Head, useForm } from '@inertiajs/react';
import '../../../css/LoginArcade.css';

export default function ResetPasswordArcade({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="arcade-container">
            <Head title="Reset Password" />

            {/* Left Pane */}
            <div className="login-left-pane">
                <h3>Remember your password?</h3>
                <a href={route('login')} className="arcade-register-button">
                    Log In
                </a>
            </div>

            {/* Right Pane */}
            <div className="login-right-pane">
                <div className="arcade-form-box">
                    <h2 className="arcade-title">Reset Password</h2>

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
                            placeholder="New Password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />
                        {errors.password && <p className="error-text">{errors.password}</p>}

                        <input
                            type="password"
                            name="password_confirmation"
                            placeholder="Confirm New Password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />
                        {errors.password_confirmation && (
                            <p className="error-text">{errors.password_confirmation}</p>
                        )}

                        <button type="submit" className="arcade-button" disabled={processing}>
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
