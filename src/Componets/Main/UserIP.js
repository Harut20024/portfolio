import React, { useEffect, useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const UserIP = () => {
  const [ip, setIp] = useState('');
  const emailSentRef = useRef(false);  

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIp(data.ip);

        if (!emailSentRef.current) {
          const templateParams = {
            from_email: 'website@yourdomain.com',
            to_name: 'Harut',
            message: `Visitor IP: ${data.ip}`,
            to_email: 'htarzyanh@gmail.com',
            subject: `New Visitor IP: ${data.ip}`,
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

    fetchIP();
  }, []); 

  return null;
};

export default UserIP;
