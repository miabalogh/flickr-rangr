import React, { Component, Fragment } from 'react';
import CreatableSelect from 'react-select/creatable';
import { Box } from '@mui/material';
import TagModeSelectDropDown from 'containers/TagModeSelectDropDown';
import customPalette from 'constants/customPalette';
import appConstants from 'constants/appConstants';


const createOption = (label) => ({
  label,
  value: label
})

const updateTagsList = (tag, tagsList) => {
  let existingTags = tagsList.map(e => e.label);
  if (existingTags.indexOf(tag) === -1) {
    return [...tagsList, createOption(tag)];
  }
  return tagsList;

}

class SearchBar extends Component {
  state = {
    inputVal: '',
    completedTags: []
  };

  handleChange = (value, action) => {
    this.setState({ completedTags: value });
    if (value.length < appConstants.tagsLimit) {
      this.props.setTagsLimitReached(false);
    }
    const newQueryTags = value.map(e => e.label).toString();
    this.props.setTags(newQueryTags);
    this.props.requestImagesFromFeed(newQueryTags, this.props.tagMode);
  }

  handleInputChange = (value) => {
    this.setState({ inputVal: value });
  };

  handleKeyDown = (event) => {
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        if (this.state.inputVal) {
          if (this.state.completedTags.length == appConstants.tagsLimit) {
            this.props.setTagsLimitReached(true)

          } else if (this.state.completedTags.length < appConstants.tagsLimit) {
            this.props.setTagsLimitReached(false);

            const updatedTagsList = updateTagsList(this.state.inputVal, this.state.completedTags);

            this.setState({ completedTags: updatedTagsList });
            this.setState({ inputVal: '' })

            const newQueryTags = updatedTagsList.map(e => e.label).toString();
            this.props.setTags(newQueryTags);
            this.props.requestImagesFromFeed(newQueryTags, this.props.tagMode);

            event.preventDefault()
          }
        }
        break

      default:
        break
    }
  }

  render() {
    const { inputVal, completedTags } = this.state;

    return (
      <Fragment>
        <Box sx={{ width: '80%', ml: 5, mr: 5 }}>
          <CreatableSelect
            isClearable
            isMulti
            components={
              { DropdownIndicator: TagModeSelectDropDown }
            }
            menuIsOpen={false}
            inputValue={inputVal}
            value={completedTags}
            placeholder='Start typing and press tab!'
            onInputChange={this.handleInputChange}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            styles={{
              control: (base, state) => ({
                ...base,
                borderWidth: state.isFocused ? '2px' : '0px',
                borderRadius: '20px',
                backgroundColor: customPalette.lightGrey
              }),
              multiValue: (base) => ({
                ...base,
                borderRadius: '20px',
                backgroundColor: `${customPalette.flickrBlue}98`,
              }),
              multiValueLabel: (base) => ({
                ...base,
                color: 'white'
              }),
              multiValueRemove: (base) => ({
                ...base,
                color: 'white',
                borderRadius: '20px'
              }),
            }}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: customPalette.flickrPink,
                danger: 'white',
                dangerLight: customPalette.flickrBlue
              }
            })}
          />
        </Box>
      </Fragment>


    );
  }
}

export default SearchBar

