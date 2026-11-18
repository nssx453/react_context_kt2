import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
    const { login } = useAuth();
    const [name, setName] = useState('');

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();

                const cleanName = name.trim();
                if (cleanName === '') return;

                login(cleanName);
                setName('');
            }}
            className="mt-4 flex gap-2">
            <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Введите имя"
                className="border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300" />
            <button type="submit" className="bg-pink-400 px-4 py-2 text-white">Войти</button>
        </form>
    );
}