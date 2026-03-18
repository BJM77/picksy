
import { Category } from '@/lib/types';

export interface ExtendedCategory extends Category {
    iconName?: string;
    variantColor?: string;
}

export const MARKETPLACE_CATEGORIES: ExtendedCategory[] = [
    {
        id: 'cat_sneakers',
        name: 'Sneakers',
        description: 'Authentic sneakers from top brands',
        slug: 'sneakers',
        imageUrl: '/images/categories/sneakers.jpg',
        section: 'Marketplace',
        order: 1,
        iconName: 'Footprints',
        variantColor: 'text-emerald-600 bg-emerald-100',
        subcategories: [
            { id: 'sub_jordan_sneakers', name: 'Jordan', slug: 'jordan', parentId: 'cat_sneakers' },
            { id: 'sub_kobe_sneakers', name: 'Kobe', slug: 'kobe', parentId: 'cat_sneakers' },
            { id: 'sub_limited_sneakers', name: 'Limited', slug: 'limited', parentId: 'cat_sneakers' },
            { id: 'sub_vintage_sneakers', name: 'Vintage', slug: 'vintage', parentId: 'cat_sneakers' },
            { id: 'sub_basketball_sneakers', name: 'Basketball', slug: 'basketball', parentId: 'cat_sneakers' },
            { id: 'sub_men_sneakers', name: 'Men\'s Sneakers', slug: 'mens-sneakers', parentId: 'cat_sneakers' },
            { id: 'sub_women_sneakers', name: 'Women\'s Sneakers', slug: 'womens-sneakers', parentId: 'cat_sneakers' },
            { id: 'sub_youth_sneakers', name: 'Youth (GS)', slug: 'youth-sneakers', parentId: 'cat_sneakers' },
        ]
    },
    {
        id: 'cat_cards',
        name: 'Collector Cards',
        description: 'Elite NBA and Basketball cards',
        slug: 'collector-cards',
        imageUrl: '/images/categories/cards.jpg',
        section: 'Marketplace',
        order: 2,
        iconName: 'Layers',
        variantColor: 'text-indigo-600 bg-indigo-100',
        subcategories: [
            { id: 'sub_basketball_cards', name: 'Basketball Cards', slug: 'basketball-cards', parentId: 'cat_cards' },
            { id: 'sub_jordan_cards', name: 'Jordan', slug: 'jordan', parentId: 'cat_cards' },
            { id: 'sub_flag_cards', name: 'Flag', slug: 'flag', parentId: 'cat_cards' },
            { id: 'sub_wembanyama_cards', name: 'Wembanyama', slug: 'wembanyama', parentId: 'cat_cards' },
            { id: 'sub_kobe_cards', name: 'Kobe', slug: 'kobe', parentId: 'cat_cards' },
            { id: 'sub_curry_cards', name: 'Curry', slug: 'curry', parentId: 'cat_cards' },
            { id: 'sub_rookies_cards', name: 'Rookies', slug: 'rookies', parentId: 'cat_cards' },
            { id: 'sub_signed_cards', name: 'Signed', slug: 'signed', parentId: 'cat_cards' },
            { id: 'sub_pokemon_cards', name: 'Pokemon', slug: 'pokemon', parentId: 'cat_cards' },
            { id: 'sub_top100_cards', name: 'Top 100', slug: 'top-100', parentId: 'cat_cards' },
        ]
    },
    {
        id: 'cat_pokemon',
        name: 'Pokemon',
        slug: 'pokemon-cards',
        section: 'Marketplace',
        order: 3,
        iconName: 'Dna',
        variantColor: 'text-yellow-600 bg-yellow-100',
        href: '/category/pokemon-cards'
    },
    {
        id: 'cat_coins',
        name: 'Coins',
        slug: 'coins',
        section: 'Marketplace',
        order: 4,
        iconName: 'Coins',
        variantColor: 'text-blue-600 bg-blue-100',
        href: '/coins'
    },
    {
        id: 'cat_comics',
        name: 'Comics',
        slug: 'comics',
        section: 'Marketplace',
        order: 5,
        iconName: 'Sparkles',
        variantColor: 'text-red-600 bg-red-100',
        href: '/collectibles/comics'
    },
    {
        id: 'cat_stamps',
        name: 'Stamps',
        slug: 'stamps',
        section: 'Marketplace',
        order: 6,
        iconName: 'Stamp',
        variantColor: 'text-green-600 bg-green-100',
        href: '/collectibles/stamps'
    },
    {
        id: 'cat_memorabilia',
        name: 'Memorabilia',
        slug: 'memorabilia',
        section: 'Marketplace',
        order: 7,
        iconName: 'Trophy',
        variantColor: 'text-purple-600 bg-purple-100',
        href: '/category/memorabilia'
    }
];
