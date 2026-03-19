'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function InvestmentCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [years, setYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(8); // 8% annual return

  // Calculate compound interest projection
  const data = useMemo(() => {
    const projection = [];
    let currentBalance = initialInvestment;
    let totalInvested = initialInvestment;

    for (let i = 0; i <= years; i++) {
      if (i > 0) {
        // Annual contribution
        const annualContribution = monthlyContribution * 12;
        totalInvested += annualContribution;
        
        // Compound interest (yearly compounding for simplicity in projection)
        currentBalance = (currentBalance + annualContribution) * (1 + expectedReturn / 100);
      }
      
      projection.push({
        year: `Year ${i}`,
        balance: Math.round(currentBalance),
        invested: Math.round(totalInvested),
      });
    }
    return projection;
  }, [initialInvestment, monthlyContribution, years, expectedReturn]);

  const finalBalance = data[data.length - 1]?.balance || 0;
  const finalInvested = data[data.length - 1]?.invested || 0;
  const totalInterest = finalBalance - finalInvested;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(value);
  };

  return (
    <section id="calculator" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Project Your Wealth
          </h2>
          <p className="text-lg text-white/80">
            Use our interactive calculator to see how consistent investing can grow your portfolio over time using the power of compound interest.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl text-foreground max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Controls */}
            <div className="w-full lg:w-1/3 space-y-8">
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground/80 flex justify-between">
                  <span>Initial Investment</span>
                  <span className="text-primary font-bold">{formatCurrency(initialInvestment)}</span>
                </label>
                <input 
                  type="range" 
                  min="0" max="10000000" step="100000"
                  value={initialInvestment} 
                  onChange={(e) => setInitialInvestment(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground/80 flex justify-between">
                  <span>Monthly Contribution</span>
                  <span className="text-primary font-bold">{formatCurrency(monthlyContribution)}</span>
                </label>
                <input 
                  type="range" 
                  min="0" max="2000000" step="10000"
                  value={monthlyContribution} 
                  onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground/80 flex justify-between">
                  <span>Time Horizon (Years)</span>
                  <span className="text-primary font-bold">{years} Years</span>
                </label>
                <input 
                  type="range" 
                  min="1" max="40" step="1"
                  value={years} 
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground/80 flex justify-between">
                  <span>Expected Return Rate (Annually)</span>
                  <span className="text-primary font-bold">{expectedReturn}%</span>
                </label>
                <input 
                  type="range" 
                  min="1" max="20" step="0.5"
                  value={expectedReturn} 
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Chart & Results */}
            <div className="w-full lg:w-2/3 flex flex-col">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <p className="text-sm text-muted-foreground font-medium mb-1">Total Invested</p>
                  <p className="text-xl font-bold text-foreground">{formatCurrency(finalInvested)}</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <p className="text-sm text-muted-foreground font-medium mb-1">Total Interest</p>
                  <p className="text-xl font-bold text-green-600">{formatCurrency(totalInterest)}</p>
                </div>
                <div className="col-span-2 md:col-span-1 p-4 bg-primary text-white rounded-xl shadow-md">
                  <p className="text-sm text-white/80 font-medium mb-1">Estimated Balance</p>
                  <p className="text-2xl font-bold">{formatCurrency(finalBalance)}</p>
                </div>
              </div>

              <div className="flex-1 min-h-[300px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0B3C5D" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#0B3C5D" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#C9A54C" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#C9A54C" stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="year" 
                      tickLine={false} 
                      axisLine={false} 
                      tickMargin={10}
                      tick={{ fill: '#64748b', fontSize: 12 }}
                      minTickGap={30}
                    />
                    <YAxis 
                      tickLine={false} 
                      axisLine={false} 
                      tickFormatter={(value) => `₦${(value / 1000000).toFixed(0)}M`}
                      tick={{ fill: '#64748b', fontSize: 12 }}
                      width={60}
                    />
                    <Tooltip 
                      formatter={(value: any) => formatCurrency(Number(value))}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                    <Area type="monotone" dataKey="balance" name="Total Balance" stroke="#0B3C5D" strokeWidth={3} fillOpacity={1} fill="url(#colorBalance)" />
                    <Area type="monotone" dataKey="invested" name="Total Invested" stroke="#C9A54C" strokeWidth={2} fillOpacity={1} fill="url(#colorInvested)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
