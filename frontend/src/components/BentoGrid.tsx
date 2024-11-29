import { AnimatedList } from "@/components/ui/animated-list";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { fetchCategories } from "@/lib/data";
import { Category, Script } from "@/lib/types";
import { cn } from "@/lib/utils";
import { BookOpenText, Database, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { AiFillGithub, AiOutlineDiscord } from "react-icons/ai";
import { MarqueeBentoGrid } from "./MarqueeBentoGrid";
import NumberTicker from "./ui/number-ticker";

const features = [
  {
    Icon: Database,
    name: "200+ Scripts",
    description:
      "We offer one of the largest collections of scripts for Proxmox VE.",
    href: "/scripts",
    cta: "View Scripts",
    background: (
      <AnimatedListBentoGridItem className="absolute right-0 top-0 h-[500px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Users,
    name: "Community Driven",
    description:
      "All the scripts are build and maintained by the the incredible community.",
    href: "https://github.com/community-scripts/ProxmoxVE",
    cta: "Join Community",
    background: (
      <MarqueeBentoGrid className="h-[280px] absolute top-0 transition-all border-none duration-300 ease-in-out group-hover:scale-105 [mask-image:linear-gradient(to_top,transparent_0%,#000_20%)]" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: AiOutlineDiscord,
    name: "Discord Community",
    description:
      "If you need help, we have a community of amazing people ready to help you.",
    href: "https://discord.gg/2wvnMDgdnU",
    cta: "Join Discord",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: BookOpenText,
    name: "No More Documentation",
    description:
      "All of our scripts are one click installs, so no more reading documentation and debugging for hours.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: AiFillGithub,
    name: "Open Source",
    description:
      "We know how important security is, that's why all the scripts are open source.",
    href: "https://github.com/community-scripts/ProxmoxVE",
    cta: "View on Github",
    background: <GithubStats />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function BentoGridLandingPage() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}

const ScriptCard = ({ name, logo }: Script) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3 w-max">
        <div className="flex size-10 items-center bg-secondary justify-center rounded-2xl">
          <img className="size-6 rounded-md" src={logo ?? ""} />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListBentoGridItem({
  className,
}: {
  className?: string;
}) {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    fetchCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  if (categories.length === 0) {
    return null;
  }

  const scripts = categories
    .flatMap((category) => category.scripts)
    .sort(() => Math.random() - 0.5);

  return (
    <div
      className={cn(
        "relative flex sm:h-[500px] h-[200px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className,
      )}
    >
      <AnimatedList delay={2000}>
        {scripts.map((item, idx) => (
          <ScriptCard {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}

type GithubData = {
  stargazers_count: number;
  contributors: number;
};

export function GithubStats() {
  const [stars, setStars] = useState(300);

  useEffect(() => {
    const fetchGithubStars = async () => {
      const response = await fetch(
        "https://api.github.com/repos/community-scripts/ProxmoxVE",
      );
      const data = await response.json();
      return data.stargazers_count;
    };

    fetchGithubStars().then((stars) => {
      setStars(stars);
    });
  }, []);

  return (
    <div className="flex flex-row h-[250px] items-center justify-center gap-3 text-5xl group:hover:scale-105 duration-300 ease-in-out text-muted-foreground">
      ⭐
      <NumberTicker className="text-primary" value={stars} />
    </div>
  );
}
