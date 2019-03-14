import React from "react";
import PropTypes from "prop-types";
import EditLocationForm from "./../Locations/EditLocationForm";

class Location extends React.Component {
  constructor(props) {
    console.log("Location props: ", props)
    super(props);
    const location = props.locations[props.match.params.locationId];

    this.state = {
      locationName: location.locationName,
      locationAddress: location.locationAddress,
      locationPostalCode: location.locationPostalCode,
      locationDescription: location.locationDescription,
      id: location.id
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleEditFormSubmission(event) {
    event.preventDefault();

    this.props.onEditLocation(
      {
        locationName: this.state.locationName,
        locationAddress: this.state.locationAddress,
        locationPostalCode: this.state.locationPostalCode,
        locationDescription: this.state.locationDescription,
        id: this.state.id
      }
    );
  }

  render() {
    const location = this.state;
    return (
      <div>
        <div className="container">
          <h3>{this.state.locationName}</h3>
          <p>{this.state.locationAddress}</p>
          <p>{this.state.locationPostalCode}</p>
          <p>{this.state.locationDescription}</p>
          <p>{this.state.id}</p>
        </div>

        <EditLocationForm
          location={location}
          onEditLocation={this.props.onEditLocation}
          onChange={this.handleChange}
          onEditFormSubmission={this.handleEditFormSubmission}/>
      </div>
    );
  }
}

Location.propTypes = {
  match: PropTypes.object,
  locations: PropTypes.object,
  locationName: PropTypes.string,
  onEditLocation: PropTypes.func
};

export default Location;
