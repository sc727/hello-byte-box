import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface ECBRateCardProps {
  title: string;
  rate: number;
  description: string;
  trend?: 'up' | 'down' | 'stable';
  onClick: () => void;
}

export const ECBRateCard = ({ title, rate, description, trend = 'stable', onClick }: ECBRateCardProps) => {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-ecb-danger" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-ecb-success" />;
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <Card className="transition-all duration-200 hover:shadow-lg cursor-pointer border-2 hover:border-ecb-blue/50" onClick={onClick}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-ecb-blue flex items-center justify-between">
          {title}
          {getTrendIcon()}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="text-3xl font-bold text-ecb-blue">
            {rate.toFixed(2)}%
          </div>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full border-ecb-blue text-ecb-blue hover:bg-ecb-light-blue"
          >
            View Historical Chart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};