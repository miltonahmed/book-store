
const Button = ({
  text,
  bg = '#59C6D2',
  fontName = 'Montserrat',
  fontWeight = 'bold',
  size = '18px',
  color = 'white',
  paddingY = 18,
  paddingX = 28,
  radius = 8,
}) => {
  return (
    <button
      style={{
        backgroundColor: bg,
        fontFamily: fontName,
        fontWeight,
        color,
        fontSize: size,
        padding: `${paddingY}px ${paddingX}px`,
        borderRadius: `${radius}px`,
      }}
      className="shadow-md hover:opacity-90 transition cursor-pointer"
    >
      {text}
    </button>
  );
};

export default Button;

