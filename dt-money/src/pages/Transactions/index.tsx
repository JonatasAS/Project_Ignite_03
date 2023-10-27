import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary/index";
import { PriceHighLight, TrasactionsContainer, TrasactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TrasactionsContainer>
        <TrasactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">
                  R$ 12.000,00
               </PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighLight variant="outcome">
                  - R$ 59,00
               </PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TrasactionsTable>
      </TrasactionsContainer>
    </div>
  )
}