import { connect } from "react-redux";
import * as TodoActions from "./action";
import { bindActionCreators } from "redux";
import MainSection from "./view";
import { getCompletedTodoCount } from "./selector";

const mapStateToProps = (state) => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
