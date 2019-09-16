import converter from './helpers';

const reportId = ':reportId([0-9]*)';

const PATHS = {
  HOME: '/',

  UPLOAD: '/upload',

  VIEW_REPORT: `/reports/${reportId}`,
};

export default converter(PATHS);
