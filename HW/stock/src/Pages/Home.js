
export default function Home() {
  return (
    <>
      <table>
        <tr>
          <th>Symbol</th>
          <th>Company Name</th>
          <th>Price</th>
          <th>Change</th>
        </tr>
        <tr>
          {/* <th>{stock[0].symbol}</th>
          <th>{stock[0].name}</th>
          <th>{stock[0].price}</th>
          <th>{stock[0].change}</th> */}
        </tr>
        {/* {stock.forEach(x => console.log(` ${x}`))   } */}
        {/* {stock.map((x, i) => (
            <Link key={{i}} to={`/stock/${i}`}>
              console.log(x)
            <tr>
            <th>{stock[0].symbol}</th>
          <th>{stock[0].name}</th>
          <th>{stock[0].price}</th>
          <th>{stock[0].change}</th>
            </tr>
          </Link> */}
        {/* ))} */}
      </table>
    </>
  );
}
