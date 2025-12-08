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
      <div className="flex flex-col gap-6">
        {/* Page Title - Display Small with font-hero */}
        <h1 className="font-hero text-display-sm text-on-surface">
          Performance Analysis
        </h1>

        {/* Summary Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[var(--color-surface-container-high)] rounded-[28px] border-0 p-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-sm font-plain text-on-surface-variant">Avg ATS Score</p>
                <p className="text-3xl font-hero text-on-surface">87%</p>
              </div>
            </div>
          </Card>

          <Card className="bg-[var(--color-surface-container-high)] rounded-[28px] border-0 p-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                <Target className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-plain text-on-surface-variant">Applications</p>
                <p className="text-3xl font-hero text-on-surface">90</p>
              </div>
            </div>
          </Card>

          <Card className="bg-[var(--color-surface-container-high)] rounded-[28px] border-0 p-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-sm font-plain text-on-surface-variant">Success Rate</p>
                <p className="text-3xl font-hero text-on-surface">45%</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Bento Grid: Hero Chart + Side-by-side charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hero Card - ATS Score Over Time (Full Width) */}
          <Card className="col-span-full bg-[var(--color-surface-container)] rounded-[28px] border border-[var(--color-outline-variant)] p-6">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="font-hero text-headline-md text-on-surface">ATS Score Over Time</CardTitle>
            </CardHeader>
            <CardContent className="p-0 h-[280px]">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={atsScoreData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-outline-variant)" opacity={0.3} />
                    <XAxis 
                      dataKey="month" 
                      stroke="var(--color-on-surface-variant)"
                      style={{ fontSize: '12px' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      stroke="var(--color-on-surface-variant)"
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
                      dot={{ fill: "#9D4EDD", r: 5, strokeWidth: 2, stroke: "var(--color-surface)" }}
                      activeDot={{ r: 7, fill: "#9D4EDD" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Pie Chart - Application Status */}
          <Card className="bg-[var(--color-surface-container)] rounded-[28px] border border-[var(--color-outline-variant)] p-6">
            <CardHeader className="p-0 pb-2">
              <CardTitle className="font-hero text-headline-md text-on-surface">Application Status</CardTitle>
            </CardHeader>
            <CardContent className="p-0 h-[240px] flex flex-col">
              <ChartContainer config={chartConfig} className="flex-1">
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
              <div className="flex justify-center gap-4 mt-2">
                {applicationStatusData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm font-plain text-on-surface-variant">{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bar Chart - Keyword Match Rate */}
          <Card className="bg-[var(--color-surface-container)] rounded-[28px] border border-[var(--color-outline-variant)] p-6">
            <CardHeader className="p-0 pb-2">
              <CardTitle className="font-hero text-headline-md text-on-surface">Keyword Match Rate</CardTitle>
            </CardHeader>
            <CardContent className="p-0 h-[240px] flex flex-col">
              <ChartContainer config={chartConfig} className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={keywordMatchData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-outline-variant)" opacity={0.3} />
                    <XAxis 
                      dataKey="category" 
                      stroke="var(--color-on-surface-variant)"
                      style={{ fontSize: '10px' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      stroke="var(--color-on-surface-variant)"
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
              <div className="flex justify-center gap-6 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-[#9D4EDD]" />
                  <span className="text-sm font-plain text-on-surface-variant">Matched</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-[#4CC9F0]" />
                  <span className="text-sm font-plain text-on-surface-variant">Missing</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Keyword Analysis - Full Width */}
        <Card className="bg-[var(--color-surface-container)] rounded-[28px] border border-[var(--color-outline-variant)] p-6">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="font-hero text-headline-md text-on-surface">Keyword Analysis</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Matched Keywords */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <h4 className="font-hero text-on-surface">Matched (26)</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Community Support", "Case Management", "Crisis Intervention", "Mental Health", "Client Advocacy", "Documentation"].map((keyword) => (
                    <Badge 
                      key={keyword} 
                      className="gap-1.5 bg-primary/20 text-primary border-0 hover:bg-primary/30 rounded-full px-3 py-1"
                    >
                      <Check className="w-3 h-3" />
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Missing Keywords */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <X className="w-5 h-5 text-secondary" />
                  <h4 className="font-hero text-on-surface">Missing (6)</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Peer Support", "Recovery Programs", "Group Facilitation", "Risk Assessment", "Outreach"].map((keyword) => (
                    <Badge 
                      key={keyword} 
                      className="gap-1.5 bg-secondary/20 text-secondary border-0 hover:bg-secondary/30 rounded-full px-3 py-1"
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
