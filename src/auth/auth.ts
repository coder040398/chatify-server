import { VailidateUserDetails } from 'src/utils/types';

export interface IAuthService {
  validateUser(userCredential: VailidateUserDetails);
}
