import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Header() {
    const { user, logout } = useAuth();

    return (
        <header className="flex items-center gap-4 px-6 py-3 bg-slate-100 border-b border-slate-300">
            <Link to="/">Главная</Link>
            <Link to="/profile">Профиль</Link>

            {user ? (
                <div className="ml-auto flex items-center gap-3">
                    <span className="text-slate-700">
                        Привет, <strong>{user.name}</strong>!
                    </span>
                    <button
                        onClick={logout}
                        className="px-3 py-1 rounded bg-pink-500 text-white"
                    >
                        Выйти
                    </button>
                </div>
            ) : (
                <span className="ml-auto text-slate-500">Гость</span>
            )}
        </header>
    );
}