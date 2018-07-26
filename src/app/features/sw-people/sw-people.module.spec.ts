import { SwPeopleModule } from './sw-people.module';

describe('SwFriendsModule', () => {
  let swFriendsModule: SwPeopleModule;

  beforeEach(() => {
    swFriendsModule = new SwPeopleModule();
  });

  it('should create an instance', () => {
    expect(swFriendsModule).toBeTruthy();
  });
});
