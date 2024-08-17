"use client";

import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink,Table, TableHeader, TableCell, TableBody, TableRow } from '@react-pdf/renderer';
// import {  } from '@react-pdf/renderer';

function CustomTable() {
  const data = [
    {
      property: "53-55 Bridge Street, Evesham EF14 4RD",
      tenant: "Abdelilah Frindi t/a Pound Plus",
      periods: [
        { description: "Rent Arrears b/f (former agent)", period: "01/04/23 - 30/04/23", arrearsBF: { amount: 1458.33, vat: 291.67 }, demanded: { amount: 1458.33, vat: 291.67 }, paid: { amount: 1458.33, vat: 291.67 }, arrearsCF: { amount: 0.00, vat: 0.00 }},
        { description: "Rent", period: "01/05/23 - 31/05/23", arrearsBF: { amount: 1458.33, vat: 291.67 }, demanded: { amount: 1458.33, vat: 291.67 }, paid: { amount: 0.00, vat: 0.00 }, arrearsCF: { amount: 1458.33, vat: 291.67 }},
        { description: "Rent", period: "01/06/23 - 30/06/23", arrearsBF: { amount: 507.55, vat: 101.51 }, demanded: { amount: 507.55, vat: 101.51 }, paid: { amount: 0.00, vat: 0.00 }, arrearsCF: { amount: 507.55, vat: 101.51 }},
        { description: "Insurance", period: "30/08/22 - 29/08/23", arrearsBF: { amount: 1458.33, vat: 291.67 }, demanded: { amount: 1458.33, vat: 291.67 }, paid: { amount: 0.00, vat: 0.00 }, arrearsCF: { amount: 1458.33, vat: 291.67 }}
      ]
    },
    {
      property: "12-14 High Street, Stratford ST2 7JF",
      tenant: "Jane Doe Ltd",
      periods: [
        { description: "Rent Arrears b/f (former agent)", period: "01/01/23 - 31/01/23", arrearsBF: { amount: 1234.56, vat: 246.91 }, demanded: { amount: 1234.56, vat: 246.91 }, paid: { amount: 1234.56, vat: 246.91 }, arrearsCF: { amount: 0.00, vat: 0.00 }},
        { description: "Rent", period: "01/02/23 - 28/02/23", arrearsBF: { amount: 1234.56, vat: 246.91 }, demanded: { amount: 1234.56, vat: 246.91 }, paid: { amount: 1234.56, vat: 246.91 }, arrearsCF: { amount: 0.00, vat: 0.00 }},
        { description: "Insurance", period: "01/01/23 - 31/12/23", arrearsBF: { amount: 1234.56, vat: 246.91 }, demanded: { amount: 1234.56, vat: 246.91 }, paid: { amount: 1234.56, vat: 246.91 }, arrearsCF: { amount: 0.00, vat: 0.00 }}
      ]
    }
  ];

  const calculateTotals = (periods:any) => {
    return periods.reduce((acc:any, item:any) => {
      acc.arrearsBF.amount += item.arrearsBF.amount;
      acc.arrearsBF.vat += item.arrearsBF.vat;
      acc.demanded.amount += item.demanded.amount;
      acc.demanded.vat += item.demanded.vat;
      acc.paid.amount += item.paid.amount;
      acc.paid.vat += item.paid.vat;
      acc.arrearsCF.amount += item.arrearsCF.amount;
      acc.arrearsCF.vat += item.arrearsCF.vat;
      return acc;
    }, {
      arrearsBF: { amount: 0, vat: 0 },
      demanded: { amount: 0, vat: 0 },
      paid: { amount: 0, vat: 0 },
      arrearsCF: { amount: 0, vat: 0 }
    });
  };

  const grandTotals = data.reduce((acc, item) => {
    const itemTotals = calculateTotals(item.periods);
    acc.arrearsBF.amount += itemTotals.arrearsBF.amount;
    acc.arrearsBF.vat += itemTotals.arrearsBF.vat;
    acc.demanded.amount += itemTotals.demanded.amount;
    acc.demanded.vat += itemTotals.demanded.vat;
    acc.paid.amount += itemTotals.paid.amount;
    acc.paid.vat += itemTotals.paid.vat;
    acc.arrearsCF.amount += itemTotals.arrearsCF.amount;
    acc.arrearsCF.vat += itemTotals.arrearsCF.vat;
    return acc;
  }, {
    arrearsBF: { amount: 0, vat: 0 },
    demanded: { amount: 0, vat: 0 },
    paid: { amount: 0, vat: 0 },
    arrearsCF: { amount: 0, vat: 0 }
  });

  return (
    <table className="min-w-full border-collapse">
      <thead className="bg-blue-900 text-white">
        <tr>
          <th className="border border-black p-2 text-left">Tenant/Property</th>
          <th className="border border-black p-2 text-left">Period</th>
          <th colSpan={2} className="border border-black p-2 text-center">Arrears B/F</th>
          <th colSpan={2} className="border border-black p-2 text-center">Demanded</th>
          <th colSpan={2} className="border border-black p-2 text-center">Paid</th>
          <th colSpan={2} className="border border-black p-2 text-center">Arrears C/F</th>
        </tr>
        <tr>
          <th className="border border-black p-2 text-left"></th>
          <th className="border border-black p-2 text-left"></th>
          <th className="border border-black p-2 text-center">Amount</th>
          <th className="border border-black p-2 text-center">VAT</th>
          <th className="border border-black p-2 text-center">Amount</th>
          <th className="border border-black p-2 text-center">VAT</th>
          <th className="border border-black p-2 text-center">Amount</th>
          <th className="border border-black p-2 text-center">VAT</th>
          <th className="border border-black p-2 text-center">Amount</th>
          <th className="border border-black p-2 text-center">VAT</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          const itemTotals = calculateTotals(item.periods);
          return (
            <React.Fragment key={index}>
              <tr>
                <td className="border border-black p-2 text-left" rowSpan={item.periods.length + 2}>
                  {item.property}<br />{item.tenant}
                </td>
              </tr>
              {item.periods.map((periodItem, i) => (
                <tr key={i}>
                  <td className="border border-black p-2 text-left">{periodItem.description}<br/>{periodItem.period}</td>
                  <td className="border border-black p-2 text-right">{periodItem.arrearsBF.amount.toFixed(2)}</td>
                  <td className="border border-black p-2 text-right">{periodItem.arrearsBF.vat.toFixed(2)}</td>
                  <td className="border border-black p-2 text-right">{periodItem.demanded.amount.toFixed(2)}</td>
                  <td className="border border-black p-2 text-right">{periodItem.demanded.vat.toFixed(2)}</td>
                  <td className="border border-black p-2 text-right">{periodItem.paid.amount.toFixed(2)}</td>
                  <td className="border border-black p-2 text-right">{periodItem.paid.vat.toFixed(2)}</td>
                  <td className="border border-black p-2 text-right">{periodItem.arrearsCF.amount.toFixed(2)}</td>
                  <td className="border border-black p-2 text-right">{periodItem.arrearsCF.vat.toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td className="border border-black p-2 text-right font-bold" >Sub-total (£)</td>
                <td className="border border-black p-2 text-right font-bold">{itemTotals.arrearsBF.amount.toFixed(2)}</td>
                <td className="border border-black p-2 text-right font-bold">{itemTotals.arrearsBF.vat.toFixed(2)}</td>
                <td className="border border-black p-2 text-right font-bold">{itemTotals.demanded.amount.toFixed(2)}</td>
                <td className="border border-black p-2 text-right font-bold">{itemTotals.demanded.vat.toFixed(2)}</td>
                <td className="border border-black p-2 text-right font-bold">{itemTotals.paid.amount.toFixed(2)}</td>
                <td className="border border-black p-2 text-right font-bold">{itemTotals.paid.vat.toFixed(2)}</td>
                <td className="border border-black p-2 text-right font-bold">{itemTotals.arrearsCF.amount.toFixed(2)}</td>
                <td className="border border-black p-2 text-right font-bold">{itemTotals.arrearsCF.vat.toFixed(2)}</td>
              </tr>
            </React.Fragment>
          );
        })}
        <tr>
          <td className="border border-black p-2 text-right font-bold" colSpan={2}>Grand Total (£)</td>
          <td className="border border-black p-2 text-right font-bold">{grandTotals.arrearsBF.amount.toFixed(2)}</td>
          <td className="border border-black p-2 text-right font-bold">{grandTotals.arrearsBF.vat.toFixed(2)}</td>
          <td className="border border-black p-2 text-right font-bold">{grandTotals.demanded.amount.toFixed(2)}</td>
          <td className="border border-black p-2 text-right font-bold">{grandTotals.demanded.vat.toFixed(2)}</td>
          <td className="border border-black p-2 text-right font-bold">{grandTotals.paid.amount.toFixed(2)}</td>
          <td className="border border-black p-2 text-right font-bold">{grandTotals.paid.vat.toFixed(2)}</td>
          <td className="border border-black p-2 text-right font-bold">{grandTotals.arrearsCF.amount.toFixed(2)}</td>
          <td className="border border-black p-2 text-right font-bold">{grandTotals.arrearsCF.vat.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default CustomTable;

