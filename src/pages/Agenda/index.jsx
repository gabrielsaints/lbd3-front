import React, { useState, useEffect } from "react";

import api from "../../services/api";

import Header from "../../components/Header";

import { Container, CardContainer, Card, TableContainer } from "./styles";

const Dashboard = () => {
  // const [transactions, setTransactions] = useState<Transaction[]>([]);
  // const [balance, setBalance] = useState<Balance>({} as Balance);

  useEffect(() => {
    async function loadTransactions() {
      // TODO
    }

    loadTransactions();
  }, []);

  // useEffect(() => {
  //   if (!sessionStorage.getItem("token")) {
  //     history.push("/");
  //   } else {
  //     setToken(sessionStorage.getItem("token"));
  //   }
  // }, [history]);

  // useEffect(() => {
  //   if (token) {
  //     loadCalendar();
  //   }
  // }, [token]);

  // const loadCalendar = async () => {
  //   console.log({ token });
  //   const response = await api.get("/event", {
  //     headers: {
  //       Authorization: token,
  //     },
  //   });

  //   console.log(response.data);

  //   setEvent(data);
  // };

  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Entradas</p>
            </header>
            <h1 data-testid="balance-income">R$ 5.000,00</h1>
          </Card>
          <Card>
            <header>
              <p>Saídas</p>
            </header>
            <h1 data-testid="balance-outcome">R$ 1.000,00</h1>
          </Card>
          <Card total>
            <header>
              <p>Total</p>
            </header>
            <h1 data-testid="balance-total">R$ 4000,00</h1>
          </Card>
        </CardContainer>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="title">Computer</td>
                <td className="income">R$ 5.000,00</td>
                <td>Sell</td>
                <td>20/04/2020</td>
              </tr>
              <tr>
                <td className="title">Website Hosting</td>
                <td className="outcome">- R$ 1.000,00</td>
                <td>Hosting</td>
                <td>19/04/2020</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
