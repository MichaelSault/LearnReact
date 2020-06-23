import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = props => {

    const { link, image, altText } = props.socialProfile;

    return (
        <span>
            <a href = {link}><img src = {image} alt = {altText} style = {{width: 40, height: 40, margin: 10}}/></a>
        </span>
    )
}

const SocialProfiles = () => (
    <div>
        <h2>Connect with me!</h2>
        <div>
            {
                SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                    return <SocialProfile key = {SOCIAL_PROFILE.id} socialProfile = {SOCIAL_PROFILE} />;
                })
            }
        </div>
    </div>
)

export default SocialProfiles;