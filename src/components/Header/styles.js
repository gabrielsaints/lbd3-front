import styled from "styled-components";

export const Container = styled.div`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 100%;
    margin: 0 auto;
    padding: ${({ size }) => (size === "small" ? "0 20px " : "0 20px 150px")};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff !important;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        cursor: pointer;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
