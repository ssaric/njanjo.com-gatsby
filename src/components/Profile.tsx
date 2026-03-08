import React from 'react';
import type { FC } from 'react';
import ProfileImage from '../images/profile.jpg';

const Profile: FC = () => (
    <div className="
        bg-neutral-600 relative
        w-full lg:w-[300px] xl:w-[340px]
        flex-shrink-0 overflow-hidden
    ">
        <img
            alt="profile"
            src={typeof ProfileImage === 'string' ? ProfileImage : ProfileImage.src}
            className="w-full h-full object-cover"
        />
        <div className="
            absolute bottom-0 left-0 right-0
            bg-gradient-to-t from-neutral-700/90 to-transparent
            p-5 pt-12
            flex flex-col items-start
        ">
            <h3 className="text-[28px] font-bold leading-tight">Sanjin Šarić</h3>
            <span className="text-body2 text-primary-200 mt-1">Senior Software Engineer</span>
        </div>
    </div>
);

export default Profile;
