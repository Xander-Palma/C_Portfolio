import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-73px)] flex flex-col items-center justify-start pt-12">
        {/* Profile Image Centered Top */}
        <div className="flex flex-col items-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-card overflow-hidden flex items-center justify-center mb-8">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 10%' }}
            />
          </div>
        </div>
        {/* Text Centered Below Image */}
        <div className="flex flex-col items-center text-center animate-fade-in">
          <p className="text-xl md:text-2xl text-foreground mb-2">Hello Welcome to my Portfolio, I am</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-4" >
            Frank Cagadas
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
