import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle("Blog")
    return (
        <div className='py-24 w-5/6 mx-auto'>
            <div className='grid lg:grid-cols-2 gap-10'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Difference between SQL and NoSQL</h2>
                        <div><ul>
                            <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) and 	Non-relational or distributed database system.</li>
                            <li>SQL databases have fixed or static or predefined schema and	No-SQL have dynamic schema</li>
                            <li>SQL databases are not suited for hierarchical data storage. But	No-SQL databases are best suited for hierarchical data storage.</li>
                            <li>SQL databases are best suited for complex queries but No-SQL databases are not so good for complex queries</li>
                            <li>SQL database are Vertically Scalable and No-SQL database are Horizontally scalable</li>
                            <li>SQL Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc.	No-SQL Examples are: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</li>
                        </ul>
                        </div>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Difference between SQL and NoSQL</h2>
                        <div><ul>
                            <li>1.
                                Javascript is a programming language that is used for writing scripts on the website. On the other hand,NodeJS is a Javascript runtime environment.</li>
                            <li>2.	Javascript can only be run in the browsers.But	We can run Javascript outside the browser with the help of NodeJS.</li>
                            <li>3.	It is basically used on the client-side.On the other hand	It is mostly used on the server-side.</li>
                            <li>4.	Javascript is capable enough to add HTML and play with the DOM.But Nodejs does not have capability to add HTML tags.</li>
                            <li>5.	Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.But V8 is the Javascript engine inside of node.js that parses and runs Javascript. </li>
                            <li>6.	Javascript is used in frontend development.And	Nodejs is used in server-side development.</li>
                            <li>7.	Some of the javascript frameworks are RamdaJS, TypedJS, etc. Some of the Nodejs modules are Lodash, express etc. But Node JS modules are to be imported from npm. </li>
                            <li>8.	It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. And Nodejs is written in C, C++ and Javascript.</li>
                        </ul>
                        </div>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is JWT, and how does it work?</h2>
                        <div>
                            <h4 className='font-semibold text-lg'>What is JWT</h4>
                            <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                            <span className='font-semibold text-lg'>How does it works</span>
                            <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                                A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                                <br />
                                Once decoded, you will get two JSON strings:
                                <br />
                                The header and the payload. <br />
                                The signature. <br />
                                The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                                The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                                There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                                The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. </p>
                        </div>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is JWT, and how does it work?</h2>
                        <div>
                            <p>NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                                NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.
                                So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next?
                                The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself.
                                If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;