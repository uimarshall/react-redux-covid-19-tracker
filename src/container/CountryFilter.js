import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Select from 'react-select';
// import { getAffectedCountries } from '../actions/covidInfoAction';

class CountryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCountries } = this.props;
    getCountries();
  }

  handleChange(option) {
    const { history } = this.props;
    history.push(`/${option.value}`);
  }

  render() {
    const { countries } = this.props;
    const options = [];
    countries.map(country => options.push({ value: country, label: country }));
    return (
      <div>
        <div>
          <h3>STATISTICS BY COUNTRY:</h3>
          <Select
            defaultValue={{ label: 'Choose or type a location...', value: 0 }}
            onChange={this.handleChange}
            options={options}
            menuPlacement="auto"
          />
        </div>
      </div>
    );
  }
}

CountryFilter.propTypes = {
  getCountries: PropTypes.func.isRequired,
  countries: PropTypes.instanceOf(Array).isRequired,
  history: PropTypes.objectOf(Array).isRequired,
};

export default withRouter(CountryFilter);
