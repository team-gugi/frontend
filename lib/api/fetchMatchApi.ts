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
  // 필수 정보 외에 cursor 기반 페이징을 위한 nextCursor 추가
  nextCursor?: string | null; // 또는 number 타입으로 설정 가능
}

interface IFilters {
  gender?: string | null;
  age?: string | null;
  date?: string | null;
  team?: string | null;
  member?: number | null;
  stadium?: string | null;
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
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch latest posts');
  }

  const data = await response.json();
  return data.payload;
}

// export async function fetchFilteredPosts(
//   filters: IFilters,
//   cursor: string | null = null,
// ): Promise<IMatePost[]> {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/v1/mate/relevant`,
//     {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(filters),
//     },
//   );

//   if (!response.ok) {
//     throw new Error('Failed to fetch filtered posts');
//   }

//   const data = await response.json();
//   return data.payload;
// }

export async function fetchFilteredPosts(
  filters: IFilters,
  cursor: string | null = null,
): Promise<IMatePost[]> {
  // 필터를 쿼리 파라미터로 변환하는 함수
  const buildQueryParams = (filters: IFilters, cursor: string | null) => {
    const params: Record<string, string> = {};

    if (filters.gender) params.gender = filters.gender;
    if (filters.age) params.age = filters.age;
    if (filters.date) params.date = filters.date;
    if (filters.team) params.team = filters.team;
    if (filters.member !== null && filters.member !== undefined)
      params.member = String(filters.member);
    if (filters.stadium) params.stadium = filters.stadium;
    if (cursor) params.cursor = cursor;

    // 쿼리 파라미터를 ? 뒤에 붙여서 반환
    return new URLSearchParams(params).toString();
  };

  const queryParams = buildQueryParams(filters, cursor);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/mate/relevant?${queryParams}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch filtered posts');
  }

  const data = await response.json();
  return data.payload;
}
