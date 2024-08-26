import React, { useState } from 'react';
import CreatePost from './componets/CreatePost';
import PlatformSelector from './componets/PlatformSelector';
import PostScheduler from './componets/PostScheduler';
import { schedulePost } from './services/api';

const App = () => {
  const [content, setContent] = useState({});
  const [platforms, setPlatforms] = useState({
    Twitter: false,
    Facebook: false,
    LinkedIn: false,
  });
  const [scheduleDate, setScheduleDate] = useState(new Date());

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handlePlatformChange = (platform, checked) => {
    setPlatforms({ ...platforms, [platform]: checked });
  };

  const handleDateChange = (date) => {
    setScheduleDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedPlatforms = Object.keys(platforms).filter(
      (platform) => platforms[platform]
    );

    const postData = {
      content,
      platforms: selectedPlatforms,
      scheduleDate: scheduleDate.getTime(),
    };

    try {
      await schedulePost(postData);
      alert('Post scheduled successfully!');
    } catch (error) {
      console.error('Error scheduling post:', error);
      alert('Failed to schedule post.');
    }
  };

  return (
    <div className="App">
      <h1>Social Media Automation</h1>
      <form onSubmit={handleSubmit}>
        <CreatePost onContentChange={handleContentChange} />
        <PlatformSelector
          platforms={Object.keys(platforms)}
          onPlatformChange={handlePlatformChange}
        />
        <PostScheduler onDateChange={handleDateChange} />
        <button type="submit">Schedule Post</button>
      </form>
    </div>
  );
};

export default App;
