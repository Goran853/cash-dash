import { expect, it, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import BarChart from '../../components/Dashboard/BarChart';
import { mocks } from '../mocks/index';
import { TransactionsContext } from '../../transaction';
import { afterEach } from 'node:test';

//Todo: add integration testing: check that save transaction renders form input into transaction display

describe('Dashboard screen renders bar bar chart with expected display with zero transactions', () => {
  beforeEach(() => {
    const setTransaction = vi.fn();
    render(
      <TransactionsContext.Provider
        value={{
          transactions: mocks.emptyTransactions,
          setTransaction,
        }}
      >
        <BarChart transactionsByYear={mocks.emptyTransactions} />
      </TransactionsContext.Provider>
    );
  });
  afterEach(cleanup);
  it('should render bar chart', () => {
    expect(screen.getByTestId('bar-chart')).toBeInTheDocument();
  });
});

describe('Dashboard screen renders bar chart with expected inputs when transactions are present', () => {
  beforeEach(() => {
    const setTransaction = vi.fn();
    render(
      <TransactionsContext.Provider
        value={{
          transactions: mocks.multipleTransactions.data,
          setTransaction,
        }}
      >
        <BarChart transactionsByYear={mocks.multipleTransactions.data} />
      </TransactionsContext.Provider>
    );
  });
  afterEach(cleanup);
  it('should render bar chart', () => {
    expect(screen.getByTestId('bar-chart')).toBeInTheDocument();
  });
});