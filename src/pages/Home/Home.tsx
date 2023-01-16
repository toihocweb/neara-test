import React from "react";
import Header from "../../components/Header/Header";
import ServiceList from "../../components/Services/ServiceList";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <ServiceList />;
    </div>
  );
};

export default Home;
