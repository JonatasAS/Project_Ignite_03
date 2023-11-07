import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary/index";
import { SearchForm } from "./components/SearchForm/index";
import { PriceHighLight, TrasactionsContainer, TrasactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";


export function Transactions() {
  const { transactions } = useContext(TransactionsContext)
  
  return (
    <div>
      <Header />
      <Summary />

      <TrasactionsContainer>
        <SearchForm />
        <TrasactionsTable>
          <tbody>
            {transactions.map(transactions => {
              return (
              <tr key={transactions.id}>
                <td width="50%">{transactions.description}</td>
                <td>
                  <PriceHighLight variant={transactions.type}>
                    {transactions.price}
                  </PriceHighLight>
               </td>
              <td>{transactions.category}</td>
              <td>{transactions.createdAt}</td>
            </tr>
              )
            })}
          </tbody>
        </TrasactionsTable>
      </TrasactionsContainer>
    </div>
  )
}