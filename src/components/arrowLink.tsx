
interface ArrowLinkProps {
    text: string;
}

const ArrowLink = ( {text}: ArrowLinkProps ) => {
  return (
    <button className="flex items-center space-x-2">
      <div className="relative flex items-center hover:underline">
        <div className="absolute -left-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"></div>
        <span className="relative z-1 pl-4 hover:underline">{text}</span>
      </div>
      <span className="text-black">→</span>
    </button>
  );
};

export default ArrowLink;