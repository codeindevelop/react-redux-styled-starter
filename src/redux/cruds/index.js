/* eslint-disable */


const API_URL = "http://localhost:8000";

/* ------------------------ Authentication CRUD URLs ------------------------ */
export default {
  /* ------------------------------- Login Urls ------------------------------- */
  loginUrl: `${API_URL}/api/v1/login`,
  profileUrl: `${API_URL}/api/v1/profile`,
  logoutUrl: `${API_URL}/api/v1/logout`,
  pageAfterLoginUrl: `${API_URL}/api/v1/profile/postLoginPage`,

  /* ------------------------------ Register Urls ----------------------------- */

  registerUrl: `${API_URL}/api/v1/register`,
  registerActivationUrl: `${API_URL}/api/v1/register/activation`,

  /* --------------------------- ForgotPassword URLS -------------------------- */

  requestPasswordUrl: `${API_URL}/api/v1/password/create`,
  changePasswordUrl: `${API_URL}/api/v1/password/reset`,

  /* ------------------------------- TwoFa CRUDS ------------------------------ */

  twofaCodeDisableUrl: `${API_URL}/api/v1/profile/2fa/disable`,
  getQrCodeUrl: `${API_URL}/api/v1/twofa-qr`,
  confirmQrCodeUrl: `${API_URL}/api/v1/confirm-twofa`,
  disableQrCodeUrl: `${API_URL}/api/v1/disable-twofa`,
  getStatusQrCodeUrl: `${API_URL}/api/v1/twofa-status`,
  getUserActivityUrl: `${API_URL}/api/v1/user-activity`,

  /* ------------------------------- PersonalInfo CRUDS ------------------------------ */

  getPersonalInfoUrl: `${API_URL}/api/v1/personal-infos`,
  createPersonalInfoUrl: `${API_URL}/api/v1/personal-infos`,

  /* ------------------------------ SMS Cruds ------------------------------ */
  mobileGetVerifyCodeUrl: `${API_URL}/api/v1/get-verification-sms`,
  mobileVerifyCodeUrl: `${API_URL}/api/v1/verification-sms`,
};
