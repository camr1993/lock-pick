import store from './store';

export default async function backgroundOnInit(){
  await store.loadData();
  console.table(store.passwordHints);
  console.log(store.getHints('amazon'));
}
