import React, {useEffect} from 'react';
import SignInForm from '../Components/SignInForm';
import PageWrapper from './PageWrapper';

function SignIn() {
  return (
    <PageWrapper title="Sign Up">
      <SignInForm />
    </PageWrapper>
  );
}

export default SignIn;
