export interface Quote {
  id: string;
  clientName: string;
  date: string;
  amount: number;
  acceptedAt?: string;
}
export const QuotePdfTemplate = ({ quote }: { quote: any }) => {
  return (
    <div className='w-full font-sans p-8 text-gray-900'>
      <h1 className='text-2xl font-bold mb-2'>Quote</h1>
      <div className='mb-4'>
        <div>Client: {quote.clientName}</div>
        <div>Date: {quote.date}</div>
        <div>Total: {quote.amount} €</div>
      </div>
    </div>
  );
};
