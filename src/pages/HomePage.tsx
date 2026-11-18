import { useAuth } from '../context/AuthContext';

export default function HomePage() {
    const { user } = useAuth();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Главная</h1>
            {user ? <p>Ты вошёл как {user.name}</p> : <p>Ты не вошёл в аккаунт</p>}
        </div>
    );
}