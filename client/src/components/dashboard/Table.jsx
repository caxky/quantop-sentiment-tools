import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function Table(props) {
  const companyHeader = props.header + " Name";

  return (
    <DataTable value={props.data} paginator rows={10} sortMode="multiple" removableSort>
      <Column field="id" header="ID" sortable/>
      <Column field="company" header={companyHeader} sortable/>
      <Column field="price" header="Price" sortable/>
      <Column field="dayprice" header="24h Price" sortable/>
      <Column field="weekprice" header="7d Price" sortable/>
      <Column field="monthprice" header="30d Price" sortable/>
      <Column field="daysentiment" header="24h Sentiment" sortable/>
      <Column field="weeksentiment" header="7d Sentiment" sortable/>
      <Column field="monthsentiment" header="30d Sentiment" sortable/>
    </DataTable>
  )
}
