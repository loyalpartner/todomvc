import { connect } from 'react-redux'
import Header from '../../components/Header'
import { addTodo } from './action'

export default connect(null, { addTodo })(Header)
