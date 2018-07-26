import { SwPersonalModule } from './sw-personal.module';

describe('SwFriendsModule', () => {
  let swFriendsModule: SwPersonalModule;

  beforeEach(() => {
    swFriendsModule = new SwPersonalModule();
  });

  it('should create an instance', () => {
    expect(swFriendsModule).toBeTruthy();
  });
});
