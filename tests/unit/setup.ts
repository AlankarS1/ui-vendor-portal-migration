import nock from "nock";

beforeEach(() => {
  nock.cleanAll();
  nock.disableNetConnect();
});
