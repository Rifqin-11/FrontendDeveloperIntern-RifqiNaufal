import { IdeasApiResponse } from '@/types';

export async function fetchIdeas(params: {
  page?: number;
  size?: number;
  sort?: 'newest' | 'oldest';
}): Promise<IdeasApiResponse> {
  const { page = 1, size = 10, sort = 'newest' } = params;

  const sortParam = sort === 'newest' ? '-published_at' : 'published_at';

  const searchParams = new URLSearchParams({
    'page[number]': page.toString(),
    'page[size]': size.toString(),
    'sort': sortParam,
    'append[0]': 'small_image',
    'append[1]': 'medium_image',
  });

  const response = await fetch(
    `https://suitmedia-backend.suitdev.com/api/ideas?${searchParams}`,
    {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  const data: IdeasApiResponse = await response.json();
  return data;
}
