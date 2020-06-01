async function backgroundOnInit(){
  await store.loadData();
  console.table(store.passwordHints);
  console.log(store.getHints('amazon'));
}

const mockData = {
  amazon: [
    'must be 6 chars long',
    'must have a special character'
  ]
};

class DataStore {

  /** index object with domain keys and arrays of hints */
  passwordHints = {};

  async loadData(){
    const response  = await mockData;
    this.passwordHints = response;
  }

  getHints(domain){
    return this.passwordHints[domain];
  }

}

const store = new DataStore();

backgroundOnInit();
