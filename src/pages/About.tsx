import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="page-title animate-fade-in">About Me</h1>
        
        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="text-base md:text-lg text-foreground leading-relaxed text-justify font-medium">
            Hi, I’m Frank G. Cagadas, an IT student with a strong interest in technology and digital innovation. In my free time, I enjoy watching documentaries, as they help me broaden my perspective and better understand real-world issues, history, and technological advancements. I also like playing games such as CS2, Left 4 Dead, and Roblox, which not only serve as entertainment but also enhance my strategic thinking, teamwork, and problem-solving skills.

I chose Information Technology as my field of study because I am curious about how far technology can truly go and how it continues to shape the future. I am especially interested in how systems, software, and emerging technologies can be used to create efficient solutions and improve everyday life. Through my studies, I aim to continuously develop my technical skills and gain deeper knowledge that will prepare me for future challenges in the IT industry.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

