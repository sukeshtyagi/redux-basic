import Home from "../components/Home";
import addToCart from "../services/actions/addToCart";
import removeFromCart from "../services/actions/removeFromCart";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (payload) => {
    dispatch(addToCart(payload));
  },
  removeFromCartHandler: (payload) => {
    dispatch(removeFromCart(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
