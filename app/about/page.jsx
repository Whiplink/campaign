export default function About() {
  return (
    <div className="pt-56 text-center">
      <h1 className="font-bold text-6xl mb-10 text-background">Core Value</h1>
      <div className="bg-background py-24 px-4 md:px-6">
        <h2 className="italic text-4xl mb-8">SHOCK - CAMARINES NORTE</h2>
        <p className="text-2xl max-w-3xl mx-auto text-center leading-10">
          <R>S</R>-ustainable agri-fishery, necological management, social
          welfare and need-based infrastructure development
          <br /> <R>H</R>-ealth services and Education (Improve medical
          facilities and health services access, schools subsidy to support
          teachers and students, one family at least one professional)
          <br /> <R>O</R>-pportunity of people to experience the fullness of
          life (Sustainable livelihood projects, industrial development with
          full controlled production processing and marketing value-added
          agri-fishery products)
          <br />
          <R>C</R>-ultural-sensitive governance, Care for God&apos;s creation
          and divine love and respect for Camnortenyo (Environmental friendly
          projects, Moral Recovery Program, servant-leadership &
          no-bully/cursing/child-like kind of leaders and peoples)
          <br /> <R>K</R>- nowledge and aware Camnortenyo (Accountability and
          transparency to lessen and/or eliminate CORRUPTION)
        </p>
      </div>
    </div>
  );
}

const R = ({ children }) => {
  return <span className="text-red-500 text-4xl">{children}</span>;
};
