import React from 'react';
import { Row, Col } from 'reactstrap';

import { SSectionHeader, SFileButton } from 'components';

import UploadTable from './UploadTable';

const Upload = props => {
  return (
    <>
      <SSectionHeader title="Upload Sea Data" />
      <Row className="mb-2">
        <Col>
          <SFileButton
            id="upload"
            label="Upload Data"
            accepts=".zip"
            onChange={() => {}}
          />
        </Col>
      </Row>
      <Row className="mb-2">
        <Col md={9}>
          <UploadTable />
        </Col>
      </Row>
    </>
  );
};

export default Upload;
