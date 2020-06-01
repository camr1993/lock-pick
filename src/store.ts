const mockData = {
  amazon: [
    'must be 6 chars long',
    'must have a special character',
    `${Math.random()}`
  ]
};

class DataStore {

  /** index object with domain keys and arrays of hints */
  passwordHints: {[domain: string]: string[]} = {};

  async loadData(){
    const response  = await mockData;
    this.passwordHints = response;
  }

  getHints(domain: string){
    return this.passwordHints[domain];
  }

}
const store = new DataStore(); //bundling does not create a singleton across content and popup js. this will need to be fixed
export default store;
