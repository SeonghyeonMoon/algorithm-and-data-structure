/*
 * 마켓 통합 추천 종목 목록을 반환하도록 함수를 작성해주세요.
 * (반환 타입: Promise<string[]>)
 */
async function solution(fetchMarkets, fetchStocks) {
	setTimeout(() => {
		reject(new Error('timeout'));
	}, 1000);
  fetchMarkets().then((markets) => {
    Promise.all([markets.map((market) => async () => await fetchStocks(market))]);
  })
	const markets = await fetchMarkets();
	return await Promise.all([markets.map((market) => fetchStocks(market))]);
}
