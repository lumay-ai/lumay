import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, CheckCircle, LineChart, PieChart, BarChart2, Lightbulb, FileText, Target } from "lucide-react";
import { Helmet } from "react-helmet-async";

const features = [
  { icon: LineChart, title: "Predictive Models", description: "Advanced ML models that forecast future trends based on historical data." },
  { icon: TrendingUp, title: "Trend Analysis", description: "Identify emerging patterns and shifts in your business metrics." },
  { icon: PieChart, title: "Custom Dashboards", description: "Build personalized dashboards with drag-and-drop simplicity." },
  { icon: FileText, title: "Automated Reports", description: "Schedule and distribute reports automatically to stakeholders." },
  { icon: Lightbulb, title: "What-if Scenarios", description: "Model different scenarios to understand potential outcomes." },
  { icon: BarChart2, title: "Data Visualization", description: "Beautiful, interactive charts that make data accessible to everyone." },
];

const insights = [
  "Revenue forecasting with 95% accuracy",
  "Customer churn prediction",
  "Demand planning optimization",
  "Market trend identification",
  "Resource allocation modeling",
  "Risk assessment and mitigation",
];

export default function SmartTrends() {
  return (
    <Layout>
      <Helmet>
        <title>SmartTrends - Predictive Analytics & Forecasting | LuMay</title>
        <meta name="description" content="Transform historical data into actionable forecasts. SmartTrends uses advanced machine learning to identify trends and support data-driven decision making." />
        <meta name="keywords" content="predictive analytics, forecasting, trend analysis, machine learning, business intelligence" />
        <link rel="canonical" href="https://lumay.ai/products/smarttrends" />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Product</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 mb-6 text-foreground">
                SmartTrends
              </h1>
              <p className="text-xl text-primary font-medium mb-4">Predictive Analytics & Forecasting</p>
              <p className="text-lg text-muted-foreground mb-8">
                Transform historical data into actionable forecasts. SmartTrends uses advanced machine learning to identify trends, predict outcomes, and support data-driven decision making.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Request Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/products">View All Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl card-gradient border border-border flex items-center justify-center">
                <TrendingUp className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Features</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              Data-Driven Insights
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              SmartTrends combines powerful analytics with intuitive visualization to unlock the value in your data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-gradient rounded-xl p-6 border border-border animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Capabilities</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
                Unlock Predictive Power
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                From revenue forecasting to customer behavior prediction, SmartTrends delivers insights that drive strategic decisions.
              </p>
              <ul className="space-y-4">
                {insights.map((insight) => (
                  <li key={insight} className="flex items-center gap-3 text-foreground">
                    <Target className="w-5 h-5 text-primary flex-shrink-0" />
                    {insight}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-1">
              <div className="card-gradient rounded-2xl p-8 border border-border">
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Q4 Revenue Forecast</p>
                  <p className="text-3xl font-bold text-foreground">$4.2M</p>
                  <p className="text-sm text-green-400">↑ 23% vs. last year</p>
                </div>
                <div className="h-48 flex items-end gap-2">
                  {[40, 55, 45, 70, 65, 80, 75, 90, 85, 95, 100, 110].map((height, i) => (
                    <div key={i} className="flex-1 bg-primary/20 rounded-t relative group">
                      <div
                        className="absolute bottom-0 w-full bg-primary rounded-t transition-all"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                  <span>Jan</span>
                  <span>Jun</span>
                  <span>Dec</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to predict the future?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            See how SmartTrends can transform your data into actionable insights
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
