import React from 'react';

const PlatformSelector = ({ platforms, onPlatformChange }) => {
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    onPlatformChange(name, checked);
  };

  return (
    <div>
      <h3>Select Platforms</h3>
      {platforms.map((platform) => (
        <div key={platform}>
          <label>
            <input
              type="checkbox"
              name={platform}
              onChange={handleCheckboxChange}
            />
            {platform}
          </label>
        </div>
      ))}
    </div>
  );
};

export default PlatformSelector;
