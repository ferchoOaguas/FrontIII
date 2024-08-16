import { useState } from 'react';

export default function Card({ name, description }) {
    return (
        <div className="message-card">
            <h2>Hola {name},</h2>
            <p>Sabemos que tu banda favorita es:</p>
            <button className="button-response">{description}</button>
        </div>
    );
}
