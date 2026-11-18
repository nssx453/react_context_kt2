import { useAuth } from '../context/AuthContext';
import Login from '../components/Login';
import Profile from '../components/Profile';

export default function ProfilePage() {
    const { user } = useAuth();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Профиль</h1>
            {user ? <Profile /> : <Login />}
        </div>
    );
}