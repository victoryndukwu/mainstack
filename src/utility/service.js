function formatDate(inputDate) {
  const parts = inputDate.split("-");
  const year = parts[0];
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthAbbreviation = months[month - 1];

  const formattedDate = `${monthAbbreviation} ${day}, ${year}`;
  return formattedDate;
}

const customLabels = {
  balance: "Available Balance",
  total_payout: "Total Payout",
  total_revenue: "Total Revenue",
  pending_payout: "Pending Payout",
  ledger_balance: "Ledger Balance",
};

export { formatDate, customLabels };
