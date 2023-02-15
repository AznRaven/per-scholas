import "./Korilla.css";
import { useState } from "react";

function Korilla() {
    let [order, setOrder] = useState("paid");
    let [listType, setListType] = useState("paid");
  const receipts = [
    {
      person: "Karolin",
      order: {
        main: "Burrito",
        protein: "Organic Tofu",
        rice: "Purple Rice",
        sauce: "Green Crack",
        toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
        drink: "Korchata",
        cost: 22,
      },
      paid: false,
    },
    {
      person: "Mark",
      order: {
        main: "Rice Bowl",
        protein: "Ginger Soy Chix",
        rice: "Sticky Rice",
        sauce: "Korilla",
        toppings: ["Yuzu Pickled Sweet Pepper", "Kale"],
        drink: "Korchata",
        cost: 19,
      },
      paid: false,
    },
    {
      person: "Matt",
      order: {
        main: "Salad Bowl",
        protein: "Organic Tofu",
        rice: "none",
        sauce: "K'lla",
        toppings: ["Blue Potato Salad", "Pico De Gallo", "Red Kimchi"],
        drink: "Sparkling Blood Orange Soda",
        cost: 20,
      },
      paid: true,
    },
  ];

//   let newReceipts = receipts.map(x => {
//     x.order.id = crypto.randomUUID()
//     return {...x, x.order.id}
//   })

  let filteredListType = receipts.filter((x) => {
    if (listType === "all") {
      return true;
    } else if (listType === "paid") {
      if (x.paid === false) {
        return true;
      }
    } else {
      if (x.paid === true) {
        return true;
      }
    }
    return false;
  });

 const jsxReceipts = filteredListType.map((x) => {
    return (
      <div className="receipts">
        <h1>{x.person}</h1>
        <p>
          <span>Main:</span> {x.order.main}
        </p>
        <p>
          <span>Protein:</span> {x.order.protein}
        </p>
        <p>
          <span>Rice:</span> {x.order.rice}
        </p>
        <p>
          <span>Sauce:</span> {x.order.sauce}
        </p>
        <p>
          <span>Drink:</span> {x.order.drink}
        </p>
        <p>
          <span>Cost:</span> {x.order.cost}
        </p>
        {/* <button onClick={() => orderPaid("Paid")}>Paid</button> */}
        <button>Paid</button>
      </div>
    );
  });

  return (
    <>
      <h1>Korilla</h1>
      <div className="container">{jsxReceipts}</div>;
    </>
  );
}

export default Korilla;
