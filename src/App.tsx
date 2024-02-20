import React from "react";
import "./App.css";

import Header from "./components/Header/Header";

import PhotoContext from "./contexts/PhotoContext";
import useFetchData from "./hooks/useFetchData";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading";
import Error from "./components/Error";
import MainContent from "./components/MainContent/MainContent";

const App = () => {
  const { data, loading, error } = useFetchData("https://api.pexels.com/v1/");

  return (
    <div className="App">
      <div className="app-container">
        {loading && <Loading />}
        {error && <Error message="Something went wrong!" />}
        {data && (
          <PhotoContext.Provider value={data}>
            <Header />
            <MainContent />
            <hr/>

            <Footer />
          </PhotoContext.Provider>
        )}
      </div>
    </div>
  );
};

export default App;
