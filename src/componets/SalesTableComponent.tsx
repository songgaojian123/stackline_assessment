import React, { useState, useEffect } from "react";
import { Sale } from "../types/Types";

interface SalesTableProps {
  salesData: Sale[];
}

const SalesTableComponent: React.FC<SalesTableProps> = ({ salesData }) => {
  const [sortedData, setSortedData] = useState<Sale[]>([]);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  useEffect(() => {
    setSortedData(salesData); 
  }, [salesData]);

  const sortData = (key: keyof Sale) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sorted = [...salesData].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    setSortedData(sorted);
  };
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortData("weekEnding")}>Week Ending</th>
            <th onClick={() => sortData("retailSales")}>Retail Sales</th>
            <th onClick={() => sortData("wholesaleSales")}>Wholesale Sales</th>
            <th onClick={() => sortData("unitsSold")}>Units Sold</th>
            <th onClick={() => sortData("retailerMargin")}>Retailer Margin</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((sale, index) => (
            <tr key={index}>
              <td>{sale.weekEnding}</td>
              <td>{sale.retailSales}</td>
              <td>{sale.wholesaleSales}</td>
              <td>{sale.unitsSold}</td>
              <td>{sale.retailerMargin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default SalesTableComponent;
