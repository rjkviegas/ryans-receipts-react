import React from 'react';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Receipt({ receipt}) {

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
        <div>
            <Accordion defaultActiveKey="1">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            {receipt.shopName}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            {receipt.address}
                            <br />
                            {phoneNumFormat(receipt.phone)}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <p>Customer: {receipt.customer}</p>
            <Table 
                id="table"
                className="center"
                striped
                bordered
                hover
                size="sm"
            >
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
                        <th>{usd(receipt.preTaxTotal)}</th>
                    </tr>
                    <tr>
                        <th className="total" colSpan="5">Tax ({receipt.taxRate}%) :</th>
                        <th>{usd(receipt.taxTotal)}</th>
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
            </Table>
        </div>
    )
}

export default Receipt;
