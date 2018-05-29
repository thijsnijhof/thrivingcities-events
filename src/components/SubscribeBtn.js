import React from 'react';
import './SubscribeBtn.css';
import MailChimp from 'react-mailchimp-form';

const SubscribeBtn = () => {
    return (

        <MailChimp
            className="subscribe-container"
            fields={[
                {
                    name: 'EMAIL',
                    placeholder:'email',
                    type:'email',
                    required:true
                }

            ]}
            message={
                {
                    sending: 'Sending...',
                    success: 'Thank you for signing up, we will send a confirmation!',
                    error: 'An unexpected error has occurred.',
                    empty: 'Please fill in your e-mail',
                    duplicate: 'You have already subscribed!',
                    button: 'Subscribe'
                }

            }
            action="https://coolstuffwebsite.us18.list-manage.com/subscribe/post?u=13cb6473efaef1fdb117ac3e5&amp;id=5cdc9dc77e"
        />


    )
};

export default SubscribeBtn;