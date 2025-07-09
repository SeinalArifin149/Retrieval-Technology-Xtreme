import { Head, Link, useForm } from '@inertiajs/react';
import '../../../css/VerifyArcade.css';

export default function VerifyEmailArcade({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        post(route('verification.send'));
    };

    return (
        <div className="arcade-container">
            <Head title="Verify Email" />

            <div className="verify-pane">
                <h2 className="arcade-title">Verify Your Email</h2>

                <p className="arcade-message">
                    Thanks for signing up! Please verify your email address by clicking the link we just sent.
                    Didn’t receive it? We’ll gladly send another.
                </p>

                {status === 'verification-link-sent' && (
                    <div className="arcade-success">
                        A new verification link has been sent to your email address.
                    </div>
                )}

                <form onSubmit={submit} className="arcade-form">
                    <button type="submit" className="arcade-button" disabled={processing}>
                        Resend Verification Email
                    </button>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="arcade-logout-button"
                    >
                        Log Out
                    </Link>
                </form>
            </div>
        </div>
    );
}
