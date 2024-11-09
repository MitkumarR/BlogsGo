import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const getBlogs = async () => {
  try {
    const response = await axios.get(`${API_URL}/blogs`);
    console.log('Blogs fetched:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw new Error('Failed to fetch blogs. Please try again later.');
  }
};

export const postBlog = async (data: { title: string; content: string }) => {
  try {
    const response = await axios.post(`${API_URL}/blogs`, data);
    console.log('Blog posted:', response.data);
    return response.data; // Return data if needed
  } catch (error) {
    console.error('Error posting blog:', error);
    throw new Error('Failed to post blog. Please try again later.');
  }
};

export const getBlogById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/blogs/${id}`);
    console.log('Blog fetched:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw new Error('Failed to fetch blog. Please try again later.');
  }
};
