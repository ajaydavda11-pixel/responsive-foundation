const BubbleBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <div className="bubble bubble-gold w-[300px] h-[300px] top-[10%] right-[-5%] opacity-60" />
    <div className="bubble bubble-emerald w-[200px] h-[200px] bottom-[15%] left-[-3%] opacity-50" />
    <div className="bubble bubble-ivory w-[250px] h-[250px] top-[60%] right-[20%] opacity-40" />
  </div>
);

export default BubbleBackground;
