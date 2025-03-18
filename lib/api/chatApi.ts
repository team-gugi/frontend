interface IChatbotResponse {
  response: string;
}

export async function sendChatMessage(message: string): Promise<string> {
  console.log('user message : ', message);
  const response = await fetch(`/chat`, {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch chat response');
  }

  console.log('bot response : ', response);
  const data: IChatbotResponse = await response.json();
  return data.response;
}
