// Mock data for static website
const mockJobs = [
  {
    _id: '1',
    title: 'Frontend Developer',
    description: 'We are looking for an experienced Frontend Developer...',
    requirements: ['React experience', 'JavaScript expertise', 'HTML/CSS'],
    location: 'Remote',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '8-12 LPA'
  },
  {
    _id: '2',
    title: 'UI/UX Designer',
    description: 'Seeking a creative UI/UX Designer...',
    requirements: ['Figma', 'User Research', 'Prototyping'],
    location: 'Mumbai',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '10-15 LPA'
  }
];

// Jobs API - Static version
export const getAllJobs = async () => {
  return mockJobs;
};

export const getJob = async (id) => {
  const job = mockJobs.find(j => j._id === id);
  if (!job) throw new Error('Job not found');
  return job;
};

export const createJob = async (jobData) => {
  // In static version, just return the data
  return {
    ...jobData,
    _id: String(Date.now())
  };
};

export const updateJob = async (id, jobData) => {
  return {
    ...jobData,
    _id: id
  };
};

export const deleteJob = async (id) => {
  return { success: true };
};

// Auth functions - Static version
export const login = async (email, password) => {
  if (email === 'admin@example.com' && password === 'admin123') {
    return {
      token: 'mock-token',
      user: {
        id: '1',
        email: 'admin@example.com',
        role: 'admin'
      }
    };
  }
  throw new Error('Invalid credentials');
};

export const getCurrentUser = async () => {
  const token = localStorage.getItem('innomatrics_admin_token');
  if (!token) throw new Error('Not authenticated');
  
  return {
    id: '1',
    email: 'admin@example.com',
    role: 'admin'
  };
};

// Export functions directly
export default {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  login,
  getCurrentUser
}; 