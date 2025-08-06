import { useState } from "react";
import { ECBRateCard } from "@/components/ECBRateCard";
import { ECBChartModal } from "@/components/ECBChartModal";
import { getCurrentRates } from "@/data/ecbRates";

const Index = () => {
  const [selectedRate, setSelectedRate] = useState<'depositFacility' | 'mainRefinancing' | 'marginalLending' | null>(null);
  const currentRates = getCurrentRates();

  const rateDescriptions = {
    depositFacility: "The rate banks receive for depositing money with the ECB overnight",
    mainRefinancing: "The key ECB interest rate for weekly lending operations to banks", 
    marginalLending: "The rate banks pay to borrow overnight from the ECB"
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-ecb-blue">ECB Interest Rates</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Current European Central Bank interest rates and historical trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <ECBRateCard
            title="Deposit Facility Rate"
            rate={currentRates.depositFacility}
            description={rateDescriptions.depositFacility}
            trend="down"
            onClick={() => setSelectedRate('depositFacility')}
          />
          
          <ECBRateCard
            title="Main Refinancing Rate"
            rate={currentRates.mainRefinancing}
            description={rateDescriptions.mainRefinancing}
            trend="down"
            onClick={() => setSelectedRate('mainRefinancing')}
          />
          
          <ECBRateCard
            title="Marginal Lending Rate"
            rate={currentRates.marginalLending}
            description={rateDescriptions.marginalLending}
            trend="down"
            onClick={() => setSelectedRate('marginalLending')}
          />
        </div>

        <ECBChartModal
          isOpen={selectedRate !== null}
          onClose={() => setSelectedRate(null)}
          rateType={selectedRate}
        />
      </div>
    </div>
  );
};

export default Index;
