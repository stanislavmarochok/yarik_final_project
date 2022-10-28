class DataManager extends React.Component {

  static getItems(){
    return [
      {
        id: 1,
        name: "Tony",
        address: "HJK",
        price: 20000,
        flatsCount: 2,
        currency: "USD"
      },
      {
        id: 2,
        name: "Andrew",
        address: "sgdfdf",
        price: 30000,
        flatsCount: 3,
        currency: "EUR"
      },
      {
        id: 3,
        name: "Alex",
        address: "uiop",
        price: 30000,
        flatsCount: 3,
        currency: "EUR"
      }
    ];
  }

  render() {
    return <h2>Hi, I am a Data!</h2>;
  }
}

export default DataManager;