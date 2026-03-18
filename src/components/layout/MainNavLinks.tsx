"use client"

import * as React from "react";
import Link from 'next/link';
import { features } from '@/lib/features';
import { useUser } from '@/firebase';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';

import { 
  PlusCircle, 
  Scan, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Truck,
  ChevronDown
} from 'lucide-react';

export function MainNavLinks() {
  const { user } = useUser();

  const navItemClasses = cn(
    buttonVariants({ variant: "ghost" }),
    "text-sm font-medium hover:bg-transparent px-0 hover:text-primary transition-colors data-[state=open]:text-primary"
  );

  const dropdownItemClasses = "flex items-start gap-3 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground";

  return (
    <nav className="flex items-center gap-6">
      <Link href="/browse" className={navItemClasses}>
        Explore
      </Link>

      <Link href="/multilisting-deals" className={navItemClasses}>
        Multi
      </Link>

      {features.bidsy && (
        <Link href="/bidsy" className={navItemClasses}>
          Bidsy
        </Link>
      )}

      {features.wtb && (
        <Link href="/wtb" className={navItemClasses}>
          Wanted
        </Link>
      )}

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={cn(navItemClasses, "h-auto py-0 gap-1")}>
              Sell
            </NavigationMenuTrigger>
            <NavigationMenuContent className="min-w-max">
              <ul className="grid w-[350px] gap-2 p-4 md:w-[450px] lg:w-[500px] grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/sell/create" className={dropdownItemClasses}>
                      <PlusCircle className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <div className="text-sm font-bold leading-none">Sell Item</div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                          List a new item on the marketplace
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/scan" className={dropdownItemClasses}>
                      <Scan className="h-5 w-5 mt-0.5 text-blue-500" />
                      <div>
                        <div className="text-sm font-bold leading-none">Scan</div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                          Scan cards using AI technology
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/tools/grader" className={dropdownItemClasses}>
                      <Sparkles className="h-5 w-5 mt-0.5 text-amber-500" />
                      <div>
                        <div className="text-sm font-bold leading-none">AI Grader</div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                          Get instant AI grading for your cards
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/research" className={dropdownItemClasses}>
                      <TrendingUp className="h-5 w-5 mt-0.5 text-green-500" />
                      <div>
                        <div className="text-sm font-bold leading-none">Research</div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                          Access marketplace data and trends
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/dealsafe" className={dropdownItemClasses}>
                      <ShieldCheck className="h-5 w-5 mt-0.5 text-indigo-500" />
                      <div>
                        <div className="text-sm font-bold leading-none">DealSafe</div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                          Secure escrow payments for direct deals
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                {features.consignment && (
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/consign" className={dropdownItemClasses}>
                        <Truck className="h-5 w-5 mt-0.5 text-purple-500" />
                        <div>
                          <div className="text-sm font-bold leading-none">Consign</div>
                          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                            Let us sell your items for you
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

