import React, { Component } from 'react'
import Select from 'react-select'
import customPalette from '../../constants/customPalette'

const tagModeOptions = [{ label: 'Match All', value: 'all' }, { label: 'Match Any', value: 'any' }]

class TagModeSelectDropdown extends Component {

  handleChange = (value, action) => {
    this.props.setTagMode(value.value);
    this.props.requestImagesFromFeed(this.props.tags, value.value);
  }
  
  render() {
        
    return (
      <Select
        defaultValue={tagModeOptions[0]}
        options={tagModeOptions}
        onChange={this.handleChange}
        styles={{
          container: (base) => ({
            ...base,
            marginLeft: '8px',

          }),
          control: (base, state) => ({
            ...base,
            borderWidth: state.isFocused ? '2px' : '0px',
            borderRadius: '20px',
            backgroundColor: customPalette.lightGrey

          }),
          singleValue: (base) => ({
            ...base,
            fontWeight: 'bold'
          }),
          option: (base, state) => ({
            ...base,
            color: state.isSelected ? 'white' : 'black'
          })
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: customPalette.flickrBlue,
          }
        })}
        components={{ IndicatorSeparator: null }}
      />
    )
  }

}

export default TagModeSelectDropdown

