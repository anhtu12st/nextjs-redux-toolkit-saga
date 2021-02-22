import React, { useContext } from "react";
import { useRouter } from 'next/router';

import { AuthContext } from '../Store/auth';

export default function Home() {
  const router = useRouter();
  const { authState, logout } = useContext(AuthContext);

  return (
    <>
      <div>Hello, World! - Home - {JSON.stringify(authState)}</div>
      <button onClick={() => router.push('/login')}>Login</button>
      <button onClick={() => logout()}>Logout</button>
    </>
  );
}
