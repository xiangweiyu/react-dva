import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Header from '../../components/layout/Header'

const mapStateToProps = state => ({
  visible: state.app.layout.header,
  headerRoutes: state.app.routes.headerRoutes
})

const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
