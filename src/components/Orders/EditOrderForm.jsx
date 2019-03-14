import React from "react";
import PropTypes from "prop-types";

class EditOrderForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <form onSubmit={this.props.onEditFormSubmission}>
          <input
            name="scheduledPickupDate"
            type="date"
            defaultValue={this.props.order.scheduledPickupDate}
            onChange={this.props.onChange}
            required />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

EditOrderForm.propTypes = {
  order: PropTypes.object,
  onEditFormSubmission: PropTypes.func,
  onChange: PropTypes.func
};

export default EditOrderForm;
