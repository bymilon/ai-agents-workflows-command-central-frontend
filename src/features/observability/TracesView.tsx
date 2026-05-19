import React from 'react';
import { Search, Filter, ArrowUpDown, Clock, CheckCircle2, XCircle, ChevronRight, Activity, Terminal, AlertTriangle, Layers, CreditCard } from 'lucide-react';
import { cn } from '../../lib/utils';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const TRACES = [
  { id: 'trc_9a8b1', source: 'Support Triage Agent', workflow: 'Ticket Routing', status: 'success', latency: '412ms', tokens: '1,240', cost: '$0.0014', timestamp: 'Just now' },
  { id: 'trc_2c3d4', source: 'Lead Enrichment', workflow: 'Data Enrichment', status: 'failed', latency: '2.4s', tokens: '--', cost: '--', timestamp: '2 mins ago' },
  { id: 'trc_5e6f7', source: 'Code Reviewer', workflow: 'PR Analysis', status: 'success', latency: '1.2s', tokens: '4,102', cost: '$0.0120', timestamp: '5 mins ago' },
  { id: 'trc_8g9h0', source: 'Data Miner', workflow: 'Scraping Pipeline', status: 'warning', latency: '14.5s', tokens: '12,400', cost: '$0.0450', timestamp: '12 mins ago' },
  { id: 'trc_1i2j3', source: 'Support Triage Agent', workflow: 'Ticket Routing', status: 'success', latency: '380ms', tokens: '1,120', cost: '$0.0012', timestamp: '15 mins ago' },
  { id: 'trc_4k5l6', source: 'Database Migrator', workflow: 'Nightly Backup', status: 'success', latency: '45.2m', tokens: '145k', cost: '$0.4200', timestamp: '1 hour ago' },
];

