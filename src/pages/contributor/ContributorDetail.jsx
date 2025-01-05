import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContributorDetail() {
  const contributorName = localStorage.getItem('contributorName');
  const [mergedPRs, setMergedPRs] = useState([]);
  const [error, setError] = useState(null);

  const owner = 'Avdhesh-Varshney'; // Replace with your GitHub owner/org
  const repo = 'chanakya-niti'; // Replace with your repository name

  // Function to recursively fetch all PRs using pagination
  const fetchAllPRs = async (page = 1, allPRs = []) => {
    try {
      const url = `https://api.github.com/repos/${owner}/${repo}/pulls?state=closed&per_page=100&page=${page}`;
      const response = await axios.get(url);

      if (response.data.length === 0) return allPRs;

      // Recursively fetch next pages
      return await fetchAllPRs(page + 1, [...allPRs, ...response.data]);
    } catch (error) {
      setError(error);
      console.error('Error fetching PRs:', error);
      return allPRs; // Return fetched PRs so far
    }
  };

  // Function to fetch and filter merged PRs
  const fetchMergedPRs = async () => {
    try {
      const allPRs = await fetchAllPRs();

      // Filter PRs authored by the contributor and merged
      const filteredPRs = allPRs.filter(
        (pr) =>
          pr.user?.login.toLowerCase() === contributorName.toLowerCase() &&
          pr.merged_at
      );

      setMergedPRs(filteredPRs);
    } catch (error) {
      setError(error);
      console.error('Error filtering PRs:', error);
    }
  };

  // Fetch merged PRs on component mount
  useEffect(() => {
    if (contributorName) {
      fetchMergedPRs();
    } else {
      setError({ message: "Contributor name is missing in localStorage." });
    }
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Merged PRs by {contributorName}</h2>

      {error && (
        <div className="alert alert-danger text-center">
          Error: {error.message || 'Something went wrong.'}
        </div>
      )}

      {mergedPRs.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-center">
          {mergedPRs.map((pr) => (
            <div key={pr.number} className="card mx-3 my-2" style={{ width: '18rem' }}>
              <div className="card-header fw-bold">PR #{pr.number}</div>
              <div className="card-body">
                <h5 className="card-title">{pr.title}</h5>
                <a
                  href={pr.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary my-2"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !error && (
          <div className="text-center my-4">
            <h5>No merged PRs found for {contributorName}.</h5>
          </div>
        )
      )}
    </div>
  );
}

export default ContributorDetail;
