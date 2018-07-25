import { SwFriendsModule } from './sw-friends.module';

describe('SwFriendsModule', () => {
  let swFriendsModule: SwFriendsModule;

  beforeEach(() => {
    swFriendsModule = new SwFriendsModule();
  });

  it('should create an instance', () => {
    expect(swFriendsModule).toBeTruthy();
  });
});
