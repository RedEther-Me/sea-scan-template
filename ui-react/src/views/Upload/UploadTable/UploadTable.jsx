import React from 'react';
import { Table } from 'reactstrap';

import UploadTableRow from './UploadTableRow';

const UploadTable = props => {
  const exampleFiles = [
    { uploadId: 1, filename: 'upload-file-1', status: 'Accepted' },
    { uploadId: 2, filename: 'upload-file-2', status: 'In Progress' },
    { uploadId: 3, filename: 'upload-file-3', status: 'Rejected' },
  ];

  return (
    <Table>
      <thead>
        <tr>
          <th>Filename</th>
          <th>Status</th>
          <th>
            <span className="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {exampleFiles.map(upload => (
          <UploadTableRow key={upload.uploadId} {...upload} />
        ))}
      </tbody>
    </Table>
  );
};

export default UploadTable;
