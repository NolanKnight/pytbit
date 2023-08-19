import React from "react";

const Home = () => {
    return(
        <div className="w-full h-screen bg-green-800">
            <h1 className="text-blue-300 text-9xl text-center">Pyt Bit</h1>
            <p className="white text-lg mt-6 mr-3 ml-3 mb-6 text-white">Pyt Bit is a framework for python that allows you to create websites and deploy them. When deployed, your website will be hosted at pybit.vercel.app/&lt;your-project-name&gt;. Your pages besides the index page will be hosted at pybit.vercel.app/&lt;your-project-name&gt;/&lt;your-page-name&gt;. To use PytBit, you must install the CLI:</p>

            <div className="w-full h-fit grid place-items-center">
                <a className="w-44 h-12 rounded-lg bg-blue-300 text-green-800 grid place-items-center" href='https://github.com/pytbit/pytbit-cli/archive/main.zip'>Download Pyt Bit CLI</a>
            </div>

            <p className="white text-lg mt-6 mr-3 ml-3 mb-6 text-white">To create a project with Pyt Bit, run <span className="bg-gray-800 p-1 rounded-lg text-inherit">pytbit init</span>. To deploy your project to Pyt Bit, run <span className="bg-gray-800 p-1 rounded-lg text-inherit">pytbit deploy</span>.</p>
        </div>
    );
}

export default Home;