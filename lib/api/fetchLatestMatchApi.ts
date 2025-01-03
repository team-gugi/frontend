export interface IMatePost {
  mateId: string;
  title: string;
  content: string;
  daysSinceWritten: number;
  daysUntilGame: number;
  confirmedMembers: number;
  updatedAt: string;
  options: {
    gender: string;
    age: string;
    date: string;
    team: string;
    member: number;
    stadium: string;
  };
}

export async function fetchLatestPosts(
  cursor: string | null = null,
): Promise<IMatePost[]> {
  const url = cursor
    ? `${process.env.NEXT_PUBLIC_API_URL}/api/v1/mate/latest?cursor=${encodeURIComponent(cursor)}`
    : `${process.env.NEXT_PUBLIC_API_URL}/api/v1/mate/latest`;

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data = await response.json();
  return data.payload;
}
