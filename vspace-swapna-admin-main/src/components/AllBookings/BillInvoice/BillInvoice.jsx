import React, { useState } from "react";
import styles from "./BillInvoice.module.css";
import StatusBar from "../../Header/index";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const BillInvoice = () => {
  const successToast = (message) => toast.success(message);
  const warningToast = (message) => toast.warning(message);

  const [editable, setEditable] = useState(false);
  const location = useLocation();
  const bookingData = location.state;

  const initialCarDetails = {
    name: bookingData.carBooked,
    duration: 24,
    rate: bookingData.totalCost,
    taxRate: 5,
    customerName: bookingData.customerName,
  };

  const [carDetails, setCarDetails] = useState(initialCarDetails);

  const calculateTotalWithTax = (rate, taxRate, durationInHours) => {
    const hourlyRate = rate / 24;
    const baseAmount = hourlyRate * durationInHours;
    const taxAmount = baseAmount * (taxRate / 100);
    return baseAmount + taxAmount;
  };

  const totalWithTax = calculateTotalWithTax(
    carDetails.rate,
    carDetails.taxRate,
    carDetails.duration
  );

  const handleEdit = () => {
    if (editable) {
      successToast("Changes saved successfully!");
    }
    setEditable(!editable);
  };

  const handleChange = (e, field) => {
    setCarDetails((prevDetails) => ({
      ...prevDetails,
      [field]: e.target.value,
    }));
  };

  const handleDiscard = () => {
    setCarDetails(initialCarDetails);
    setEditable(false);
    warningToast("Changes discarded!");
  };

  const date = new Date();

  return (
    <>
      <div className={styles.main}>
        <StatusBar className={styles.statusBar} />
        <div className={styles.container}>
          <h2 className={styles.heading}>Bill</h2>
          <div className={styles.billBox}>
            <div className={styles.top}>
              <div className={styles.billInvoice}>Bill Invoice</div>
              <div className={styles.date}>
                Issue Date: {date.getMonth() + 1}/{date.getDate()}/
                {date.getFullYear()}
              </div>
              <hr className={styles.hLine} />
            </div>
            <div className={styles.middle}>
              <div className={styles.billFrom}>
                <div className={styles.fromDetailsB}>Bill From : </div>
                <div className={styles.fromDetails}>Swapna Self Drive Cars</div>
                <div className={styles.fromDetails}>
                  Kondapur, Hyderabad, Telangana, 500042.
                </div>
                <div className={styles.fromDetails}>
                  swapnaselfdrivecars@gmail.com
                </div>
                <div className={styles.fromDetails}>
                  8309772580 / 9550884883
                </div>
              </div>
              <div className={styles.billTo}>
                <div className={styles.toDetailsB}>Bill To : </div>
                <div className={styles.toDetails}>{carDetails.customerName}</div>
                <div className={styles.toDetails}>
                  Sangamner, Hyderabad, Telangana, 500025.
                </div>
                <div className={styles.toDetails}>ramesh@gmail.com</div>
                <div className={styles.toDetails}>9987654321</div>
              </div>
            </div>
            <hr className={styles.hLine} />
            <div className={styles.bottom}>
              <div className={styles.headerBox}>
                <div className={styles.header}>Car Name</div>
                <div className={styles.header}>Time Duration</div>
                <div className={styles.header}>Rate</div>
                <div className={styles.header}>Tax</div>
                <div className={styles.header}>Amount</div>
              </div>
              <div className={styles.dataBox}>
                <div className={styles.data}>
                  {editable ? (
                    <input
                      type="text"
                      value={carDetails.name}
                      onChange={(e) => handleChange(e, "name")}
                      className={styles.editableInput}
                    />
                  ) : (
                    carDetails.name
                  )}
                </div>
                <div className={styles.data}>
                  {editable ? (
                    <input
                      type="number"
                      value={carDetails.duration}
                      onChange={(e) => handleChange(e, "duration")}
                      className={styles.editableInput}
                      min={0}
                    />
                  ) : (
                    `${carDetails.duration} hours`
                  )}
                </div>
                <div className={styles.data}>
                  {editable ? (
                    <input
                      type="number"
                      value={carDetails.rate}
                      onChange={(e) => handleChange(e, "rate")}
                      className={styles.editableInput}
                      min={0}
                    />
                  ) : (
                    carDetails.rate
                  )}
                </div>
                <div className={styles.data}>
                  {editable ? (
                    <input
                      type="number"
                      value={carDetails.taxRate}
                      onChange={(e) => handleChange(e, "taxRate")}
                      className={styles.editableInput}
                      min={0}
                    />
                  ) : (
                    `${carDetails.taxRate}%`
                  )}
                  {editable && (
                    <span className={styles.taxAmount}>
                      ({((carDetails.rate * carDetails.taxRate) / 100).toFixed(2)})
                    </span>
                  )}
                </div>
                <div className={styles.data}>
                  Rs. {totalWithTax.toFixed(2)}
                </div>
              </div>
            </div>

            <div className={styles.subTotal}>
              <div className={styles.one}>
                <div className={styles.subTotalText}>Sub Total</div>
                <div className={styles.subTotalAmount}>
                  Rs. {totalWithTax.toFixed(2)}
                </div>
              </div>
              <div className={styles.one}>
                <div className={styles.subTotalText}>Discount</div>
                <div className={styles.subTotalAmount}>Rs. 0</div>
              </div>
              <div className={styles.totalSection}>
                <hr className={styles.line} />
                <div className={styles.one}>
                  <div className={styles.subTotalText}>Total</div>
                  <div className={styles.subTotalAmountF}>
                    Rs. {totalWithTax.toFixed(2)}
                  </div>
                </div>
                <hr className={styles.line} />
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <button
              type="button"
              className={styles.editBtn}
              onClick={handleEdit}
            >
              {editable ? "Save" : "Edit"}
            </button>
            {editable && (
              <button
                type="button"
                className={styles.discardBtn}
                onClick={handleDiscard}
              >
                Discard
              </button>
            )}
            <button
              type="button"
              className={styles.printBtn}
              onClick={() => {
                window.print();
                successToast("Invoice printed successfully!");
              }}
            >
              Print
            </button>
            <button type="button" className={styles.shareBtn}>
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillInvoice;
