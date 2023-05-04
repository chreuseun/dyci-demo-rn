
const generateAuthorizationToken = ({ token = null }) => {
  try {
    return `${token}`;
  } catch {
    return '';
  }
};

const getAuthorizationToken = () => {
  return  null // localStorage.getItem(ACCESS_TOKEN);
};

const initiateLogout = () => {
    console.log('--- USER NEED TO LOG OUT')
};

export { generateAuthorizationToken, getAuthorizationToken, initiateLogout };
