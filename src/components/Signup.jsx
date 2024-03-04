import React from 'react'

const Signup = () => {
  return (
    <>
                      <h2 className="text-3xl font-bold text-slate mb-6">Sign Up</h2>
                <form className="space-y-4 text-slate">
                    <div>
                        <label htmlFor="username" className=" block mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full rounded-md bg-white bg-opacity-30 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-3 py-2"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full rounded-md bg-white bg-opacity-30 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-3 py-2"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className=" block mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full rounded-md bg-white bg-opacity-30 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-3 py-2"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Sign Up
                    </button>
                </form>
    </>
  )
}

export default Signup
