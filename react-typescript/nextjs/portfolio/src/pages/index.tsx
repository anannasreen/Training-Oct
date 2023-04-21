import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { services } from "../../data";
import ServiceCard from "../../components/ServiceCard";
// import { services } from "../../data";

const index = () => {
  // console.log(services);
  // console.log('client', services);

  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        I am currently pursuing B.Tech Degree (Final Year) in Compute Science
        Engineering from Academy of Technology. I have 3+ years of experince in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  // calculation

  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();

  // console.log("server", services);

  return {
    props: {
      services: data.services,
    },
  };
};
