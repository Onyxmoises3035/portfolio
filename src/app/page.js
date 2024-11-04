'use client'
import { useState } from "react";
import es from "@/locale/es";
import en from "@/locale/en";
import Bar from "@/components/Bar";
import About_me from "@/components/About_me";
import Skills from "@/components/Skills";

const Home = () => {

  const [lan, setLan] = useState(en)

  const changeLan = () => {
    setLan((lan === en) ? es : en)
  }

  

  return (
    <div className="flex content-center justify-center size-full containerColor">
      <div className="opacity-0 timeNight"></div>
      <div className="opacity-0 timeDay"></div>
      <div className="opacity-0 bg-[url('/images/day.png')]"></div>
      <div className="opacity-0 bg-[url('/images/n01.png')]"></div>
      <div className="opacity-0 bg-[url('/images/n02.png')]"></div>
      <div className="opacity-0 bg-[url('/images/n03.png')]"></div>
      <div className="opacity-0 bg-[url('/images/night.png')]"></div>
      <div className="opacity-0 bg-[url('/images/d01.png')]"></div>
      <div className="opacity-0 bg-[url('/images/d02.png')]"></div>
      <div className="opacity-0 bg-[url('/images/d03.png')]"></div>
      <Bar lan={lan} change={changeLan}/>
      <div>
        <About_me lan={lan} />
        <Skills lan={lan} />
        <div id="projects" className="section">projects (mostrar proyectos con la tecnología echa, explicación de lo que son y una preview)</div>
        <div id="education" className="section">education (cursos, certificados y títulos)</div>
        <div id="contact" className="section">contact (git, LinkedIn, correo y tal vez WhatsApp)</div>
      </div>
    </div>
  );
}
export default Home;