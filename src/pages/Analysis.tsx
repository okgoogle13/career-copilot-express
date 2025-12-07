import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { Check, X, TrendingUp, Target, Award } from "lucide-react";

const atsScoreData = [
  { month: "Jan", score: 65 },
  { month: "Feb", score: 72 },
  { month: "Mar", score: 78 },
  { month: "Apr", score: 82 },
  { month: "May", score: 87 },
];

const applicationStatusData = [
  { name: "Applied", value: 45, color: "#9D4EDD" },
  { name: "Interviewing", value: 30, color: "#4CC9F0" },
  { name: "Offer", value: 15, color: "#7DF9FF" },
];

const keywordMatchData = [
  { category: "Technical", matched: 8, missing: 2 },
  { category: "Soft Skills", matched: 6, missing: 1 },
  { category: "Experience", matched: 7, missing: 3 },
  { category: "Education", matched: 5, missing: 0 },
];

const chartConfig = {
  score: {
    label: "ATS Score",
    color: "#9D4EDD",
  },
  matched: {
    label: "Matched",
    color: "#9D4EDD",
  },
  missing: {
    label: "Missing",
    color: "#4CC9F0",
  },
};

const Analysis = () => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-6 h-full">
        {/* Page Title - Display Small */}
        <h1 className="text-5xl font-heading font-semibold text-white">
          Performance Analysis
        </h1>

        {/* Row 1: Summary Metrics - 3 equal cards */}
        <div className="grid grid-cols-3 gap-6">
          <Card className="bg-surface-container-high rounded-[28px] border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#9D4EDD]/20 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-[#9D4EDD]" />
                </div>
                <div>
                  <p className="text-sm font-body text-muted-foreground">Avg ATS Score</p>
                  <p className="text-3xl font-heading font-semibold text-foreground">87%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-surface-container-high rounded-[28px] border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#4CC9F0]/20 flex items-center justify-center">
                  <Target className="w-7 h-7 text-[#4CC9F0]" />
                </div>
                <div>
                  <p className="text-sm font-body text-muted-foreground">Applications</p>
                  <p className="text-3xl font-heading font-semibold text-foreground">90</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-surface-container-high rounded-[28px] border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#9D4EDD]/20 flex items-center justify-center">
                  <Award className="w-7 h-7 text-[#9D4EDD]" />
                </div>
                <div>
                  <p className="text-sm font-body text-muted-foreground">Success Rate</p>
                  <p className="text-3xl font-heading font-semibold text-foreground">45%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Row 2: Deep Dive - Asymmetric Split (2/3 + 1/3) */}
        <div className="grid grid-cols-3 gap-6 flex-1 min-h-0">
          {/* Left Column (2/3) - ATS Score Over Time */}
          <Card className="col-span-2 bg-surface-container rounded-[28px] border border-border flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle className="font-heading text-lg">ATS Score Over Time</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 min-h-0 pb-6">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={atsScoreData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                    <XAxis 
                      dataKey="month" 
                      stroke="hsl(var(--muted-foreground))"
                      style={{ fontSize: '12px' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      style={{ fontSize: '12px' }}
                      axisLine={false}
                      tickLine={false}
                      domain={[50, 100]}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="score" 
                      stroke="#9D4EDD" 
                      strokeWidth={3}
                      dot={{ fill: "#9D4EDD", r: 5, strokeWidth: 2, stroke: "#1A1625" }}
                      activeDot={{ r: 7, fill: "#9D4EDD" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Right Column (1/3) - Stacked Charts */}
          <div className="flex flex-col gap-6">
            {/* Application Status - Donut Chart */}
            <Card className="flex-1 bg-surface-container rounded-[28px] border border-border flex flex-col min-h-0">
              <CardHeader className="pb-0 pt-4 px-4">
                <CardTitle className="font-heading text-base">Application Status</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 p-4 pt-0 flex flex-col min-h-0">
                <ChartContainer config={chartConfig} className="flex-1 min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={applicationStatusData}
                        cx="50%"
                        cy="50%"
                        innerRadius="50%"
                        outerRadius="80%"
                        paddingAngle={4}
                        dataKey="value"
                      >
                        {applicationStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
                <div className="flex justify-center gap-3 mt-2">
                  {applicationStatusData.map((item) => (
                    <div key={item.name} className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-xs font-body text-muted-foreground">{item.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Keyword Match Rate - Bar Chart */}
            <Card className="flex-1 bg-surface-container rounded-[28px] border border-border flex flex-col min-h-0">
              <CardHeader className="pb-0 pt-4 px-4">
                <CardTitle className="font-heading text-base">Keyword Match Rate</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 p-4 pt-0 flex flex-col min-h-0">
                <ChartContainer config={chartConfig} className="flex-1 min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={keywordMatchData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                      <XAxis 
                        dataKey="category" 
                        stroke="hsl(var(--muted-foreground))"
                        style={{ fontSize: '9px' }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis 
                        stroke="hsl(var(--muted-foreground))"
                        style={{ fontSize: '10px' }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="matched" fill="#9D4EDD" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="missing" fill="#4CC9F0" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
                <div className="flex justify-center gap-4 mt-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded bg-[#9D4EDD]" />
                    <span className="text-xs font-body text-muted-foreground">Matched</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded bg-[#4CC9F0]" />
                    <span className="text-xs font-body text-muted-foreground">Missing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Row 3: Keyword Analysis - Full Width */}
        <Card className="bg-surface-container rounded-[28px] border border-border">
          <CardHeader className="pb-3">
            <CardTitle className="font-heading text-lg">Keyword Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-8">
              {/* Matched Keywords - Left */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#9D4EDD]" />
                  <h4 className="font-heading font-semibold text-foreground">Matched (26)</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Community Support", "Case Management", "Crisis Intervention", "Mental Health", "Client Advocacy", "Documentation"].map((keyword) => (
                    <Badge 
                      key={keyword} 
                      className="gap-1.5 bg-[#9D4EDD]/20 text-[#9D4EDD] border-0 hover:bg-[#9D4EDD]/30"
                    >
                      <Check className="w-3 h-3" />
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Missing Keywords - Right */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <X className="w-5 h-5 text-[#4CC9F0]" />
                  <h4 className="font-heading font-semibold text-foreground">Missing (6)</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Peer Support", "Recovery Programs", "Group Facilitation", "Risk Assessment", "Outreach"].map((keyword) => (
                    <Badge 
                      key={keyword} 
                      className="gap-1.5 bg-[#4CC9F0]/20 text-[#4CC9F0] border-0 hover:bg-[#4CC9F0]/30"
                    >
                      <X className="w-3 h-3" />
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Analysis;
