import React, { useState } from "react"

export function AdminAuth() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Appel à la BDD pour vérifier la validité du mot de passe de l'unique compte
      const response = await fetch('/api/login', {

      });

      const data = await response.json();

      if (data.success) {
        // Authentication réussie
        // Redirige vers l'espace administrateur
        console.log('Identification réussie !');
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error(error);
      setError("L'authentification a échoué !");
    }
  }
    
    return (
        <div>
            <h4>Entrée administrateur</h4>
            <p>Identifiant</p>
            <form onSubmit={handleSubmit}>
                <label>Nom d'utilisateur:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label>Mot de passe:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Se connecter</button>
            </form>
            <p>Mot de passe</p>
        </div>
    )
}