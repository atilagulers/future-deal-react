import React from 'react';
import {Container} from 'react-bootstrap';

const PageWrapper = ({title, children}) => {
  document.title = title;

  return <Container>{children}</Container>;
};

export default PageWrapper;
