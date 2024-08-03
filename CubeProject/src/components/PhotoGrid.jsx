import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/PhotoGrid.css";
import { getRandomPhotos } from "../utils/GetRandomPhotos";

const PhotoGrid = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = () => {
      axios
        .get("http://localhost:5000/photos")
        .then((response) => setPhotos(getRandomPhotos(response.data, 9)))
        .catch((error) => console.error(error));
    };

    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <img key={index} src={photo.url} alt={`Customer ${index + 1}`} />
      ))}
    </div>
  );
};

export default PhotoGrid;
