import React, { useContext, useEffect } from "react";
import { useRouter } from 'next/router';

import AuthForm from '../Components/AuthForm';
import { AuthContext } from '../Store/auth';

export default function LoginPage() {
  const router = useRouter();
  const {isAuthenticated} = useContext(AuthContext);

  useEffect(() => {
    isAuthenticated() && router.replace('/');
  }, [isAuthenticated()])

  return <AuthForm />
}
