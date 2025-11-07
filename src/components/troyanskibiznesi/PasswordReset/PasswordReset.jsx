import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useSearchParams } from 'react-router-dom';

const PasswordReset = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const [searchParams] = useSearchParams();

  // Initialize Supabase client
  const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_SUPABASE_ANON_KEY
  );

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Паролата трябва да бъде поне 6 символа');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Get the access token from URL
      const token = searchParams.get('token');
      console.log('token => ',token);
      
      
      if (!token) {
        throw new Error('No access token provided');
      }

      // Update the password
      const { error: updateError } = await supabase.auth.updateUser({
        password: password
      });

      if (updateError) throw updateError;

      setMessage('Паролата е успешно променена. Пренасочване към апликацията...');
      
      // Redirect back to the app after successful password reset
      // You'll need to replace this URL with your app's deep link
      setTimeout(() => {
        window.location.href = 'exp://__xthri-ivotsochev-8081.exp.direct/--/**';
      }, 2000);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div>
        <h1 className="mt-6 text-center text-4xl font-extrabold text-white">
          Троянски бизнеси
        </h1>
      </div>
      <form className="mt-8 space-y-6" 
        onSubmit={handlePasswordReset}
        >
        <div className="rounded-md shadow-sm space-y-4">
          <div>
            <label htmlFor="password" className="sr-only">Нова парола</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="appearance-none rounded-2xl relative block w-full py-2 border border-gray-700 placeholder-gray-400 text-white bg-gray-800 sm:text-sm text-base font-psemibold px-4 h-16"
              placeholder="Нова парола"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="sr-only">Потвърди парола</label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              required
              className="appearance-none rounded-2xl relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-400 text-white bg-gray-800 sm:text-sm h-16"
              placeholder="Потвърди парола"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center">
            {error}
          </div>
        )}

        {message && (
          <div className="text-green-500 text-sm text-center">
            {message}
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={loading}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent rounded-xl bg-secondary disabled:opacity-50 text-primary font-psemibold text-lg min-h-[62px] items-center"
          >
            {loading ? 'Обработва се...' : 'Направи смяна на паролата'}
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default PasswordReset;
