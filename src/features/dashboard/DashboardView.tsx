import React from 'react';
import { Activity, GitMerge, Bot, Terminal, CheckCircle2, XCircle, ArrowDownRight, ArrowUpRight, Clock, MoreHorizontal, Calendar, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const METRICS = [
  { label: 'Active Agents', value: '14', change: '+2', trend: 'up', icon: Bot },
  { label: 'Total Executions (24h)', value: '124.5k', change: '+14.2%', trend: 'up', icon: Activity },
  { label: 'Avg Latency', value: '412ms', change: '-12ms', trend: 'down', icon: Clock },
  { label: 'Success Rate', value: '99.8%', change: '-0.1%', trend: 'down', icon: CheckCircle2 },
];

const RECENT_RUNS = [
  { id: 'run_9x81m', workflow: 'User Onboarding Flow', agent: 'Triager Agent', status: 'success', time: '2 mins ago', duration: '1.2s' },
  { id: 'run_4v2cq', workflow: 'Lead Enrichment', agent: 'Data Miner', status: 'failed', time: '14 mins ago', duration: '45.1s' },
  { id: 'run_1m9zp', workflow: 'Support Ticket Routing', agent: 'Customer Support', status: 'success', time: '1 hr ago', duration: '840ms' },
  { id: 'run_7b4xw', workflow: 'Nightly DB Backup', agent: 'Database Migrator', status: 'success', time: '4 hrs ago', duration: '12.4m' },
];

const CHART_DATA = [
  { time: '00:00', value: 2400 },
  { time: '04:00', value: 1398 },
  { time: '08:00', value: 9800 },
  { time: '12:00', value: 3908 },
  { time: '16:00', value: 4800 },
  { time: '20:00', value: 3800 },
  { time: '24:00', value: 4300 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface-raised border border-border-default rounded-md shadow-lg p-3 flex flex-col gap-1">
        <p className="text-[11px] font-medium text-text-tertiary uppercase tracking-wider">{label}</p>
        <p className="text-[13px] font-medium text-text-primary">
          <span className="text-primary-400 mr-1.5 font-bold">{payload[0].value.toLocaleString()}</span>
          executions
        </p>
      </div>
    );
  }
  return null;
};

export function DashboardView() {
  return (
    <div className="w-full h-full bg-surface-base p-6 md:p-8 overflow-y-auto">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-2xl font-semibold text-text-primary tracking-tight">Overview</h1>
            <p className="text-text-secondary text-[13px]">System performance and recent execution activity.</p>
          </div>
          
          <button className="flex items-center gap-2 px-3 py-1.5 bg-surface-elevated border border-border-default rounded-md text-[13px] font-medium text-text-primary hover:bg-white/5 transition-colors shadow-sm">
            <Calendar className="w-4 h-4 text-text-tertiary" />
            Last 24 Hours
            <ChevronDown className="w-4 h-4 text-text-tertiary ml-1" />
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS.map((metric) => (
            <div key={metric.label} className="bg-surface-elevated border border-border-default rounded-xl p-5 flex flex-col gap-4 shadow-sm hover:border-border-strong hover:shadow-md transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-medium text-text-secondary tracking-tight">{metric.label}</span>
                <div className="w-8 h-8 rounded border border-border-subtle bg-surface-raised flex items-center justify-center shrink-0 group-hover:bg-primary-500/10 group-hover:border-primary-500/20 group-hover:text-primary-400 transition-colors">
                  <metric.icon className="w-4 h-4 text-text-tertiary group-hover:text-primary-400 transition-colors" />
                </div>
              </div>
              <div className="flex items-end justify-between mt-1">
                <span className="text-3xl font-semibold text-text-primary tracking-tight leading-none">{metric.value}</span>
                <span className={cn(
                  "text-[12px] font-medium flex items-center gap-0.5 px-2 py-0.5 rounded border leading-none tracking-tight",
                  metric.trend === 'up' && metric.label !== 'Avg Latency' ? "bg-semantic-success/10 text-semantic-success border-semantic-success/20" :
                  metric.trend === 'down' && metric.label === 'Avg Latency' ? "bg-semantic-success/10 text-semantic-success border-semantic-success/20" :
                  "bg-semantic-danger/10 text-semantic-danger border-semantic-danger/20"
                )}>
                  {metric.trend === 'up' ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart Area */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h2 className="text-[14px] font-medium text-text-primary tracking-tight">Execution Volume</h2>
            <div className="bg-surface-elevated border border-border-default rounded-xl p-5 h-[360px] flex items-center justify-center shadow-sm relative overflow-hidden group hover:border-border-strong transition-colors">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={CHART_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-primary-400)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="var(--color-primary-400)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border-subtle)" />
                  <XAxis 
                    dataKey="time" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--color-text-tertiary)', fontSize: 11, fontWeight: 500 }} 
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--color-text-tertiary)', fontSize: 11, fontWeight: 500 }}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'var(--color-border-strong)', strokeWidth: 1, strokeDasharray: '4 4' }} />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="var(--color-primary-400)" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-[14px] font-medium text-text-primary tracking-tight">Recent Runs</h2>
              <button className="text-[12px] font-medium text-text-tertiary hover:text-text-primary transition-colors flex items-center gap-1">
                View all
              </button>
            </div>
            <div className="bg-surface-elevated border border-border-default rounded-xl flex flex-col shadow-sm divide-y divide-border-subtle overflow-hidden">
              {RECENT_RUNS.map((run) => (
                <div key={run.id} className="p-3.5 flex flex-col gap-2.5 group hover:bg-surface-raised cursor-pointer transition-colors">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={cn(
                        "w-5 h-5 rounded flex items-center justify-center shrink-0 border",
                        run.status === 'success' ? "bg-semantic-success/10 border-semantic-success/20 text-semantic-success" : "bg-semantic-danger/10 border-semantic-danger/20 text-semantic-danger"
                      )}>
                        {run.status === 'success' ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : (
                          <XCircle className="w-3 h-3" />
                        )}
                      </div>
                      <span className="text-[13px] font-medium text-text-primary leading-tight truncate">{run.workflow}</span>
                    </div>
                    <span className="text-[11px] text-text-tertiary font-mono shrink-0 whitespace-nowrap">{run.time}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] pl-[30px]">
                    <div className="flex items-center gap-1.5 text-text-secondary min-w-0">
                      <Bot className="w-3 h-3 shrink-0 opacity-70" />
                      <span className="truncate tracking-wide">{run.agent}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-text-tertiary shrink-0">
                      <span>{run.id}</span>
                      <span className="opacity-50 text-[10px]">•</span>
                      <span>{run.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
