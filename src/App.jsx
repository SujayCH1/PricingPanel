import React from "react";
import PricingCard from "./components/PricingCard";
import "./App.css";

const App = () => {
  const plans = [
    {
      title: "Starter",
      description: "Perfect for individuals and small teams",
      price: "9.99",
      features: [
        "1 User Account",
        "Basic Analytics Dashboard",
        "Email Support",
        "5GB Cloud Storage",
        "Basic Integrations"
      ],
    },
    {
      title: "Professional",
      description: "Ideal for growing businesses and teams",
      price: "19.99",
      features: [
        "5 User Accounts",
        "Advanced Analytics",
        "Priority Email & Chat Support",
        "50GB Cloud Storage",
        "Advanced Integrations",
        "Custom Reporting"
      ],
    },
    {
      title: "Enterprise",
      description: "Comprehensive solution for large organizations",
      price: "49.99",
      features: [
        "Unlimited User Accounts",
        "Full Analytics Suite",
        "24/7 Dedicated Support",
        "Unlimited Cloud Storage",
        "Premium Integrations",
        "Advanced Security Features",
        "Personal Account Manager",
        "Quarterly Business Review"
      ],
    },
  ];

  return (
    <div className="pricing-panel">
      {plans.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  );
};

export default App;