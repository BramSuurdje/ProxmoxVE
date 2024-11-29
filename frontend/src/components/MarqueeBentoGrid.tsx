import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type Contributor = {
  login: string;
  avatar_url: string;
  contributions: number;
};

const ContributorCard = ({
  login,
  avatar_url,
  contributions,
}: Contributor) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={avatar_url} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {login}
          </figcaption>
          <p className="text-xs font-medium text-muted-foreground">{contributions} contributions</p>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeBentoGrid({ className }: { className?: string }) {
  const [contributors, setContributors] = useState<Contributor[]>([]);

  useEffect(() => {
    const fetchContributors = async () => {
      const response = await fetch(
        `https://api.github.com/repos/community-scripts/ProxmoxVE/contributors?per_page=100`,
      );
      const data = await response.json();
      const filteredData = data.filter((contributor: Contributor) => 
        !contributor.login.toLowerCase().includes('bot') && contributor.contributions > 3
      );
      setContributors(filteredData);
    };
    fetchContributors();
  }, []);

  const firstRow = contributors.slice(0, Math.floor(contributors.length / 3));
  const secondRow = contributors.slice(Math.floor(contributors.length / 3), Math.floor(2 * contributors.length / 3));
  const thirdRow = contributors.slice(Math.floor(2 * contributors.length / 3));

  return (
    <div className={cn("relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", className)}>
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((contributor) => (
          <ContributorCard key={contributor.login} {...contributor} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((contributor) => (
          <ContributorCard key={contributor.login} {...contributor} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:30s]">
        {thirdRow.map((contributor) => (
          <ContributorCard key={contributor.login} {...contributor} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
