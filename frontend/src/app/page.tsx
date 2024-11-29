"use client";
import AboutUs from "@/components/AboutUs";
import { BentoGridLandingPage } from "@/components/BentoGrid";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  ArrowRightIcon,
  Github,
  Server,
  Home,
  Users,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { AiOutlineDiscord, AiOutlineGithub } from "react-icons/ai";

function CustomArrowRightIcon() {
  return <ArrowRightIcon className="h-4 w-4" width={1} />;
}

export default function Page() {
  return (
    <>
      <section className="py-20">
        <div className="w-full">
          <div className="container mx-auto">
            <div className="flex h-[80vh] flex-col items-center justify-center gap-4 lg:py-40">
              <AnimatedGradientText>
                <div
                  className={cn(
                    `absolute inset-0 block size-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`,
                    `p-px ![mask-composite:subtract]`,
                  )}
                />
                🚀 <Separator className="mx-2 h-4" orientation="vertical" />
                <span
                  className={cn(
                    `animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                    `inline`,
                  )}
                >
                  Community Edition
                </span>
              </AnimatedGradientText>
              <div className="flex flex-col gap-4">
                <h1 className="max-w-2xl text-center text-5xl font-semibold tracking-tighter md:text-7xl">
                  Make managing your Homelab a breeze
                </h1>
                <p className="max-w-2xl text-center text-lg leading-relaxed tracking-tight text-muted-foreground md:text-xl">
                  With 200+ scripts to help you manage your{" "}
                  <b>Proxmox VE environment</b>.<br />
                  Whether you&#39;re a seasoned user or a newcomer, we&#39;ve
                  got you covered.
                </p>
              </div>
              <div className="flex flex-row gap-3">
                <Link href="/scripts">
                  <Button
                    size="lg"
                    variant="expandIcon"
                    Icon={CustomArrowRightIcon}
                    iconPlacement="right"
                    className="hover:"
                  >
                    View Scripts
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <MaxWidthWrapper>
          <Card className="w-full max-w-3xl mx-auto shadow-md">
            <CardHeader>
              <CardTitle className="text-4xl font-bold">About Us</CardTitle>
            </CardHeader>
            <CardContent className="">
              <div className="flex flex-col gap-4">
                <div className="text-md leading-relaxed tracking-tight items-center text-muted-foreground">
                  We are the community edition of{" "}
                  <span className="font-semibold text-primary">
                    Proxmox VE Helper Scripts
                  </span>
                  , carrying forward the vision of{" "}
                  <Badge className="h-6 bg-background border-foreground text-foreground inline-flex items-center gap-1">
                    <img
                      src="https://avatars.githubusercontent.com/u/21342670?v=4"
                      className="w-4 h-4 inline"
                    />
                    tteck
                  </Badge>
                  , our project's brilliant creator. who unfortunately has
                  passed away.
                </div>

                <div className="flex flex-col items-center gap-2">
                  <p className="font-medium text-2xl">
                    Join our community today!
                  </p>
                  <div className="flex gap-4">
                    <Link
                      href="https://github.com/community-scripts/ProxmoxVE"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <AiOutlineGithub className="w-5 h-5" />
                      GitHub
                    </Link>
                    <Link
                      href="https://discord.gg/2wvnMDgdnU"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <AiOutlineDiscord className="w-5 h-5" />
                      Discord
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </MaxWidthWrapper>
      </section>
      <section className="py-20">
        <BentoGridLandingPage />
      </section>
    </>
  );
}
