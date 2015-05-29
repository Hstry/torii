import Oauth2Bearer from 'torii/providers/oauth2-code';
import {configurable} from 'torii/configuration';

export default Oauth2Bearer.extend({
  name: 'edmodo-connect',                                                                                                              
  baseUrl: 'https://api.edmodo.com/oauth/authorize',                                                                                   
  redirectUri: configurable('redirectUri'),                                                                                            
  responseParams: ['access_token', 'token_type', 'expires_in'],                                                                        
});  
