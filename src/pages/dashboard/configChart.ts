import { ApexOptions } from 'apexcharts';

import { theme } from '../../styles/theme';

export const series = [
  { name: 'series-1', data: [31, 40, 28, 51, 42, 109, 100] },
];

export function ApexOptionsHelper(): ApexOptions {
  return {
    chart: {
      toolbar: { show: false },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: { show: false },
    dataLabels: { enabled: false },
    tooltip: { enabled: false },
    xaxis: {
      type: 'datetime',
      axisBorder: { color: theme.colors.gray[600] },
      axisTicks: { color: theme.colors.gray[600] },
      categories: [
        '2022-03-19T00:00:00.000Z',
        '2022-03-20T00:00:00.000Z',
        '2022-03-21T00:00:00.000Z',
        '2022-03-22T00:00:00.000Z',
        '2022-03-23T00:00:00.000Z',
        '2022-03-24T00:00:00.000Z',
        '2022-03-25T00:00:00.000Z',
      ],
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  };
}
