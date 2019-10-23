import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ErrorNotification = ({ errors }) => {
  if (!errors.length > 0) return null;
  return (
    <Wrapper>
      <Errors>{errors}</Errors>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, {})(ErrorNotification);

const Wrapper = styled.div`
  position: relative;
`;

const Errors = styled.div`
  position: absolute;
  height: 20px;
  padding: 5px;
  width: 100vw;
  background-color: #CC0000;
  color: #FFF;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  vertical-align: center;
`;
