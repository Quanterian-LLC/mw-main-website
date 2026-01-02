import { BarChart3, MessageSquare, Zap, Settings, Search, Bell, User, ChevronRight, TrendingUp, Clock, Layers } from "lucide-react";
import { Button } from "./ui/button";

const DashboardPreview = () => {
  return (
    <section id="dashboard" className="py-32 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-ai-mint mb-4">DASHBOARD</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Your AI{" "}
            <span className="gradient-text">command center</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Monitor, manage, and optimize all your AI operations from a single, beautiful interface.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="relative max-w-6xl mx-auto">
          {/* Glow effect behind */}
          <div 
            className="absolute inset-0 rounded-4xl"
            style={{
              background: "radial-gradient(ellipse at center, hsl(250, 80%, 60%, 0.15), transparent 70%)",
              transform: "scale(1.1)",
              filter: "blur(40px)",
            }}
          />

          <div className="relative glass-card rounded-3xl overflow-hidden border-2 border-border/30 shadow-2xl">
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-background/50">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-ai-peach/60" />
                  <div className="w-3 h-3 rounded-full bg-ai-mint/60" />
                </div>
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary">
                  <Search className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Search commands...</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 rounded-xl hover:bg-secondary transition-colors">
                  <Bell className="w-5 h-5 text-muted-foreground" />
                </button>
                <button className="p-2 rounded-xl hover:bg-secondary transition-colors">
                  <Settings className="w-5 h-5 text-muted-foreground" />
                </button>
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-ai-blue to-ai-violet flex items-center justify-center">
                  <User className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
            </div>

            <div className="flex">
              {/* Sidebar */}
              <div className="hidden md:block w-64 border-r border-border/50 p-4 bg-background/30">
                <nav className="space-y-2">
                  {[
                    { icon: Layers, label: "Overview", active: true },
                    { icon: MessageSquare, label: "Conversations", active: false },
                    { icon: Zap, label: "Automations", active: false },
                    { icon: BarChart3, label: "Analytics", active: false },
                    { icon: Settings, label: "Settings", active: false },
                  ].map((item, i) => (
                    <button
                      key={i}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                        item.active 
                          ? 'bg-gradient-to-r from-ai-blue/10 to-ai-violet/10 text-foreground' 
                          : 'text-muted-foreground hover:bg-secondary'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Main content */}
              <div className="flex-1 p-6 min-h-[500px]">
                {/* Stats row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: "Total Requests", value: "1.2M", change: "+12%", icon: TrendingUp },
                    { label: "Avg Latency", value: "124ms", change: "-8%", icon: Clock },
                    { label: "Active Models", value: "6", change: "+2", icon: Layers },
                    { label: "Cost Saved", value: "$4.2k", change: "+23%", icon: BarChart3 },
                  ].map((stat, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-secondary/50 border border-border/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                        <stat.icon className="w-4 h-4 text-ai-violet" />
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-display font-bold">{stat.value}</span>
                        <span className="text-sm text-ai-mint">{stat.change}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Activity feed preview */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-secondary/30 border border-border/30">
                    <h4 className="font-semibold mb-4">Recent Activity</h4>
                    <div className="space-y-4">
                      {[
                        { model: "GPT-5", action: "Completed analysis", time: "2m ago" },
                        { model: "Claude", action: "Generated report", time: "5m ago" },
                        { model: "Gemini", action: "Processed batch", time: "12m ago" },
                      ].map((activity, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ai-blue to-ai-violet opacity-20" />
                            <div>
                              <p className="text-sm font-medium">{activity.model}</p>
                              <p className="text-xs text-muted-foreground">{activity.action}</p>
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-secondary/30 border border-border/30">
                    <h4 className="font-semibold mb-4">Model Distribution</h4>
                    <div className="space-y-3">
                      {[
                        { model: "GPT-5", usage: 45, color: "bg-ai-blue" },
                        { model: "Claude 4", usage: 30, color: "bg-ai-violet" },
                        { model: "Gemini", usage: 15, color: "bg-ai-cyan" },
                        { model: "Others", usage: 10, color: "bg-ai-peach" },
                      ].map((item, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{item.model}</span>
                            <span className="text-muted-foreground">{item.usage}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-secondary overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${item.color}`}
                              style={{ width: `${item.usage}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
