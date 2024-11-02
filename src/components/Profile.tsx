// components/Profile.tsx
import React from 'react';
import type { FC } from 'react';
import ProfileImage from '../images/profile.jpg';

const Profile: FC = () => (
    <div className="
    bg-neutral-600
    flex relative items-center flex-col
    large:w-full large:m-0
  ">
        <img
            alt="profile"
            src={ProfileImage}
            className="aspect-auto h-full large:mt-2.5"
        />
        <div className="
      absolute bottom-10 p-2.5 rounded-[10px]
      bg-neutral-600 flex flex-col items-center
    ">
            <h3 className="profile-details__name">Sanjin Šarić</h3>
            <span className="text-body2 text-primary-200">Software Engineer</span>
        </div>
    </div>
);

export default Profile;