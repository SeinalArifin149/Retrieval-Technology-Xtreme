import { Head, useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import '../../../css/RegisterArcade.css';

export default function RegisterArcade() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onSuccess: () => {
                reset('password', 'password_confirmation');
                router.visit(route('login')); 
            },
        });
    };

    return (
        <div className="arcade-container">
            <Head title="Register" />
            <div className="left-pane">
                <h2 className="arcade-title">Register</h2>
                <div className="arcade-equalizer left-eq">
                    {[...Array(20)].map((_, i) => (
                        <div className="bar" style={{ '--i': i }} key={`left-${i}`} />
                    ))}
                </div>
                <div className="arcade-equalizer right-eq">
                    {[...Array(20)].map((_, i) => (
                        <div className="bar" style={{ '--i': i }} key={`right-${i}`} />
                    ))}
                </div>
                <form onSubmit={submit} className="arcade-form">
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            onFocus={(e) => e.target.parentNode.classList.add('focused')}
                            onBlur={(e) => e.target.parentNode.classList.remove('focused')}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            onFocus={(e) => e.target.parentNode.classList.add('focused')}
                            onBlur={(e) => e.target.parentNode.classList.remove('focused')}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            onFocus={(e) => e.target.parentNode.classList.add('focused')}
                            onBlur={(e) => e.target.parentNode.classList.remove('focused')}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="password"
                            name="password_confirmation"
                            placeholder="Confirm Password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            onFocus={(e) => e.target.parentNode.classList.add('focused')}
                            onBlur={(e) => e.target.parentNode.classList.remove('focused')}
                            required
                        />
                    </div>
                    <button type="submit" disabled={processing} className="arcade-button">
                        Sign Up
                    </button>
                </form>

                {Object.keys(errors).length > 0 && (
                    <div className="error-box">
                        {Object.values(errors).map((msg, i) => (
                            <p key={i}>{msg}</p>
                        ))}
                    </div>
                )}
            </div>

            <div className="right-pane">
                <div className="arcade-animation">
                    <h3 className="arcade-question">Already have an account?</h3>
                    <Link href={route('login')} className="arcade-login-button">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
}
