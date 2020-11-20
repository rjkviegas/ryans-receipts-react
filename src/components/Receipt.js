import React from 'react';

export default function Receipt({ receipt}) {

    function phoneNumFormat (aPhoneNum) {
        return `+${aPhoneNum[0]} ` +
        `(${aPhoneNum.slice(1, 4)}) ` +
        `${aPhoneNum.slice(4, 7)}` +
        `-${aPhoneNum.slice(7)}`
    }

    function usd(anAmount) {
        return `$${Number.parseFloat(anAmount).toFixed(2)}`;
    }

    return (
        <section id={receipt.shopName.toLowerCase().replace(/ /g, "-")}>
            <h3>{receipt.shopName}</h3>
            <p>{receipt.address}</p>
            <p>{phoneNumFormat(receipt.phone)}</p>
            <p>Customer: {receipt.customer}</p>
            <table id="table" className="center">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Discount %</th>
                        <th>Discount Amount</th>
                        <th>Total Amount</th>
                    </tr> 
                </thead>
                <tbody>
                    {receipt.items.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.quantity}</td>
                                <td>{usd(item.unitPrice)}</td>
                                <td>{item.discPercent}</td>
                                <td>{usd(item.discAmount)}</td>
                                <td>{usd(item.totalAmount)}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <th className="total" colSpan="5">Pre Tax Total :</th>
                        <td>{usd(receipt.preTaxTotal)}</td>
                    </tr>
                    <tr>
                        <th className="total" colSpan="5">Tax ({receipt.taxRate}%) :</th>
                        <td>{usd(receipt.taxTotal)}</td>
                    </tr>
                    {receipt.totalDiscount &&
                    <tr>
                        <th id="total-discount" colSpan="6">
                            {receipt.totalDiscount.percent}% off of orders over {usd(receipt.totalDiscount.limit)}
                        </th>
                    </tr>}
                    <tr>
                        <th className="total" id="final-total" colSpan="5">Final Amount :</th>
                        <th>{usd(receipt.finalAmount)}</th>
                    </tr>
                    <tr>
                        <th className="total" id="cash" colSpan="5">Cash :</th>
                        <th>{usd(receipt.cash)}</th>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th className="total" id="change" colSpan="5">Change :</th>
                        <th>{usd(receipt.change)}</th>
                    </tr>   
                </tfoot>
            </table>
        </section>
    )
}
