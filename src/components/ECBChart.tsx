import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';

interface ChartData {
  date: string;
  value: number;
}

interface ECBChartProps {
  data: ChartData[];
  title: string;
  color?: string;
}

export const ECBChart = ({ data, title, color = "#002147" }: ECBChartProps) => {
  const formattedData = data.map(item => ({
    ...item,
    formattedDate: format(parseISO(item.date), 'MMM yyyy')
  }));

  return (
    <div className="w-full h-80">
      <h3 className="text-lg font-semibold text-ecb-blue mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData.reverse()}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="formattedDate" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            domain={['dataMin - 0.5', 'dataMax + 0.5']}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--popover))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '6px',
              color: 'hsl(var(--popover-foreground))'
            }}
            formatter={(value: number) => [`${value.toFixed(2)}%`, 'Rate']}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke={color}
            strokeWidth={2}
            dot={{ fill: color, strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: color, strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};