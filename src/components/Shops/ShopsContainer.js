import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getShops } from '../../actions/shops/getShops'
import ShopsPage from './ShopsPage';

class ShopsContainer extends Component {
  componentDidMount() {
    this.props.getShops()
  }

  render() {
    const storePage = 
      this.props.shops &&
      <ShopsPage shops={this.props.shops} />

    return (
      <div className='store'>
        {storePage}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  shops: state.shops
})

export default connect(mapStateToProps, { getShops })(ShopsContainer)
