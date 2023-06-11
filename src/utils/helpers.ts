export function transformData(data: any) {
  return (
    data?.documents?.map((document: any) => ({
      id: document.$id,
      title: document.title,
      description: document.description,
      amount: document.amount,
      date: new Date(document.date)?.toDateString(),
    })) ?? []
  );
}
