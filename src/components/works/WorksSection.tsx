import useGetCartoons from "@/react-query/useGetCartoons";
import Container from "../Container";
import CartoonCard from "./CartoonCard";

const WorksSection = () => {
  const { data } = useGetCartoons();

  return (
    <section className="mt-[40px]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-x-4 md:gap-y-8 gap-4">
          {data
            ? data.map((item, i) => <CartoonCard {...item} key={i} />)
            : null}
        </div>
      </Container>
    </section>
  );
};

export default WorksSection;
