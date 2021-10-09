export const environment = {
  production: false,

  sso_api_username: '',
  sso_api_pwd: '',

  loginURL: 'https://fr-pools.auth-fips.us-gov-west-1.amazoncognito.com/login?' +
              'client_id=4ir78cjaft3423shid5mlvg8u7&response_type=code&scope=openid+profile&' +
              'redirect_uri=http://localhost:4200/callback',

  redirectURL: 'http://localhost:4200/callback',

  cognitoTokenURL: 'https://fr-pools.auth-fips.us-gov-west-1.amazoncognito.com/oauth2/token',

  logout: 'https://fr-pools.auth-fips.us-gov-west-1.amazoncognito.com/logout?' +
          'client_id=4ir78cjaft3423shid5mlvg8u7&' +
          'logout_uri=http://localhost:4200/home'
};

