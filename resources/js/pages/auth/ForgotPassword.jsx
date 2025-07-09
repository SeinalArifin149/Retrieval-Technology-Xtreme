import { Head, useForm } from '@inertiajs/react';
import '../../../css/ForgotPasswordArcade.css';
import { Link } from '@inertiajs/react';

export default function ForgotPasswordArcade({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <div className="arcade-container">
            {/* Kiri: Kembali ke login */}
            <div className="forgot-left-pane">
                <h3>Remembered your password?</h3>
                <Link href={route('login')} className="arcade-login-button">
                    Back to Login
                </Link>
            </div>

            {/* Kanan: Form reset password */}
            <div className="forgot-right-pane">
                <div className="arcade-form-box">
                    <Head title="Forgot Password" />
                    <h2 className="arcade-title">Reset Password</h2>

                    <p className="arcade-subtitle">
                        Enter your email to receive a reset link.
                    </p>

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

                        <button type="submit" disabled={processing} className="arcade-button">
                            Send Reset Link
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
