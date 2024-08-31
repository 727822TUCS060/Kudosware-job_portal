import React from 'react';

const jobs = [
  {
    title: 'Software Engineer',
    eligibility: 'B.Tech in Computer Science or related field',
    salary: '₹6,00,000 - ₹8,00,000 per annum',
    availability: 'Immediate',
    location: 'Bangalore, India',
    lastDate: '2024-09-30',
  },
  {
    title: 'Data Analyst',
    eligibility: 'B.Sc in Statistics or related field',
    salary: '₹4,00,000 - ₹6,00,000 per annum',
    availability: '1 Month',
    location: 'Mumbai, India',
    lastDate: '2024-09-25',
  },
  {
    title: 'UI/UX Designer',
    eligibility: 'B.Des or equivalent experience',
    salary: '₹5,00,000 - ₹7,00,000 per annum',
    availability: 'Immediate',
    location: 'Remote',
    lastDate: '2024-10-05',
  },
  
];

const JobsPage = () => {
  return (
    <div className="jobs-container">
      <h2>Available Jobs</h2>
      <div className="jobs-grid">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <h3>{job.title}</h3>
            <p><strong>Eligibility:</strong> {job.eligibility}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Immediate Availability:</strong> {job.availability}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Last Date to Apply:</strong> {job.lastDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
