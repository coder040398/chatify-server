import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { IUserService } from 'src/users/user';
import { Services } from 'src/utils/constants';
import { compareHash } from 'src/utils/helpers';
import { VailidateUserDetails } from 'src/utils/types';
import { IAuthService } from './auth';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(Services.USERS) private readonly userService: IUserService,
  ) {}

  async validateUser(userDetails: VailidateUserDetails) {
    const user = await this.userService.findUser({ email: userDetails.email });
    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    const validatePassword = await compareHash(
      userDetails.password,
      user.password,
    );
  }
}
