import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
  { name: "Applied", value: 45, color: "hsl(var(--muted))" },
  { name: "Interviewing", value: 30, color: "hsl(var(--primary))" },
  { name: "Offer", value: 15, color: "hsl(var(--accent))" },
];

const keywordMatchData = [
  { category: "Technical Skills", matched: 8, missing: 2 },
  { category: "Soft Skills", matched: 6, missing: 1 },
  { category: "Experience", matched: 7, missing: 3 },
  { category: "Education", matched: 5, missing: 0 },
];

const chartConfig = {
  score: {
    label: "ATS Score",
    color: "hsl(var(--primary))",
  },
  matched: {
    label: "Matched",
    color: "hsl(var(--primary))",
  },
  missing: {
    label: "Missing",
    color: "hsl(var(--destructive))",
  },
};

const Analysis = () => {
  return (
    <AppLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-heading font-semibold text-foreground">
            Performance Analysis
          </h1>
          <p className="text-muted-foreground">Track your application metrics and optimize your success rate</p>
        </div>

        {/* Hero Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-body text-muted-foreground">Avg ATS Score</p>
                  <p className="text-2xl font-heading font-semibold text-foreground">87%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-body text-muted-foreground">Applications</p>
                  <p className="text-2xl font-heading font-semibold text-foreground">90</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-body text-muted-foreground">Success Rate</p>
                  <p className="text-2xl font-heading font-semibold text-foreground">45%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ATS Score Over Time - Full Width */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">ATS Score Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={atsScoreData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="month" 
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '12px' }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--primary))", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Application Status - Donut Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Application Status</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={applicationStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
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
              <div className="flex justify-center gap-6 mt-4">
                {applicationStatusData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm font-body text-muted-foreground">
                      {item.name}: {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Keyword Match Rate - Bar Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Keyword Match Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={keywordMatchData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="category" 
                      stroke="hsl(var(--muted-foreground))"
                      style={{ fontSize: '10px' }}
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      style={{ fontSize: '12px' }}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="matched" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="missing" fill="hsl(var(--destructive))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-primary" />
                  <span className="text-sm font-body text-muted-foreground">Matched</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-destructive" />
                  <span className="text-sm font-body text-muted-foreground">Missing</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Keyword Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Keyword Analysis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <h4 className="font-heading font-semibold text-foreground">Matched (26)</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Community Support", "Case Management", "Crisis Intervention", "Mental Health", "Client Advocacy", "Documentation"].map((keyword) => (
                    <Badge key={keyword} variant="default" className="gap-1">
                      <Check className="w-3 h-3" />
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <X className="w-5 h-5 text-destructive" />
                  <h4 className="font-heading font-semibold text-foreground">Missing (6)</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Peer Support", "Recovery Programs", "Group Facilitation", "Documentation", "Risk Assessment"].map((keyword) => (
                    <Badge key={keyword} variant="destructive" className="gap-1">
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
