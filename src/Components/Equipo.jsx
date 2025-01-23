import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Steven Rodriguez',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      name: 'Valentina Reyes',
      role: 'Comunicadora Visual',
      image: 'https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
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
