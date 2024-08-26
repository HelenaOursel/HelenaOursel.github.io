import React from 'react';
import Presentation from './Presentation';
import Skills from './Skills';
import Experience from './Experience';
import Formation from './Formation';
import '../Style/Profile.scss';

function Profile() {
  return (
    <div className="Profile">
      <Presentation />
      <Skills />
      <Experience />
      <Formation />
    </div>
  );
}

export default Profile;