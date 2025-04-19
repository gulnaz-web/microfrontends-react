import React, { Suspense } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

// Импортируем все необходимые компоненты из микрофронтенда
const RemoteApp = React.lazy(() => import('react_front/App')); // Основное приложение
const RemoteGoals = React.lazy(() => import('react_front/GoalsSection')); // Компонент целей
const RemoteStatistics = React.lazy(() => import('react_front/StatisticsSection')); // Компонент статистики
const RemoteTransactions = React.lazy(() => import('react_front/TransactionsSection')); // Компонент транзакций
const RemoteNewTransaction = React.lazy(() => import('react_front/NewTransactionSection')); // Компонент новой транзакции

// Фабрика для оборачивания компонентов в ErrorBoundary и Suspense
const RemoteFactory = (JSX: JSX.Element): JSX.Element => (
   <ErrorBoundary>
      <Suspense fallback={<div>Загрузка...</div>}>{JSX}</Suspense>
   </ErrorBoundary>
);

// Экспортируем компоненты с обработкой ошибок
export const RemoteAppWithErrorBoundary = (props: any) => RemoteFactory(<RemoteApp {...props} />);
export const RemoteGoalsWithErrorBoundary = (props: any) =>
   RemoteFactory(<RemoteGoals {...props} />);
export const RemoteStatisticsWithErrorBoundary = (props: any) =>
   RemoteFactory(<RemoteStatistics {...props} />);
export const RemoteTransactionsWithErrorBoundary = (props: any) =>
   RemoteFactory(<RemoteTransactions {...props} />);
export const RemoteNewTransactionWithErrorBoundary = (props: any) =>
   RemoteFactory(<RemoteNewTransaction {...props} />);
