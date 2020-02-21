import React from "react";
import PropTypes from "prop-types";

function NewTapForm(props) {
  let _name,
    _brand,
    _price,
    _alcoholContent = null;

  const handleFormSubmission = e => {
    e.preventDefault();
    props.onNewTapCreation({
      name: _name.value,
      brand: _brand.value,
      price: _price.value,
      alcoholContent: _alcoholContent.value,
      timestamp: new Date()
    });

    _name.value = "";
    _brand.value = "";
    _price.value = "";
    _alcoholContent.value = "";
  };

  return (
    <div>
      <form onSubmit={handleFormSubmission}>
        <input
          type="text"
          placeholder="Tap Name"
          ref={input => {
            _name = input;
          }}
        />
        <input
          type="text"
          placeholder="brand"
          ref={input => {
            _brand = input;
          }}
        />
        <input
          type="text"
          placeholder="price"
          ref={input => {
            _price = input;
          }}
        />
        <input
          type="text"
          placeholder="Alcohol Content"
          ref={input => {
            _alcoholContent = input;
          }}
        />
        <button type="submit">Help!</button>
      </form>
    </div>
  );
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default NewTapForm;
