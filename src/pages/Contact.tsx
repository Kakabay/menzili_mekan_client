import Container from '@/components/Container';
import HeroSection from '@/components/HeroSection';
import { contactCardData } from '@/lib/database/Contact.data';

const Contact = () => {
  return (
    <div>
      <HeroSection size="big" page="contact" title="let's plan a project" />
      <section className="mt-[80px] mb-[140px]">
        <Container>
          <div className="flex justify-between mb-[140px]">
            {contactCardData.map((item) => (
              <div className="w-full max-w-[380px] text-center flex flex-col gap-4">
                <img width={64} height={64} src={item.path} className="w-[64px] h-[64px] mx-auto" />
                <h2 className="text-[24px] text-eerieBlack font-medium leading-[125%]">
                  {item.title}
                </h2>
                <div className="text-[16px] leading-[150%] text-bauhaus">{item.text}</div>
              </div>
            ))}
          </div>
        </Container>

        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[600px] mb-[50px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.67827952586!2d58.29659607507902!3d37.8912058554459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f7003944259cb1d%3A0xafc893357e4b0d2!2z0KLQvtGA0LPQvtCy0L4t0L_RgNC-0LzRi9GI0LvQtdC90L3QsNGPINC_0LDQu9Cw0YLQsCDQotGD0YDQutC80LXQvdC40YHRgtCw0L3QsA!5e0!3m2!1sru!2s!4v1713164734635!5m2!1sru!2s"
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
