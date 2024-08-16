import { useState } from 'react';

export default function Form({ onSubmit }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(false);

    const validateForm = () => {
        if (name.length < 3 || name.startsWith(' ')) {
            return false;
        }
        if (description.length < 6) {
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    if (!validateForm()) {
        setError(true);
        return;
    }

        onSubmit(name, description);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ingrese el nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Ingrese la descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Enviar</button>
            {error && <p className="error">Por favor chequea que la información sea correcta</p>}
        </form>
    );
}
