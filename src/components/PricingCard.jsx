import React from 'react';
import './PricingCard.css';

const PricingCard = ({ plan }) => {
  return (
    <div className="pricing-card">
      <div className="card-content">
        <div className="plan-header">
          <h2 className="plan-title">{plan.title}</h2>
          <p className="plan-description">{plan.description}</p>
        </div>
        
        <div className="price-section">
          <div className="price-container">
            <span className="currency">$</span>
            <span className="price">{plan.price.split('.')[0]}</span>
            <span className="decimal">{plan.price.split('.')[1] || '00'}</span>
            <span className="period">/month</span>
          </div>
        </div>
        
        <ul className="feature-list">
          {plan.features.map((feature, index) => (
            <li key={index} className="feature-item">
              <span className="checkmark">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="card-footer">
          <button className="cta-button">Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;