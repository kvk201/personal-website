import HomeAbout from './HomeAbout';
import HomeWork from './HomeWork';
import HomeSkills from './HomeSkills';
import Contact from './Contact';

//this is our root react component
function Home() {
  return (
    <div className="home">
      <HomeAbout/>
      <HomeSkills/>
      <HomeWork/>
      <Contact/>
    </div>
  );
}

export default Home;
