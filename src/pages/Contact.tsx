import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import Form from "@/components/services/Form";
import useGetContactUs from "@/react-query/useGetContactUs";
import useGetPages from "@/react-query/useGetPages";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { data } = useGetPages();

  const { data: contactData } = useGetContactUs();

  return (
    <div>
      <HeroSection
        size="small"
        page="contact"
        title={data ? data[3].header : ""}
        banner={data ? data[3].banner.path : ""}
      />

      <section className="md:mt-20 mt-10">
        <Container>
          <div className="flex sm:flex-row flex-col items-center sm:items-start gap-[18px] justify-between">
            {contactData
              ? contactData.map((item, i) => (
                  <div
                    key={i}
                    className="w-full max-w-[380px] text-center flex flex-col gap-4"
                  >
                    <img
                      width={64}
                      height={64}
                      src={item.image}
                      className="w-[64px] h-[64px] mx-auto"
                    />
                    <h2 className="text-[24px] text-eerieBlack font-medium leading-[125%]">
                      {item.title}
                    </h2>
                    <div
                      className="text-[16px] leading-[150%] text-bauhaus"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    ></div>
                  </div>
                ))
              : null}
          </div>

          <Form />
        </Container>

        <div className="relative w-full section-mt h-[300px] sm:h-[350px] md:h-[400px] lg:h-[600px] mb-[50px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.469591718711!2d58.40673556446483!3d37.91009744768412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffda866883d31%3A0x1fae3d9bf0c3e369!2z0JrQuNC90L7QutC-0L3RhtC10YDRgtC90YvQuSDRhtC10L3RgtGAICLQotGD0YDQutC80LXQvdC40YHRgtCw0L0iINGF0LDRg9GBINC00LvRjyDQvdC10YTQvtGA0L7Qsg!5e0!3m2!1sru!2sru!4v1717413904608!5m2!1sru!2sru"
            className="absolute inset-0 w-full h-full "
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
