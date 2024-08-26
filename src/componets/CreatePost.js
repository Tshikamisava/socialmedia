import React, { useState } from 'react';

const CreatePost = ({ onContentChange }) => {
  const [text, setText] = useState('');
  const [media, setMedia] = useState(null);

  const handleMediaChange = (e) => {
    setMedia(e.target.files[0]);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    onContentChange({ text: e.target.value, media });
  };

  return (
    <div>
      <textarea
        placeholder="Write your post..."
        value={text}
        onChange={handleTextChange}
      />
      <input type="file" onChange={handleMediaChange} />
    </div>
  );
};

export default CreatePost;
