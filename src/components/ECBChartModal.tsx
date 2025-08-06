import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ECBChart } from "./ECBChart";
import { getRateHistory, getRateTypeLabel } from "@/data/ecbRates";

interface ECBChartModalProps {
  isOpen: boolean;
  onClose: () => void;
  rateType: 'depositFacility' | 'mainRefinancing' | 'marginalLending' | null;
}

export const ECBChartModal = ({ isOpen, onClose, rateType }: ECBChartModalProps) => {
  if (!rateType) return null;

  const chartData = getRateHistory(rateType);
  const title = getRateTypeLabel(rateType);
  
  const chartColors = {
    depositFacility: '#1f77b4',
    mainRefinancing: '#ff7f0e', 
    marginalLending: '#2ca02c'
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-ecb-blue">
            {title} - Historical Data
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <ECBChart 
            data={chartData}
            title={`${title} Over Time`}
            color={chartColors[rateType]}
          />
        </div>
        <div className="mt-4 p-4 bg-ecb-light-blue/30 rounded-lg">
          <p className="text-sm text-muted-foreground">
            This chart shows the historical development of the {title.toLowerCase()} 
            set by the European Central Bank. Click outside this dialog to close.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};