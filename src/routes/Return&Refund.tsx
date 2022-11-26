import { mainData } from "../data/mainData";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default function ReturnRefund() {
  return (
    <div>
      <Header />
      <h1>Return & Refund policy</h1>
      <section>
        <h2>RETURN</h2>
        <p>
          Our policy lasts 30 days. If 30 days have gone by since your purchase,
          unfortunately, we can’t offer you a refund or exchange. To be eligible
          for a return, your item must be unused and in the same condition that
          you received it. It must also be in the original packaging. To
          complete your return, we require a receipt or proof of purchase.
          Please do not send your purchase back to the manufacturer. There are
          certain situations where only partial refunds are granted (if
          applicable): - Any item not in its original condition is damaged or
          missing parts for reasons not due to our error - Any item that is
          returned more than 30 days after delivery
        </p>
      </section>
      <section>
        <h2>REFUNDS (IF APPLICABLE)</h2>
        <p>
          Once your return is received and inspected, we will send you an email
          to notify you that we have received your returned item. We will also
          notify you of the approval or rejection of your refund. If you are
          approved, then your refund will be processed, and a credit will
          automatically be applied to your credit card or original method of
          payment within a certain amount of days.
        </p>
      </section>
      <section>
        <h2>LATE OR MISSING REFUNDS (IF APPLICABLE)</h2>
        <p>
          If you haven’t received a refund yet, first check your bank account
          again. Then contact your credit card company, it may take some time
          before your refund is officially posted. Next, contact your bank.
          There is often some processing time before a refund is posted. If
          you’ve done all of this and you still have not received your refund
          yet, please contact us at {mainData.email}.
        </p>
      </section>
      <section>
        <h2>EXCHANGES (IF APPLICABLE)</h2>
        <p>
          We only replace items if they are defective or damaged. If you need to
          exchange it for the same item, send us an email at {mainData.email}.
        </p>
      </section>
      <section>
        <h2>GIFTS</h2>
        <p>
          If the item was marked as a gift when purchased and shipped directly
          to you, you’ll receive a gift credit for the value of your return.
          Once the returned item is received, a gift certificate will be mailed
          to you. If the item wasn’t marked as a gift when purchased, or the
          gift giver had the order shipped to themselves to give to you later,
          we will send a refund to the gift giver, and he will find out about
          your return. CONTACTING {mainData.companyName} Email: {mainData.email}
          Phone: {mainData.phone}
          Mailing Address: {mainData.address}
          {mainData.workTime}
        </p>
      </section>
      <Footer />
    </div>
  );
}
