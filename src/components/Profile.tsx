import { useAuth } from '../context/AuthContext';

export default function Profile() {
    const { user } = useAuth();

    if (!user) {
        return <p className="text-slate-500">Вы не зашли</p>;
    }

    return (
        <div className="max-w-sm p-5 border border-slate-300 rounded-lg bg-white shadow-sm space-y-3">
            <h3 className="text-lg font-semibold text-slate-800">Профиль</h3>

            <img
                src="/avatar.jpg"
                className="w-24 h-24 border border-slate-300"
            />

            <p className="text-slate-700">
                <span className="font-medium">ID:</span> {user.id}
            </p>
            <p className="text-slate-700">
                <span className="font-medium">Имя:</span> {user.name}
            </p>
        </div>
    );
}