import useTitle from "../../Hooks/useTitle";


const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className="container mx-auto w-3/4 justify-center my-12">
            <div className="collapse collapse-plus my-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-indigo-600 text-primary-content peer-checked:bg-blue-600 peer-checked:text-secondary-content">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content bg-primary text-dark-content border-2 peer-checked:bg-neutral-100 peer-checked:text-dark-content">
                    <p className="p-4">Access tokens and refresh tokens are essential components of modern web development. These tokens are used to authenticate users and grant them access to protected resources, such as APIs or web applications. In short, an access token is a piece of information that allows a user to access certain resources authorized by the provider. A refresh token, on the other hand, is used to obtain new access tokens after they have expired.</p>

                    <p className="p-4">When a user logs into an application using their credentials, they receive an access token that authenticates their.</p>
                </div>
            </div>
            <div className="collapse collapse-plus my-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-indigo-700 text-primary-content peer-checked:bg-blue-600 peer-checked:text-secondary-content">
                    Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content bg-primary text-dark-content border-2 peer-checked:bg-neutral-100 peer-checked:text-dark-content">
                    <p className="p-4">Comparing SQL and NoSQL databases is like comparing apples to oranges. Each type of database has its own unique strengths and weaknesses.</p>
                    <p className="p-4">SQL databases are great for handling structured data, making them the go-to choice for transactional systems like e-commerce platforms or banking software. On the other hand, NoSQL databases excel at handling unstructured data, making them a popular choice for big data applications like social media platforms or IoT devices.</p>
                </div>
            </div>
            <div className="collapse collapse-plus my-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-indigo-800 text-primary-content peer-checked:bg-blue-600 peer-checked:text-secondary-content">
                    What is express js? What is Nest JS?
                </div>
                <div className="collapse-content bg-primary text-dark-content border-2 peer-checked:bg-neutral-100 peer-checked:text-dark-content">
                    <p className="p-4">Express JS and Nest JS are both popular web frameworks for building server-side applications. ExpressJS has been around for quite some time and is widely used in the Node.js community. It is a minimalistic framework that focuses on simplicity, flexibility, and performance. On the other hand, NestJS is a relatively new framework that has gained popularity in recent years. It offers a scalable architecture patterned after Angular that provides developers with an organized structure for creating server-side applications.</p>
                </div>
            </div>
            <div className="collapse collapse-plus my-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-indigo-900 text-primary-content peer-checked:bg-blue-600 peer-checked:text-secondary-content">
                    What is MongoDB aggregate and how does it work?
                </div>
                <div className="collapse-content bg-primary text-dark-content border-2 peer-checked:bg-neutral-100 peer-checked:text-dark-content">
                    <p className="p-4">MongoDB Aggregate is a powerful framework for data processing and analysis. It allows you to perform complex operations on your data, such as filtering, grouping, and sorting. With MongoDB Aggregate you can easily access the information that is most relevant to your business needs. </p>
                    <p className="p-4">The way MongoDB Aggregate works is by taking a collection of documents (similar to rows in a traditional database) and applying an aggregation pipeline to them. This pipeline consists of stages where each stage performs some form of operation on the document set.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;