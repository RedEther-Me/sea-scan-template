import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import URIS from 'uris';

const UploadTableRow = props => {
  const { uploadId, filename, status } = props;

  const actions =
    status === 'Accepted' ? (
      <Button
        tag={Link}
        to={URIS.VIEW_REPORT({ reportId: uploadId })}
        color="link"
      >
        View Report
      </Button>
    ) : null;

  return (
    <tr>
      <td>{filename}</td>
      <td>{status}</td>
      <td>{actions}</td>
    </tr>
  );
};

UploadTableRow.propTypes = {
  uploadId: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default UploadTableRow;
