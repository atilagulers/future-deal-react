import React, {useEffect} from 'react';
import SignUpForm from '../Components/SignUpForm';
import PageWrapper from './PageWrapper';

function SignUp() {
  return (
    <PageWrapper title="Sign Up">
      <SignUpForm />
    </PageWrapper>
  );
}

export default SignUp;
