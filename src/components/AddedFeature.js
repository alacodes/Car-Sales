import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFeature } from '../actions/carActions';

const AddedFeature = props => {
  const dispatch = useDispatch()
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick= {_ => dispatch(removeFeature(props.feature))}>X</button>
      {props.feature.name}
    </li>
  );
};

//using useDispatch() hook
export default AddedFeature














// Old version:
// const mapStateToProps = state => {
//   return {

//   }
// }

// export default connect(mapStateToProps, {removeFeature})(AddedFeature);
