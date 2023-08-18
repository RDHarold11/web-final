const URL = "http://localhost:5500/trailers/";
import axios from "axios";

const createTrailer = async (data, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(URL, data, config);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const getTrailerAdmin = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(URL + "trailersAdmin", config);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const getTrailers = async () => {
  try {
    const response = await axios.get(URL);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const getTrailerById = async (id) => {
  try {
    const response = await axios.get(URL + id);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteTrailer = async (id, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = axios.delete(URL + id, config);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateTrailer = async (id, data, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = axios.put(URL + id, data, config);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const trailerService = {
  createTrailer,
  deleteTrailer,
  getTrailerAdmin,
  getTrailers,
  updateTrailer,
  getTrailerById,
};

export default trailerService;
