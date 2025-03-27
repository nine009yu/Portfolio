import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa";
function DownloadButton({ fileUrl, fileName }) {
  const openFile = () => {
    window.open(fileUrl, "_blank");
};
  return (
      <button
          onClick={openFile}
          className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan"
      >
          {fileName === "github" ? fileName : `Download ${fileName}`}
          {fileName === "github" ? <>&nbsp;<FaGithub/></> : ""}
    
         
      </button>
  );
}
const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
      <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
      <p className='text-white text-xl'>&emsp;&emsp;I am a student with a strong passion for coding and problemsolving. I have experience <br/>with programming languages like Java,
        Python, and JavaScript, and am eager to apply <br/>my skills in realworld scenarios. I enjoy working in teams, continuously learning,
        and improving my programming abilities. I am looking for an
        internship where I can grow professionally and contribute to
        exciting and impactful projects.
      </p>
      <div className="flex gap-4">
        <Link to="projects" smooth={true} spy={true} duration={500} offset={-130} className="cursor-pointer"> 
          <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>My Project</button>
        </Link>
        <DownloadButton fileUrl="/files/Resume.pdf" fileName="Resume" />
        <DownloadButton fileUrl="/files/Transcript.pdf" fileName="Transcript" />
        <DownloadButton fileUrl="https://github.com/nine009yu?tab=repositories" fileName="github" />
      </div>
    </div>
  )
}

export default AboutMeText
