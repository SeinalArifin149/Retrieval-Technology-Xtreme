import { Head, Link } from '@inertiajs/react';
import '../../css/WelcomeArcade.css'; // pastikan CSS ini tersedia

export default function Welcome({ canLogin, canRegister }) {
    return (
        <div className="arcade-welcome-container">
            <Head title="Welcome" />

            <div className="arcade-welcome-content">
                <h1 className="arcade-title">Welcome to Techno Arcade</h1>
                <p className="arcade-subtitle">Enter the realm of retro vibes</p>

                <div className="arcade-button-group">
                    {canLogin && (
                        <Link href={route('login')} className="arcade-btn arcade-login">
                            Log In
                        </Link>
                    )}
                    {canRegister && (
                        <Link href={route('register')} className="arcade-btn arcade-register">
                            Register
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
