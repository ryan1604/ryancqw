const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center w-full text-gray-500 text-sm py-4">
      <p>Copyright &copy; {year} Ryan Chua. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
