const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary orb - blue/violet */}
      <div 
        className="absolute top-20 right-[15%] w-[500px] h-[500px] rounded-full animate-float opacity-40"
        style={{
          background: "radial-gradient(circle at 30% 30%, hsl(220, 90%, 70%), hsl(220, 80%, 60%) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      
      {/* Secondary orb - peach */}
      <div 
        className="absolute top-[40%] left-[5%] w-[400px] h-[400px] rounded-full animate-float-delayed opacity-30"
        style={{
          background: "radial-gradient(circle at 70% 30%, hsl(20, 90%, 80%), hsl(20, 90%, 70%) 50%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      
      {/* Tertiary orb - cyan */}
      <div 
        className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full animate-pulse-soft opacity-35"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(185, 80%, 65%), hsl(185, 80%, 55%) 50%, transparent 70%)",
          filter: "blur(45px)",
        }}
      />
      
      {/* Small accent orb */}
      <div 
        className="absolute top-[60%] right-[40%] w-[200px] h-[200px] rounded-full animate-morph opacity-25"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(220, 80%, 70%), transparent 60%)",
          filter: "blur(30px)",
        }}
      />
    </div>
  );
};

export default FloatingOrbs;
