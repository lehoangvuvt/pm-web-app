import { db } from "@/db";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../consts";
import { Card } from "@/db/repositories/cards.repo";

async function getCardsByProjectSlug({
  queryKey,
}: {
  queryKey: any;
}): Promise<Card[]> {
  const slug = queryKey[1];
  const cards = await db.cards.getAllCardsByProjectSlug(slug);
  return cards;
}

const useCardsByProjectSlug = (slug: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.USE_CARDS_BY_PROJECT_SLUG, slug],
    queryFn: getCardsByProjectSlug,
  });
  return {
    cards: data ?? [],
    isLoadingCardsByProjectSlug: isLoading,
    getCardsByProjectSlugError: error,
  };
};

export default useCardsByProjectSlug;
