import React, {useEffect} from 'react';
import LogInForm from '../Components/LogInForm';
import PageWrapper from './PageWrapper';

function LogIn() {
  return (
    <PageWrapper title="Sign Up">
      <LogInForm />
    </PageWrapper>
  );
}

export default LogIn;
