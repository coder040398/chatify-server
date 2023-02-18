import { User } from 'src/utils/typeorms';
import { VailidateUserDetails } from 'src/utils/types';

export interface IAuthService {
  validateUser(userCredential: VailidateUserDetails): Promise<User | null>;
}
