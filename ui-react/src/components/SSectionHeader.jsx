import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

const SSectionHeader = props => {
  const { title, actions } = props;
  return (
    <Row className="mb-2">
      <Col>
        <h2>{title}</h2>
      </Col>
    </Row>
  );
};

SSectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SSectionHeader;
