'use client';

import type { LazyExoticComponent } from 'react';

import { lazy } from 'react';

export enum Modals {
  DemoModal,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const modalsConfig: Record<Modals, LazyExoticComponent<any>> = {
  [Modals.DemoModal]: lazy(() => import('@/components/common/modal/demoModal')),
};
