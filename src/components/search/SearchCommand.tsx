
"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Calculator, Calendar, CreditCard, Settings, Smile, User, Search, Home, ShoppingBag, Coins, Layers, Footprints, Dna, Sparkles, Stamp, Trophy } from "lucide-react"
import { MARKETPLACE_CATEGORIES } from '@/config/categories';

const ICON_MAP: Record<string, any> = {
    'Footprints': Footprints,
    'Layers': Layers,
    'Dna': Dna,
    'Coins': Coins,
    'Sparkles': Sparkles,
    'Stamp': Stamp,
    'Trophy': Trophy,
};

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { DialogTitle, DialogDescription } from "../ui/dialog"

interface SearchCommandProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SearchCommand({ open, setOpen }: SearchCommandProps) {
    const router = useRouter()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((prev: boolean) => !prev)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [setOpen])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [setOpen])

    const [search, setSearch] = React.useState("")

    const handleSearch = () => {
        if (!search) return;
        runCommand(() => router.push(`/browse?q=${encodeURIComponent(search)}`))
    }

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <DialogTitle className="sr-only">Search the site</DialogTitle>
            <DialogDescription className="sr-only">Use this command palette to search for products or navigate to different pages.</DialogDescription>
            <CommandInput
                placeholder="Type a command or search..."
                value={search}
                onValueChange={setSearch}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
            />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                {search && (
                    <CommandGroup heading="Search">
                        <CommandItem onSelect={handleSearch}>
                            <Search className="mr-2 h-4 w-4" />
                            <span>Search for "{search}"</span>
                        </CommandItem>
                    </CommandGroup>
                )}
                <CommandGroup heading="Suggestions">
                    <CommandItem onSelect={() => runCommand(() => router.push('/browse'))}>
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        <span>Browse All</span>
                    </CommandItem>
                    {MARKETPLACE_CATEGORIES.slice(0, 3).map(cat => {
                        const Icon = ICON_MAP[cat.iconName || 'Layers'] || Layers;
                        return (
                            <CommandItem key={cat.id} onSelect={() => runCommand(() => router.push(cat.href || `/category/${cat.slug}`))}>
                                <Icon className="mr-2 h-4 w-4" />
                                <span>{cat.name}</span>
                            </CommandItem>
                        );
                    })}
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="My Account">
                    <CommandItem onSelect={() => runCommand(() => router.push('/profile'))}>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push('/sell/dashboard'))}>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Seller Dashboard</span>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}
