import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./customDataTableBasic.scss";
function CustomDataTableBasic({ data = [], columns = [], onSelectedData }) {
  return (
    <div className="card datatable-responsive">
      <DataTable
        id="datatablebasic"
        value={data}
        paginator
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        rows={10}
        selectionMode="single"
        onSelectionChange={(e) => onSelectedData(e.value, e.originalEvent)}
        rowsPerPageOptions={[5, 10, 25, 50, 100, 200]}
        className="p-datatable-sm p-datatable-striped p-datatable-responsive"
        emptyMessage="You have no data at this time"
      >
        {columns.map((column, index) => (
          <Column
            key={index}
            header={column.header}
            field={column.field}
            body={column.body}
            sortable={column.sortable}
            style={{
              width: `${column.width}`,
            }}
          />
        ))}
      </DataTable>
    </div>
  );
}

export default CustomDataTableBasic;
