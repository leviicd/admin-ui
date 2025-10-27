import React from "react";
import UserCard from "./UserCard";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <UserCard 
          name="lepi" 
          email="levi@gmail.com"
          street="Jl. Gergaji"
          city="Tegal"
        />
          <UserCard 
          name="cen" 
          email="cen@gmail.com"
          street="Jl. Pelem"
          city="Semarang"
        />
          <UserCard 
          name="mus"
          email="mus@gmail.com"
          street="Jl. Raya"
          city="Bandung" 
        />
        </div>
      </div>
    </>
  );
}

export default Exercise;