'use client';

import React, { useState } from 'react';
import { OnboardingScreen } from '@/presentation/modules/onboarding/OnboardingScreen';
import { ShopSelectionScreen } from '@/presentation/modules/shop/ShopSelectionScreen';
import { OrderTrackingScreen } from '@/presentation/modules/tracking/OrderTrackingScreen';

type AppStep = 'ONBOARDING' | 'SHOP_SELECTION' | 'TRACKING';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<AppStep>('ONBOARDING');
  const [selectedShopId, setSelectedShopId] = useState<string | null>(null);

  const handleOnboardingComplete = () => {
    setCurrentStep('SHOP_SELECTION');
  };

  const handleShopSelect = (shopId: string) => {
    setSelectedShopId(shopId);
    setCurrentStep('TRACKING'); // Directly skip to tracking stage for layout visual checks
  };

  switch (currentStep) {
    case 'ONBOARDING':
      return <OnboardingScreen onComplete={handleOnboardingComplete} />;
    case 'SHOP_SELECTION':
      return <ShopSelectionScreen onSelectShop={handleShopSelect} />;
    case 'TRACKING':
      return <OrderTrackingScreen orderId="FT-2026-9938" onBackToHome={() => setCurrentStep('SHOP_SELECTION')} />;
    default:
      return <OnboardingScreen onComplete={handleOnboardingComplete} />;
  }
}