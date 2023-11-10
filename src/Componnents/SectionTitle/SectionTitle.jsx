

const SectionTitle = ({subHadding,Heading}) => {
    return (
        <div className="md:w-4/12 mx-auto my-8 text-center">
            <p className="mb-2 text-[#D99904] text-xl">---{Heading}---</p>
            <div className="border-y-4 py-4">
            <h3 className="text-4xl font-semibold uppercase">{subHadding}</h3>
            </div>
        </div>
    );
};

export default SectionTitle;