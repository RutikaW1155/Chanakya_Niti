import React from 'react';
import ContributorCard from './ContributorCard';

function Contributors() {
  const contributors = [
    {
      name: 'Rutika Wagalekar',
      img: '/rutika.jpg',
      contributions: 25,
      srn: '02fe22bcs088',
    },
    {
      name: 'Gayatri',
      img: '/WhatsApp Image 2025-01-06 at 14.16.37_72fcf59a.jpg',
      contributions: 30,
      srn: '02fe22bcs037',

    },
    {
      name: 'Priya Prasad',
      img: '/WhatsApp Image 2025-01-06 at 14.18.35_e2c838fe.jpg',
      contributions: 20,
      srn: '02fe22bcs073',

    },
    {
      name: 'Prasanna Shirahatti',
      img: '/prasanna.jpg',
      contributions: 35,
      srn: '02fe22bcs068',

    },
    {
      name: 'Rohan',
      img: '/WhatsApp Image 2025-01-05 at 22.20.24_868fd4eb.jpg',
      contributions: 40,
      srn: '02fe23bcs402',

    },
  ];

  return (
    <div className="contributors-container">
      {contributors.map((contributor, index) => (
        <ContributorCard key={index} contributor={contributor} />
      ))}
    </div>
  );
}

export default Contributors;
