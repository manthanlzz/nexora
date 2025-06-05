import Container from "../global/container";
import Images from "../global/images";

const Companies = () => {
  return (
    <div className="relative z-10 w-full  dark:bg-black py-20 -mt-10">
      <Container>
        <div className="flex flex-col items-center justify-center text-center">
          <h4 className="text-2xl lg:text-4xl font-medium text-white dark:text-white">
            Trusted by <span className="text-blue-500">leading</span> brands
          </h4>
        </div>
      </Container>

      <Container delay={0.1}>
        <div className="flex flex-wrap justify-center gap-8 pt-16 max-w-5xl mx-auto text-muted-foreground">
          <Images.company1 className="h-7 w-auto hover:text-foreground" />
          <Images.company2 className="h-7 w-auto hover:text-foreground" />
          <Images.company3 className="h-7 w-auto hover:text-foreground" />
          <Images.company6 className="h-7 w-auto hover:text-foreground" />
          <Images.company7 className="h-7 w-auto hover:text-foreground" />
          <Images.company9 className="h-7 w-auto hover:text-foreground" />
          <Images.company10 className="h-7 w-auto hover:text-foreground" />
        </div>
      </Container>
    </div>
  );
};

export default Companies;
