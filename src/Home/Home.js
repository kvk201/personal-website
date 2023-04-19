import HomeAbout from './HomeAbout';
import HomeWork from './HomeWork';
import HomeSkills from './HomeSkills';
import HomeSkillsOne from './HomeSkillsOne';
import Contact from './Contact';

//this is our root react component
function Home() {
  return (
    <div className="home">
      <HomeAbout/>
      <HomeSkillsOne/>
      <HomeSkills/>
      <HomeWork/>
      <Contact/>
    </div>
  );
}

export default Home;
