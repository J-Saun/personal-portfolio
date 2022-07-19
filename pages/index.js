import Button from "../components/Button/button";
import Navbar from "../modules/nav/navbar";
import Header from "../modules/header";
import Hero from "../modules/hero";
import Card from "../modules/cards/card";
import Head from "next/head";
import tw from "../utils/tailwind";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </Head>

      <div className="bg-body text-white font-poppins pb-12 ">
        <div className="bg-body text-white font-poppins pb-12">
          {/* <div className="custom-sidebar"></div> */}
          <header className="py-6">
            <Navbar />
            <Hero />
            {/*
             */}
          </header>

          {/* About Me */}
          {/* <div class=""> */}
            <div id="aboutMe" class="container mx-auto mt-64 flex flex-wrap justify-center">
              <div class="h-fit w-full md:w-1/3">
                {/* <div class="container mx-auto p-10"> */}
                {/* <div class="lg:flex lg:flex-wrap"> */}
                {/* <div class=" flex items-center justify-center p-4 md:flex-none md:w-1/3 lg:w-1/2"> */}
                <img
                  className=" mx-auto object-contain"
                  src="https://images.unsplash.com/photo-1610043808984-0b8b551afd5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  alt="Photo by Andras Vas on Unsplash"
                />
              </div>
              <div class="w-3/4 lg:w-1/2">
                {/* <div class="w-full"> */}
                {/* <p className=""> */}
                  <p className="text-xl m-5 md:p-10 flex-grow"> I've been a blue-collar
                  worker my entire life, and as much as
                  {/* I loved the work, unfortunately, the room for growth and */}
                  advancement was limited. For this reason, I decided to take a
                  leave from the workforce to pursue a new career field. The
                  time I have been able to commit to my education has been
                  invaluable to my professional growth. I am eager to re-enter
                  the professional sphere and apply my newfound qualifications
                  and knowledge to the job. That said, I have had the
                  opportunity to use my skills in real-world applications, which
                  have given me confidence in my ability to contribute and be
                  successful.
                </p>
              </div>
            </div>
          {/* </div> */}

          <div className="space-y-12 my-16">
            {/* Projects */}

            <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
              <section className="w-full">
                <h2 className="secondary-title">Projects</h2>
                <p id="projects" className="section-paragraph">
                  What I've worked on during my learning process
                </p>

                <div className="space-y-12 my-16">
                  {/* Project 1 */}
                  <div className="w-full border border-nav p-8 lg:px-16 lg:py-10 lg:space-x-16 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                    <div className="object-cover h-48 w-96">
                      <img
                        className="object-cover h-48 w-96"
                        src="https://images.unsplash.com/photo-1512205908084-f43bea685ff1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                        alt="Photo by Andras Vas on Unsplash"
                      />
                    </div>

                    {/* <!-- Project 2 Info --> */}
                    <div className="flex flex-wrap justify-center text-center lg:text-left lg:block mt-5 lg:mt-0">
                      <div className="flex">
                        <h3 className="text-white font-semibold text-3xl relative w-max two">
                          <a href="https://search.brave.com/search?q=tailwind+classes&source=desktop">
                            Fractal Tree
                          </a>
                          <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-theme"></span>
                          <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-theme"></span>
                        </h3>
                        <a
                          href="https://github.com/J-Saun"
                          className="ml-3 scale-75 hover:scale-100 transition ease-in-out duration-300"
                        >
                          <i className="fa-brands fa-github fa-2x"></i>
                        </a>
                      </div>

                      <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                        <div className="badge">React/Next.js</div>
                        <div className="badge">TailwindCss</div>
                        <div className="badge">HTML Canvas</div>
                        <div className="badge">Vercel</div>
                      </div>

                      <p className="text-secondary">User generated fractals.</p>
                    </div>
                  </div>
                  {/* Project 2 */}
                  <div className="w-full border border-nav p-8 lg:px-16 lg:py-10 lg:space-x-16 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                    <div className="object-cover h-48 w-96">
                      <img
                        className="object-cover h-48 w-96"
                        src="https://images.unsplash.com/photo-1513781419235-2988ecacab83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="Photo by Andras Vas on Unsplash"
                      />
                    </div>

                    {/* Project 3 Info */}
                    <div className="flex flex-wrap justify-center text-center lg:text-left lg:block mt-5 lg:mt-0">
                      <div className="flex">
                        <h3 className="text-white font-semibold text-3xl relative w-max two">
                          <a href="https://search.brave.com/search?q=tailwind+classes&source=desktop">
                            Yelp Clone
                          </a>
                          <span className="absolute -bottom-1 left-1/2 w-0 transition-all ease-in-out duration-300 h-1 bg-theme"></span>
                          <span className="absolute -bottom-1 right-1/2 w-0 transition-all ease-in-out duration-300 h-1 bg-theme"></span>
                        </h3>
                        <a
                          href="https://github.com/J-Saun"
                          className="ml-3 scale-75 hover:scale-100 transition ease-in-out duration-300"
                        >
                          <i className="fa-brands fa-github fa-2x"></i>
                        </a>
                      </div>

                      <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                        {/* <i class="fa-brands fa-js"></i> */}
                        {/* <i class="fa-brands fa-node"></i> */}
                        <div className="badge">Javascript</div>
                        <div className="badge">Node</div>
                        <div className="badge">Express</div>
                        <div className="badge">EJS</div>
                        <div className="badge">MongoDB</div>
                        <div className="badge">Heroku</div>
                      </div>
                      <div>
                        <p className="text-secondary">
                          Recreation review & rating site.
                        </p>
                      </div>
                      {/* <div className="flex flex-col">
                    <a>Github</a>
                    <a>Hosted Site</a>
                  </div> */}
                    </div>
                  </div>
                  {/* Project 3 */}
                  <div className="w-full border border-nav p-8 lg:px-16 lg:py-10 lg:space-x-16 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                    <div className="object-cover h-48 w-96">
                      <img
                        className="object-cover h-48 w-96"
                        src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                        alt="Photo by Andras Vas on Unsplash"
                      />
                    </div>

                    {/* Project 3 Info */}
                    <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                      <h3 className="text-white text-3xl font-semibold">
                        Clients & <span className="">Example</span> Sites
                      </h3>

                      <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                        <div className="badge">
                          <a>Postural Chiropractic</a>
                        </div>
                        <div className="badge">
                          Off The Chazz Fishing Adventure
                        </div>
                      </div>

                      {/* <p class="text-secondary">User generated fractals.</p> */}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Contact me */}
            <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
              <section className="w-full">
                <h2 className="secondary-title">Contact me</h2>
                <p id="contact" className="section-paragraph">
                  Feel free to to reach out any time, through any method below.
                </p>

                <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-10">
                  <div className="space-y-8">
                    <div>
                      <label className="text-white block mb-6 text-xl font-bold">
                        Name
                      </label>
                      <input className="w-full border border-input-border bg-input px-4 py-4" />
                    </div>
                    <div>
                      <label className="text-white block mb-6 text-xl font-bold">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full border border-input-border bg-input px-4 py-4"
                      />
                    </div>
                    <div>
                      <label className="text-white block mb-6 text-xl font-bold">
                        Message
                      </label>
                      <textarea
                        type="email"
                        className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"
                      ></textarea>
                    </div>
                    <button className="px-6 py-2 bg-theme text-white font-bold">
                      <i className="fa-solid fa-paper-plane mr-3"></i> Send it!
                    </button>
                  </div>

                  <div className="mt-12">
                    {/* Contact info */}
                    <a className="flex">
                      <i className="fa-solid fa-phone mr-4 fa-2x"></i>{" "}
                      <p className="text-secondary">121-121-1234</p>
                    </a>

                    <a
                      href="mailto:email@mydomain.com"
                      className="text-secondary mt-3 flex"
                    >
                      <i className="fa-solid fa-envelope fa-2x mr-4"></i>{" "}
                      email@mydomain.com
                    </a>
                    {/* Socials */}
                    <div className="flex mt-20 space-x-6">
                      {/* linkedin */}
                      <a href="https://www.linkedin.com/in/joshua-a-saunders/">
                        <i className="fa-brands fa-linkedin fa-3x"></i>
                      </a>
                      {/* Github */}
                      <a href="https://github.com/J-Saun">
                        <i className="fa-brands fa-github fa-3x"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
