function persistentCart() {

  const key = 'cartProducts';
  let persist;
  let get;

  if (typeof localStorage !== 'undefined') {
    persist = (data) => localStorage.setItem(key, JSON.stringify(data));
    get = () => JSON.parse(localStorage.getItem(key));
  } else {
    persist = () => null;
    get = () => [];
  }

  return {
    persist: persist,
    get: () => get
  }

}

export default persistentCart;
