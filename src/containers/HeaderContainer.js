//acc
import Header from "../components/Header";
import { connect } from "react-redux";
//state, dispatch

const mapStateToProps = (state) => {
  return {
    itemsInCart: state.reducerAddToCart.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
