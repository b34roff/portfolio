export const ExpSection = () => {
  return (
    <section
      className="flex flex-col w-full gap-16 scroll-mt-24"
      id="experiences">
      <h2 className="text-3xl">
        {"->"} 3. <span className="font-bold">Experiences</span> :
      </h2>
      <div className="flex flex-col-reverse items-start justify-start gap-8">
        <ExpElement
          date="2022"
          title="HTML / CSS / JS"
          desc="Self-taught training on the fundamentals of web development. Acquired skills to create static websites using HTML, CSS, and JavaScript."
        />
        <ExpElement
          date="2022"
          title="React"
          desc="Introduction to React and its ecosystem. Gained experience in building dynamic web applications with React."
        />
        <ExpElement
          date="2023"
          title="NextJS & Vercel"
          desc="Specialization in NextJS. Learned how to develop web applications using NextJS and deploy them on Vercel."
        />
        <ExpElement
          date="2023"
          title="TailwindCSS / Prisma"
          desc="Training in TailwindCSS and Prisma. Mastered the creation of a web application with these technologies, utilizing NextJS with server and client components."
        />
        <ExpElement
          date="2023"
          title="AdonisJS / PostgreSQL"
          desc="Training in AdonisJS and PostgreSQL. Developed expertise in creating Back-End applications with AdonisJS and PostgreSQL."
        />
        <ExpElement
          date="2024"
          title="Vue 3 / NuxtJS"
          desc="Introduction to Vue 3 and NuxtJS. Gained proficiency in building dynamic web applications with Vue 3 and deploying them."
        />
      </div>
    </section>
  );
};

export const ExpElement = ({ date, title, desc }) => {
  return (
    <div className="flex items-center justify-center gap-10">
      <p className="text-md">{date}</p>
      <div className="min-w-2 min-h-2 bg-[#111] dark:bg-[#aaa]"></div>
      <div className="flex flex-col items-start justify-start gap-0">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-lg">{desc}</p>
      </div>
    </div>
  );
};
