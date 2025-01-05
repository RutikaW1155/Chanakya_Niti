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
      img: 'https://via.placeholder.com/150',
      contributions: 30,
      srn: '02fe22bcs088',

    },
    {
      name: 'Priya Prasad',
      img: 'https://via.placeholder.com/150',
      contributions: 20,
      srn: '02fe22bcs088',

    },
    {
      name: 'Prasanna Shirahatti',
      img: '/prasanna.jpg',
      contributions: 35,
      srn: '02fe22bcs068',

    },
    {
      name: 'Rohan',
      img: 'https://via.placeholder.com/150',
      contributions: 40,
      srn: '02fe22bcs088',

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
