export class DashboardService {
  getTableData() {
    return fetch('data/sentiment-data-table.json').then(res => res.json()).then(d => d.data);
  }

  getGraphData() {
    return fetch('data/sentiment-data-graph.json').then(res => res.json()).then(d => d.data);
  }
}