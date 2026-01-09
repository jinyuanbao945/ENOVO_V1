import React, { useState, useEffect, useCallback } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import { Zap, AlertTriangle, RefreshCw } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface DataPoint {
  time: number;
  voltageVSG: number;
  voltageNoVSG: number;
}

const VSGSimulation: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [loadEventTime, setLoadEventTime] = useState<number | null>(null);
  const { t } = useLanguage();

  const generateData = useCallback(() => {
    const points: DataPoint[] = [];
    const totalPoints = 100;
    const eventIndex = 30; // Load change happens at index 30

    setLoadEventTime(eventIndex);

    let vsgCurrent = 220;
    let noVsgCurrent = 220;
    let noVsgVelocity = 0;

    for (let i = 0; i < totalPoints; i++) {
      // Base noise
      const noise = (Math.random() - 0.5) * 0.5;
      
      if (i < eventIndex) {
        // Stable before event
        points.push({
          time: i,
          voltageVSG: 220 + noise,
          voltageNoVSG: 220 + noise,
        });
      } else {
        // Event: Heavy Load added
        // VSG Logic: Inertia dampens the drop, Droop control recovers it smoothly
        const vsgError = 220 - vsgCurrent;
        // Simulate Grid Forming restorative force
        const vsgForce = i === eventIndex ? -5 : (vsgError * 0.2); 
        vsgCurrent += vsgForce + noise;
        // Clamp VSG to emulate steady state error (droop) or recovery
        if(vsgCurrent > 220) vsgCurrent = 220;


        // No VSG Logic (Diesel/Weak Grid): Deep drop, oscillation, slow recovery
        if (i === eventIndex) {
          noVsgVelocity = -15; // Sudden drop
        } else {
          // Spring-mass-damper system for oscillation
          const force = (220 - noVsgCurrent) * 0.1; // restoring force
          noVsgVelocity += force;
          noVsgVelocity *= 0.92; // Damping (low damping = oscillation)
        }
        noVsgCurrent += noVsgVelocity + noise;

        points.push({
          time: i,
          voltageVSG: vsgCurrent,
          voltageNoVSG: noVsgCurrent,
        });
      }
    }
    setData(points);
  }, []);

  useEffect(() => {
    generateData();
  }, [generateData]);

  const handleReset = () => {
    setIsSimulationRunning(false);
    generateData();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900">{t.simulation.title}</h1>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            {t.simulation.desc}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-emerald-500 rounded-full"></div>
                <span className="text-sm font-semibold text-slate-700">{t.simulation.legendVSG}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-rose-500 rounded-full"></div>
                <span className="text-sm font-semibold text-slate-700">{t.simulation.legendNoVSG}</span>
              </div>
            </div>

            <button 
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors font-medium text-sm"
            >
              <RefreshCw className="w-4 h-4" />
              {t.simulation.regenerate}
            </button>
          </div>

          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis 
                  dataKey="time" 
                  label={{ value: t.simulation.xAxis, position: 'insideBottomRight', offset: -5 }} 
                  tick={false}
                />
                <YAxis 
                  domain={[190, 230]} 
                  label={{ value: t.simulation.yAxis, angle: -90, position: 'insideLeft' }} 
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                  labelFormatter={() => ''}
                />
                <ReferenceLine x={loadEventTime || 30} stroke="#94a3b8" strokeDasharray="3 3" label={t.simulation.eventLabel} />
                <Line 
                  type="monotone" 
                  dataKey="voltageNoVSG" 
                  stroke="#f43f5e" 
                  strokeWidth={2} 
                  dot={false}
                  name={t.simulation.legendNoVSG}
                />
                <Line 
                  type="monotone" 
                  dataKey="voltageVSG" 
                  stroke="#10b981" 
                  strokeWidth={3} 
                  dot={false}
                  name={t.simulation.legendVSG}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="font-bold text-emerald-900">{t.simulation.advTitle}</h3>
                  <p className="text-sm text-emerald-800 mt-2">
                    {t.simulation.advDesc}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-rose-50 p-6 rounded-xl border border-rose-100">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-rose-600 mt-1" />
                <div>
                  <h3 className="font-bold text-rose-900">{t.simulation.disadvTitle}</h3>
                  <p className="text-sm text-rose-800 mt-2">
                    {t.simulation.disadvDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VSGSimulation;