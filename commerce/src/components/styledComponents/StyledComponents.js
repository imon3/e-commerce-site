import styled from "styled-components";

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${prop =>
    prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${prop => (prop.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;

  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
  }

  &:focus {
    outline: none;
  }
`;

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all .5s linear;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all .5s linear;
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      bod-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }

    .card-footer {
      background; rgba(247. 247 247);
    }
  }

  .img-container {
    position relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all .5s linear;
  }

  .img-container:hover .card-img-top{
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: .2rem .4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: .5rem 0 0 0;
    transform: translate(100%, 100%);
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
    transition: all .5s linear;
  }

  .card-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;

export { ButtonContainer, NavWrapper, ProductWrapper, ModalContainer };
