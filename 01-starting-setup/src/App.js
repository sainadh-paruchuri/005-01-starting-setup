import ExpenseItem from "./components/ExpenseItem";
const datas = [
  {
    id: Math.random() * 100,
    title: "CarInsurense",
    LocationOfExpenditure: "Guntur",
    Date: new Date().toDateString(),
    price: "$294.12",
  },
  {
    id: Math.random() * 100,
    title: "Food",
    LocationOfExpenditure: "Hyderbad",
    Date: new Date().toDateString(),
    price: "$264.12",
  },
  {
    id: Math.random() * 100,
    title: "Petrol",
    LocationOfExpenditure: "Vijaywada",
    Date: new Date().toDateString(),
    price: "$500",
  },
  {
    id: Math.random() * 100,
    title: "Party",
    LocationOfExpenditure: "Mubarak Guntur",
    Date: new Date().toDateString(),
    price: "$1000",
  },
  {
    id: Math.random() * 100,
    title: "CarInsurense",
    LocationOfExpenditure: "Guntur",
    Date: new Date().toDateString(),
    price: "$294.12",
  },
];
function App() {
  return (
    <div>
    {datas.map((data,index)=>(<ExpenseItem key={index} data={data}/>))}
    </div>
  );
}

export default App;
