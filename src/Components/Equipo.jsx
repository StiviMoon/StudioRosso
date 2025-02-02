import React from 'react';
import fts from '../img/PT1.jpg';
import ftv from '../img/PT2.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Steven Rodriguez',
      role: 'Full Stack Developer',
      image: fts, // Usa la variable importada
    },
    {
      name: 'Valentina Reyes',
      role: 'Comunicadora Visual',
      image: ftv, // Usa la variable importada
    },
  ];

  return (
    <section className="">
      <div className="container px-6 py-10 mx-auto">
      <h1 className="text-2xl font-dream font-bold text-center pb-20 pt-12 text-greengrove capitalize lg:text-6xl">
                Equipo Rosso
              </h1>
        <div className="xl:flex xl:items-center  flex flex-wrap justify-center text-center xl:-mx-4">
          
          
          <div className="grid grid-cols-1 gap-12 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <div key={index}>
                <img
                  className="object-cover h-[485px] rounded-2xl aspect-square"
                  src={member.image}
                  alt={member.name}
                />

                <h1 className="mt-4 text-2xl font-century text-gray-700 capitalize ">
                  {member.name}
                </h1>

                <p className="mt-2 text-gray-500 capitalize">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
