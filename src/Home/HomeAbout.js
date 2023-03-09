

function HomeAbout() {
    const description = "I like to think of myself as a passionate and creative problem solver. I have a Master’s in Computer Science from San Diego State University, CA. Using my 10+ years of cumulative programming experience I have loved building many beautiful websites and applications. \n\n Technology fascinates me and I have a deep desire to learn, grow and excel. If I were to pick my superpowers, they would be observation, adaptability, communication, collaboration, and interpersonal skills. \n\n My curiosity and passion for technology have been a guiding light since I was a child trying to fix computers for my family and neighbors. This made me a very popular kid in my neighborhood and everyone could count on me for their basic computer fixes for free, which gave me an immense sense of purpose and accomplishment and hence I decided to become a computer programmer. \n\n I believe in putting my heart, mind, and soul into everything I do because that is the secret to happiness and fulfillment. \n\n Namaste :)";

    return (
      <div className="home-about">
        <div className="photo"></div>
        <div className="description"><p>{description}</p></div>
      </div>
    );
  }
  
export default HomeAbout;
  