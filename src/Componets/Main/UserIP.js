import React, { useEffect, useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const UserIP = () => {
  const [ip, setIp] = useState('');
  const [location, setLocation] = useState('');
  const emailSentRef = useRef(false);  

  useEffect(() => {
    const fetchIPAndLocation = async () => {
      try {
        // Fetching the IP address
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        setIp(ipData.ip);

        // Fetching the geolocation data using ipinfo.io or ipstack
        const locationResponse = await fetch(`https://ipinfo.io/${ipData.ip}/geo`);
        const locationData = await locationResponse.json();
        
        // Extracting latitude and longitude
        const [latitude, longitude] = locationData.loc.split(',');

        setLocation(`City: ${locationData.city}, Region: ${locationData.region}, Country: ${locationData.country}, Latitude: ${latitude}, Longitude: ${longitude}`);

        if (!emailSentRef.current) {
          const templateParams = {
            from_email: 'website@yourdomain.com',
            to_name: 'Harut',
            message: `Visitor IP: ${ipData.ip}\nLocation: City: ${locationData.city}, Region: ${locationData.region}, Country: ${locationData.country}\nCoordinates: Latitude: ${latitude}, Longitude: ${longitude}`,
            to_email: 'htarzyanh@gmail.com',
            subject: `New Visitor IP: ${ipData.ip}`,
          };

          await emailjs.send(
            'service_122l67l',
            'template_8agf0u7',
            templateParams,
            'flxSq_5KpLSb6w2yY'
          );

          emailSentRef.current = true;  
        }
      } catch (error) {
        console.error('Error fetching IP address or sending email:', error);
      }
    };

    fetchIPAndLocation();
  }, []); 

  return null;
};

export default UserIP;
