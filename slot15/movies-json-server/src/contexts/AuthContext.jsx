import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import api from '../api/movieApi';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem('auth:user');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });
  // Keep plaintext password only in memory; DO NOT persist
  const [plainPassword, setPlainPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const isAuthenticated = !!user;

  useEffect(() => {
    if (user) {
      // Persist only safe subset to localStorage (never persist plaintext password)
      const { id, name, email, passwordLength } = user;
      localStorage.setItem('auth:user', JSON.stringify({ id, name, email, passwordLength }));
    } else {
      localStorage.removeItem('auth:user');
    }
  }, [user]);

  const login = useCallback(async ({ email, password }) => {
    setLoading(true);
    try {
      const res = await api.get('/accounts', {
        params: { email, password },
      });
      const accounts = res.data || [];
      if (accounts.length === 1) {
        const u = accounts[0];
        // Only store password length in user; keep plaintext only in memory state
        setUser({ id: u.id, name: u.name || u.username || u.email, email: u.email, passwordLength: (password || '').length });
        setPlainPassword(password || '');
        return { ok: true };
      }
      return { ok: false, error: 'Email hoặc mật khẩu không đúng' };
    } catch (e) {
      console.error('Login error', e);
      // Provide clearer error when API is unreachable or server responded with error
      if (e.code === 'ERR_NETWORK') {
        return { ok: false, error: 'Không thể kết nối tới API (http://localhost:3001). Hãy kiểm tra json-server đã chạy chưa.' };
      }
      if (e.response) {
        return { ok: false, error: `Lỗi máy chủ (${e.response.status}). Vui lòng thử lại.` };
      }
      return { ok: false, error: 'Không thể đăng nhập. Vui lòng thử lại.' };
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setPlainPassword('');
  }, []);

  const value = useMemo(() => ({ user, plainPassword, isAuthenticated, loading, login, logout }), [user, plainPassword, isAuthenticated, loading, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
