import React from 'react';
import ContributorCard from '../components/ContributorCard'; // Make sure to adjust the path accordingly

const ContributorsPage = () => {
  // Static data for 4 contributors
  const contributors = [
    {
      id: 1,
      login: 'Contributor 1',
      avatar_url: 'https://example.com/avatar1.jpg', // Replace with actual avatar URL
      contributions: 45
    },
    {
      id: 2,
      login: 'Contributor 2',
      avatar_url: 'https://example.com/avatar2.jpg',
      contributions: 30
    },
    {
      id: 3,
      login: 'Contributor 3',
      avatar_url: 'https://example.com/avatar3.jpg',
      contributions: 25
    },
    {
      id: 4,
      login: 'Contributor 4',
      avatar_url: 'https://example.com/avatar4.jpg',
      contributions: 20
    }
  ];

  return (
    <div className="contributors-page">
      <h2 className="text-center my-4">Our Contributors</h2>
      <div className="d-flex flex-wrap justify-content-evenly">
        {contributors.map((contributor) => (
          <div key={contributor.id}>
            <ContributorCard
              name={contributor.login}
              img={contributor.avatar_url}
              contributions={contributor.contributions}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributorsPage;
