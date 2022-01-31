import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageSearchAPIHooksUseEffect = () => {
  const [searchText, setSearchText] = useState("");
  const [searchImages, setSearchImages] = useState([]);

  useEffect(() => callUnsplashAPI(searchText));

  const callUnsplashAPI = (searchQuery) => {
    const url =
      "http://api.unsplash.com/search/photos?client_id=-A8uCjYtpoVHBJdnhBr3k9yRKb5U8xqN5VzrhObcSBg&query=" +
      searchQuery;

    axios
      .get(url)
      .then((response) => setSearchImages(response.data.results))
      .catch((error) => console.log(error));
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     callUnsplashAPI(searchText);
  //   };

  const handleChange = (event) => {
    setSearchText(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div>
      <h1>Image Search API Using Hooks</h1>

      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search here..."
        />

        {/* <input type="submit" value="Search Images" /> */}
      </form>

      {searchImages.map((item) => (
        <img src={item.urls.small} alt="Unsplash Images"></img>
      ))}
    </div>
  );
};

export default ImageSearchAPIHooksUseEffect;
