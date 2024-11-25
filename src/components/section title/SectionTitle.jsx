const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto w-4/12 text-center mt-6">
      <p className="text-yellow-600 ">--- {subHeading} ---</p>
      <h3 className="uppercase py-4 text-4xl m-4 border-y-4 ">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
