export const environment = {
  production: false,

  sso_api_username: '28omb38m5vuf3bv2dpa1efl4bv',
  sso_api_pwd: '1cdr9hv9d8o3r5e6u48t7pjqu82lue8nidq49t46s3tmg4i7b4mf',

  loginURL: 'https://fr-pools.auth-fips.us-gov-west-1.amazoncognito.com/oauth2/authorize?' +
              'client_id=28omb38m5vuf3bv2dpa1efl4bv&response_type=code&scope=openid+profile&' +
              'redirect_uri=http://localhost:4200/callback&idp_identifier=fr-idp',

  redirectURL: 'http://localhost:4200/callback',

  cognitoTokenURL: 'https://fr-pools.auth-fips.us-gov-west-1.amazoncognito.com/oauth2/token',

  logout: 'https://fr-pools.auth-fips.us-gov-west-1.amazoncognito.com/logout?' +
          'client_id=28omb38m5vuf3bv2dpa1efl4bv&' +
          'logout_uri=http://localhost:4200/home'
};

