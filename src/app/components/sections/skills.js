export default function Skills() {
  const skills = [
    {
      category: "Back End Development",
      items: [
        { name: "NodeJs", image: "/assets/back-end/node.png" },
        { name: "ExpressJS", image: "/assets/back-end/express.png" },
        { name: "NestJS", image: "/assets/back-end/nestjs.png" },
        { name: "AdonisJS", image: "/assets/back-end/AdonisJS.png" },
        { name: "TypeScript", image: "/assets/back-end/typescript.png" },
        { name: "GraphQL", image: "/assets/back-end/GraphQL.png" },
        { name: "PHP", image: "/assets/back-end/php.png" },
        { name: "Laravel", image: "/assets/back-end/laravel.png" },
        { name: "CodeIgniter", image: "/assets/back-end/CodeIgniter.png" },
        { name: "AWS Lambda", image: "/assets/back-end/AWS.png" },
        { name: "Docker", image: "/assets/back-end/Docker.png" },
        { name: "Kubernetes", image: "/assets/back-end/Kubernetes.png" },
        { name: "Mongoose", image: "/assets/back-end/Mongoosejs.png" },
        { name: "Sequelize", image: "/assets/back-end/Sequelize.png" },
        { name: "KnexJs", image: "/assets/back-end/Knexjs.png" },
        { name: "Sanity CMS", image: "/assets/back-end/Sanity.png" },
        { name: "Python", image: "/assets/back-end/python.png" },
        { name: "Django", image: "/assets/back-end/django.png" },
        { name: "Ruby on Rails", image: "/assets/back-end/ruby.png" },
        { name: "Java", image: "/assets/back-end/java.png" },
        { name: "C#", image: "/assets/back-end/c.png" },
      ],
    },
    {
      category: "Front End Development",
      items: [
        { name: "NextJs", image: "/assets/front-end/nextjs.png" },
        { name: "ReactJs", image: "/assets/front-end/react.png" },
        { name: "Angular", image: "/assets/front-end/angular.png" },
        { name: "Vue.js", image: "/assets/front-end/vue.png" },
        { name: "Nuxt JS", image: "/assets/front-end/Nuxt JS.png" },
        { name: "Hugo", image: "/assets/front-end/Hugo.png" },
        { name: "Gatsby", image: "/assets/front-end/Gatsby.png" },
        { name: "Tailwind CSS", image: "/assets/front-end/tailwind.png" },
        { name: "Bootstrap", image: "/assets/front-end/bootstrap.png" },
        { name: "Sass", image: "/assets/front-end/Sass.png" },
        { name: "HTML-5", image: "/assets/front-end/html.png" },
        { name: "JavaScript", image: "/assets/front-end/javascript.png" },
        { name: "jQuery", image: "/assets/front-end/jquery.png" },
        { name: "Redux", image: "/assets/front-end/redux.png" },
        { name: "Material-UI", image: "/assets/front-end/mui.png" },
        { name: "Ant Design", image: "/assets/front-end/ant-design.png" },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", image: "/assets/database/mongodb.png" },
        {
          name: "Firebase",
          image: "/assets/database/firebase.png",
        },
        { name: "PostgreSQL", image: "/assets/database/postgre.png" },
        { name: "MySQL", image: "/assets/database/mysql.png" },
        { name: "SQLite", image: "/assets/database/sqlite.png" },
        { name: "Oracle", image: "/assets/database/oracle.png" },
        { name: "SQL Server", image: "/assets/database/mssql.png" },
        { name: "DynamoDB", image: "/assets/database/dynamodb.png" },
        { name: "Redis", image: "/assets/database/redis.png" },
        { name: "Cassandra", image: "/assets/database/cassandra.png" },
        { name: "CouchDB", image: "/assets/database/couchdb.png" },
        { name: "Amazon Neptune", image: "/assets/database/neptune.png" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Personal Skills"
    >
      {/* Heading */}
      <h2 className="text-4xl mb-8 font-bold tracking-tight text-slate-200 sm:text-5xl">
        Skills
      </h2>
      <div className="space-y-8">
        {skills.map((skillCategory, index) => (
          <div key={index}>
            <h2 className="text-lg font-medium tracking-tight text-slate-200 sm:text-xl mb-4">
              {skillCategory.category}
            </h2>
            <div className="flex flex-wrap gap-4">
              {skillCategory.items.map((item, itemIndex) => (
                <div key={itemIndex} className="text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-contain p-2 rounded-lg"
                  />
                  <p className="mt-2 text-xs text-slate-600">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
