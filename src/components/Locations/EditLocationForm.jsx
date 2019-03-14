import React from "react";
import PropTypes from "prop-types";

class EditLocationForm extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
  }

  render() {
    return (
      <div>

        <form onSubmit={this.props.onEditFormSubmission}>
          <input
            name="locationName"
            type="text"
            defaultValue={this.props.location.locationName}
            onChange={this.props.onChange}
            required />

          <input
            name="locationAddress"
            type="text"
            defaultValue={this.props.location.locationAddress}
            onChange={this.props.onChange}
            required />

          <input
            name="locationPostalCode"
            type="text"
            defaultValue={this.props.location.locationPostalCode}
            onChange={this.props.onChange}
            required />

          <input
            name="locationDescription"
            type="text"
            defaultValue={this.props.location.locationDescription}
            onChange={this.props.onChange}
            required />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

EditLocationForm.propTypes = {
  location: PropTypes.object,
  onEditFormSubmission: PropTypes.func,
  onChange: PropTypes.func
};

export default EditLocationForm;
