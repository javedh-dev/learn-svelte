import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies, url }) => {
	// Check if the username cookie is not set. If so, redirect to the authentication page
	if (!cookies.get('username')) {
		throw redirect(302, `/form-actions/auth?redirectTo=${url.pathname}`);
	}

	return {
		newsArticles: [
			{
				title: 'Global Economy Shows Signs of Recovery',
				author: 'Jane Doe',
				date: '2024-09-20',
				content:
					'The global economy is showing signs of recovery after a tumultuous year, with key indicators pointing to growth in multiple sectors. Experts suggest that government stimulus and increased consumer spending are primary drivers of this trend.',
				category: 'Business',
				source: 'Financial Times',
				url: 'https://www.financialtimes.com/economy-recovery'
			},
			{
				title: 'Breakthrough in Renewable Energy Technology',
				author: 'John Smith',
				date: '2024-09-21',
				content:
					'Scientists have developed a new technology that could revolutionize renewable energy production. The breakthrough involves a more efficient way to harness solar power, making it cheaper and more accessible.',
				category: 'Science',
				source: 'Science Daily',
				url: 'https://www.sciencedaily.com/renewable-energy-breakthrough'
			},
			{
				title: 'Historic Peace Agreement Reached in Middle East',
				author: 'Sara Ali',
				date: '2024-09-20',
				content:
					'After years of conflict, a historic peace agreement has been signed between rival factions in the Middle East. The deal is expected to bring stability to the region and is being hailed as a major diplomatic achievement.',
				category: 'World',
				source: 'Al Jazeera',
				url: 'https://www.aljazeera.com/middle-east-peace-agreement'
			},
			{
				title: 'Tech Giant Unveils New AI Assistant',
				author: 'Michael Brown',
				date: '2024-09-22',
				content:
					'A leading tech company has announced the release of a new AI assistant that promises to revolutionize the way we interact with technology. The assistant is designed to be more intuitive and user-friendly than its predecessors.',
				category: 'Technology',
				source: 'TechCrunch',
				url: 'https://www.techcrunch.com/new-ai-assistant'
			},
			{
				title: 'Global Warming Reaches Record Levels',
				author: 'Emma White',
				date: '2024-09-21',
				content:
					'Climate scientists have reported that global temperatures have reached record levels this year. The findings highlight the urgent need for action to combat climate change and its devastating effects.',
				category: 'Environment',
				source: 'National Geographic',
				url: 'https://www.nationalgeographic.com/global-warming-record'
			},
			{
				title: 'Sports Legend Announces Retirement',
				author: 'David Green',
				date: '2024-09-20',
				content:
					"In a surprising move, a sports legend has announced their retirement after a long and successful career. Fans and colleagues have expressed admiration and gratitude for the athlete's contributions to the sport.",
				category: 'Sports',
				source: 'ESPN',
				url: 'https://www.espn.com/sports-legend-retirement'
			},
			{
				title: 'New Study Reveals Health Benefits of Coffee',
				author: 'Sophia Johnson',
				date: '2024-09-21',
				content:
					'A recent study has revealed that drinking coffee in moderation may have several health benefits, including reducing the risk of certain diseases. Researchers emphasize the importance of balance in caffeine consumption.',
				category: 'Health',
				source: 'Healthline',
				url: 'https://www.healthline.com/coffee-health-benefits'
			},
			{
				title: 'Election Results Spark Controversy',
				author: 'Carlos Martinez',
				date: '2024-09-20',
				content:
					'The recent election results have sparked controversy and protests in the capital city, with allegations of voter fraud and calls for a recount. Officials are urging calm as they investigate the claims.',
				category: 'Politics',
				source: 'BBC News',
				url: 'https://www.bbc.com/election-results-controversy'
			},
			{
				title: 'Art Exhibit Celebrates Diversity',
				author: 'Lily Kim',
				date: '2024-09-22',
				content:
					'A new art exhibit celebrating diversity and inclusion has opened at a renowned museum. The exhibit features works from artists of various backgrounds, highlighting themes of identity and representation.',
				category: 'Culture',
				source: 'The Guardian',
				url: 'https://www.theguardian.com/art-exhibit-diversity'
			}
		]
	};
};