const CHART_DATA = [
  { time: '10:00', latency: 400, requests: 24 },
  { time: '10:05', latency: 380, requests: 28 },
  { time: '10:10', latency: 450, requests: 42 },
  { time: '10:15', latency: 1200, requests: 58 },
  { time: '10:20', latency: 410, requests: 30 },
  { time: '10:25', latency: 390, requests: 22 },
  { time: '10:30', latency: 420, requests: 26 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface-raised border border-border-default rounded-md shadow-lg p-3 flex flex-col gap-1.5">
        <p className="text-[11px] font-medium text-text-tertiary uppercase tracking-wider">{label}</p>
        <div className="flex flex-col gap-1">
          <p className="text-[12px] font-medium text-text-primary flex items-center justify-between gap-4">
            <span className="text-text-secondary flex items-center gap-1.5"><Clock className="w-3 h-3 text-primary-400" /> Avg Latency</span>
            <span className="font-mono">{payload[0].value}ms</span>
          </p>
          <p className="text-[12px] font-medium text-text-primary flex items-center justify-between gap-4">
            <span className="text-text-secondary flex items-center gap-1.5"><Activity className="w-3 h-3 text-text-tertiary opacity-50" /> Requests</span>
            <span className="font-mono">{payload[1].value}</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export function TracesView() {
  return (
    <div className="w-full h-full bg-surface-base flex flex-col">
      <div className="flex-1 p-6 md:p-8 overflow-y-auto">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
          {/* Header */}
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-1.5">
              <h1 className="text-2xl font-semibold text-text-primary tracking-tight">Observability & Traces</h1>
              <p className="text-text-secondary text-[13px]">Monitor execution latency, agent decisions, and token usage.</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-surface-elevated border border-border-default rounded-md text-[13px] font-medium text-text-primary hover:bg-white/5 transition-colors shadow-sm">
                <Clock className="w-4 h-4 text-text-tertiary" />
                Last Hour
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Content Area */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              
              {/* Telemetry Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface-elevated border border-border-default rounded-xl p-5 shadow-sm h-[200px] flex flex-col">
                  <h3 className="text-[13px] font-medium text-text-primary mb-4 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-text-tertiary" />
                    Global Latency Distribution
                  </h3>
                  <div className="flex-1 min-h-0 w-full relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={CHART_DATA} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
                        <defs>
                          <linearGradient id="latencyGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--color-primary-400)" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="var(--color-primary-400)" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border-subtle)" />
                        <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: 'var(--color-text-tertiary)', fontSize: 10 }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--color-text-tertiary)', fontSize: 10 }} />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--color-surface-raised)', opacity: 0.4 }} />
                        <Area type="monotone" dataKey="latency" stroke="var(--color-primary-400)" strokeWidth={2} fillOpacity={1} fill="url(#latencyGradient)" />
                        <Area type="monotone" dataKey="requests" stroke="transparent" fill="transparent" />{/* Hidden for tooltip */}
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-surface-elevated border border-border-default rounded-xl p-5 shadow-sm h-[200px] flex flex-col">
                  <h3 className="text-[13px] font-medium text-text-primary mb-4 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-text-tertiary" />
                    Execution Volume
                  </h3>
                  <div className="flex-1 min-h-0 w-full relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={CHART_DATA} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border-subtle)" />
                        <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: 'var(--color-text-tertiary)', fontSize: 10 }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--color-text-tertiary)', fontSize: 10 }} />
                        <Tooltip cursor={{ fill: 'var(--color-surface-raised)' }} contentStyle={{ backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)' }} />
                        <Bar dataKey="requests" radius={[2, 2, 0, 0]}>
                          {CHART_DATA.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.latency > 1000 ? 'var(--color-semantic-warning)' : 'var(--color-border-strong)'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Traces Table */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 bg-surface-elevated border border-border-default rounded-lg p-1.5 shrink-0 shadow-sm">
                  <div className="flex-1 relative flex items-center ml-2">
                    <Search className="w-4 h-4 text-text-tertiary absolute" />
                    <input 
                      type="text" 
                      placeholder="Search traces by ID, source, or workflow..." 
                      className="w-full bg-transparent border-none outline-none text-[13px] text-text-primary pl-8 placeholder:text-text-tertiary h-8"
                    />
                  </div>
                  <div className="h-5 w-px bg-border-subtle mx-1" />
                  <button className="px-3 py-1.5 text-[12px] text-text-secondary hover:text-text-primary rounded text-left hover:bg-white/5 transition-colors font-medium flex items-center gap-1.5">
                    <Filter className="w-3.5 h-3.5 opacity-70" /> Status: All
                  </button>
                  <button className="px-3 py-1.5 text-[12px] text-text-secondary hover:text-text-primary rounded text-left hover:bg-white/5 transition-colors font-medium flex items-center gap-1.5">
                    <ArrowUpDown className="w-3.5 h-3.5 opacity-70" /> Sort
                  </button>
                </div>

                <div className="border border-border-default rounded-xl overflow-hidden bg-surface-elevated shadow-sm">
                  <table className="w-full text-left text-[13px] whitespace-nowrap">
                    <thead className="bg-surface-raised border-b border-border-default">
                      <tr>
                        <th className="px-5 py-3.5 font-medium text-text-tertiary uppercase tracking-wider text-[11px]">Trace ID</th>
                        <th className="px-5 py-3.5 font-medium text-text-tertiary uppercase tracking-wider text-[11px]">Source Agent</th>
                        <th className="px-5 py-3.5 font-medium text-text-tertiary uppercase tracking-wider text-[11px]">Workflow</th>
                        <th className="px-5 py-3.5 font-medium text-text-tertiary uppercase tracking-wider text-[11px]">Status</th>
                        <th className="px-5 py-3.5 font-medium text-text-tertiary uppercase tracking-wider text-[11px]">Latency</th>
                        <th className="px-5 py-3.5 font-medium text-text-tertiary uppercase tracking-wider text-[11px]">Tokens</th>
                        <th className="px-5 py-3.5 font-medium text-text-tertiary uppercase tracking-wider text-[11px]">Time</th>
                        <th className="px-5 py-3.5 font-medium text-text-tertiary uppercase tracking-wider text-[11px] text-right"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-subtle">
                      {TRACES.map((trace) => (
                        <tr key={trace.id} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                          <td className="px-5 py-3.5">
                            <span className="font-mono text-[12px] text-text-primary group-hover:text-primary-400 transition-colors">{trace.id}</span>
                          </td>
                          <td className="px-5 py-3.5">
                            <span className="font-medium text-text-primary tracking-tight">{trace.source}</span>
                          </td>
                          <td className="px-5 py-3.5 text-text-secondary">
                            <div className="flex items-center gap-2">
                              <Layers className="w-3.5 h-3.5 opacity-50 shrink-0" />
                              <span className="truncate max-w-[120px]" title={trace.workflow}>{trace.workflow}</span>
                            </div>
                          </td>
                          <td className="px-5 py-3.5">
                            <div className="flex items-center">
                              <div className={cn(
                                "flex items-center justify-center p-0.5 rounded-full border",
                                trace.status === 'success' ? "bg-semantic-success/10 border-semantic-success/20 text-semantic-success" : 
                                trace.status === 'failed' ? "bg-semantic-danger/10 border-semantic-danger/20 text-semantic-danger" :
                                "bg-semantic-warning/10 border-semantic-warning/20 text-semantic-warning"
                              )}>
                                {trace.status === 'success' ? <CheckCircle2 className="w-3.5 h-3.5" /> : 
                                 trace.status === 'failed' ? <XCircle className="w-3.5 h-3.5" /> : 
                                 <AlertTriangle className="w-3.5 h-3.5" />}
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-3.5">
                            <span className={cn(
                              "font-mono text-[12px]",
                              trace.status === 'warning' || trace.status === 'failed' ? "text-semantic-warning" : "text-text-secondary"
                            )}>
                              {trace.latency}
                            </span>
                          </td>
                          <td className="px-5 py-3.5 text-text-secondary font-mono text-[12px]">{trace.tokens}</td>
                          <td className="px-5 py-3.5 text-text-secondary text-[12px]">{trace.timestamp}</td>
                          <td className="px-5 py-3.5 text-right">
                            <ChevronRight className="w-4 h-4 text-text-tertiary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>

            {/* Sidebar / Overview */}
            <div className="flex flex-col gap-4">
              <div className="bg-surface-elevated border border-border-default rounded-xl p-5 shadow-sm flex flex-col gap-5">
                <h3 className="text-[13px] font-medium text-text-primary tracking-tight">Period Summary</h3>
                
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[12px] text-text-tertiary uppercase tracking-wider font-semibold">Total Requests</span>
                    <span className="text-2xl font-semibold text-text-primary tracking-tight">1,204</span>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <span className="text-[12px] text-text-tertiary uppercase tracking-wider font-semibold">Error Rate</span>
                    <span className="text-2xl font-semibold text-text-primary tracking-tight">0.24%</span>
                  </div>

                  <div className="h-px w-full bg-border-subtle" />

                  <div className="flex flex-col gap-3">
                    <span className="text-[12px] text-text-tertiary uppercase tracking-wider font-semibold flex items-center gap-1.5">
                      <CreditCard className="w-3.5 h-3.5" /> Estimated Cost
                    </span>
                    <div className="flex items-end justify-between">
                      <span className="text-2xl font-semibold text-semantic-warning tracking-tight">$42.85</span>
                      <span className="text-[11px] text-text-secondary mb-1 border border-border-subtle bg-surface-raised px-1.5 py-0.5 rounded font-mono">1.2M Tokens</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
