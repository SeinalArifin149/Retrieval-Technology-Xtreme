import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import '../../css/DashboardArcade.css';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="arcade-dashboard-title">
                    🎮 Retro Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="arcade-dashboard-container">
                <div className="arcade-panel">
                    <h3 className="arcade-panel-title">Welcome, Player!</h3>
                    <p className="arcade-panel-text">
                        You're logged in to the <strong>Techno Arcade</strong> system. <br />
                        Select a feature to begin your quest.
                    </p>

                    <div className="arcade-panel-buttons">
                        <button className="arcade-panel-btn">Start Game</button>
                        <button className="arcade-panel-btn">Leaderboard</button>
                        <button className="arcade-panel-btn">Settings</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
