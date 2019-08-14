import React from 'react';
import {connect} from 'react-redux';
import {addFeature} from '../actions/carActions';


const AdditionalFeature = props => {
  const addFeature = () => {
    let actionItem = props.store.filter(element => element.id === props.feature.id) [0]
    if(!actionItem) return props.addFeature(actionItem)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    store: state.store
  }
}
export default connect(mapStateToProps, {addFeature})(AdditionalFeature);
