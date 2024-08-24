
const InfoRow = ({ icon, text }) => {
  return (
    <div className="flex items-center justify-center lg:justify-start space-x-2">
      <img src={icon} alt="icon" className="w-5 h-5" />
      <span>{text}hello</span>
    </div>
  );
};

export default InfoRow;
