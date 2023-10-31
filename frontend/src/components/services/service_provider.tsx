import ServiceCard from "../cards/service_card/service_card";

export default function ServicePage() {
    return (
      <>
        <div id="services provider"  className="w-full h-screen px-120px bg-silver-chalice-neutral-50 flex items-center justify-between">
          <div className="w-full flex items-start justify-between">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </>
    );
};