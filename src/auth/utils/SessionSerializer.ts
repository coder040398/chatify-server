import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { IUserService } from 'src/users/user';
import { Services } from 'src/utils/constants';
import { User } from 'src/utils/typeorms';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject(Services.USERS) private readonly userService: IUserService,
  ) {
    super();
  }
  serializeUser(user: User, done: Function) {
    console.log(user);
    console.log('serializeUser');
    done(null, user);
  }

  async deserializeUser(user: User, done: Function) {
    console.log('deserializeUser');
    console.log(user);
    const userDb = await this.userService.findUser({ id: user.id });
    console.log(userDb);
    return userDb ? done(null, userDb) : done(null, null);
  }
}
