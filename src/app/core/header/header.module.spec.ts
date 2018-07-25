import { SwHeaderModule } from './sw-header.module';

describe('SwHeaderModule', () => {
  let headerModule: SwHeaderModule;

  beforeEach(() => {
    headerModule = new SwHeaderModule();
  });

  it('should create an instance', () => {
    expect(headerModule).toBeTruthy();
  });
});
