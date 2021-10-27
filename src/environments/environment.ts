export const environment = {
  //worked on govcloud, dev.example.com and fr-pools
  production: false,

  sso_api_username: '',
  sso_api_pwd: '',

  loginURL: 'https://fr-pools.auth-fips.us-gov-west-1.amazoncognito.com/oauth2/authorize?' +
              'client_id=28omb38m5vuf3bv2dpa1efl4bv&response_type=code&scope=openid+profile&' +
              'redirect_uri=http://localhost:4200/callback&idp_identifier=fr-idp',

  redirectURL: 'http://localhost:4200/callback',

  cognitoTokenURL: 'https://fr-pools.auth-fips.us-gov-west-1.amazoncognito.com/oauth2/token',

  logout: 'https://fr-pools.auth-fips.us-gov-west-1.amazoncognito.com/logout?' +
          'client_id=&' +
          'logout_uri=http://localhost:4200/home'
};

