import Oauth2 from 'torii/providers/oauth2-code';                                                                                      
import {configurable} from 'torii/configuration';                                                                                      

export default Oauth2.extend({                                                                                                         
  name: 'edmodo-connect',                                                                                                              
  baseUrl: 'https://api.edmodo.com/oauth/authorize',                                                                                   
  redirectUri: configurable('redirectUri'),                                                                                            
  responseType: configurable('responseType'),                                                                                          
  responseParams: ['access_token', 'token_type', 'expires_in'],                                                                        
});  
