import { connect } from "react-redux";
import Header from "./view";
import { addTodo } from "./action";

export default connect(null, { addTodo })(Header);
