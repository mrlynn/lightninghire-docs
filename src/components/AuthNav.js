import React from 'react';
import { useAuth } from './AuthProvider';
import styles from './AuthNav.module.css';

export default function AuthNav() {
  const { session, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (!session?.user) {
    return (
      <div className={styles.authNav}>
        <a
          href="https://lightninghire.com/login"
          className={styles.loginButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign In
        </a>
      </div>
    );
  }

  return (
    <div className={styles.authNav}>
      <span className={styles.userName}>
        {session.user.name}
      </span>
      <a
        href="https://lightninghire.com/api/auth/signout"
        className={styles.logoutButton}
      >
        Sign Out
      </a>
    </div>
  );
} 