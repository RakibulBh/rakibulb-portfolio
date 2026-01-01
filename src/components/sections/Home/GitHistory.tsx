"use client";
import { ContributionCalendar } from "@/types";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowUpRight } from "lucide-react";

const GitHistory = () => {
  const [contributions, setContributions] =
    useState<ContributionCalendar | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGitHubData = async () => {
    try {
      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query {
              user(login: "RakibulBh") {
                contributionsCollection {
                  contributionCalendar {
                    totalContributions
                    weeks {
                      contributionDays {
                        date
                        contributionCount
                        color
                      }
                    }
                  }
                }
              }
            }
          `,
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch GitHub data");

      const data = await response.json();
      setContributions(
        data.data.user.contributionsCollection.contributionCalendar
      );
    } catch (err) {
      setError("Failed to load contribution data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  if (error) return null; // Fail silently

  return (
    <motion.div
      className="w-full h-full p-4 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm md:text-base font-semibold text-primary/90">
          Development Activity
        </h2>
        <a
          href="https://github.com/RakibulBh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs text-primary/80 hover:text-primary transition-colors"
        >
          View Profile <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="flex-1 relative flex items-center justify-center">
        {loading ? (
          <div className="grid grid-cols-12 gap-1 w-full max-w-[90%]">
            {Array.from({ length: 84 }).map((_, i) => (
              <Skeleton key={i} className="h-2 w-full bg-white/10 rounded-sm" />
            ))}
          </div>
        ) : (
          <div className="w-full max-w-[95%] h-[60%] flex gap-[0.15rem] items-center justify-center">
            {contributions?.weeks.slice(-30).map((week, weekIdx) => (
              <motion.div
                key={weekIdx}
                className="flex flex-col gap-[0.15rem]"
                style={{ height: "100%" }}
              >
                {week.contributionDays.map((day, dayIdx) => (
                  <Tooltip key={`${weekIdx}-${dayIdx}`}>
                    <TooltipTrigger>
                      <motion.div
                        className="w-full h-[0.3rem] rounded-[0.1rem] cursor-pointer"
                        style={{
                          backgroundColor:
                            day.contributionCount > 0
                              ? `rgba(var(--primary), ${Math.min(
                                  day.contributionCount / 5,
                                  0.8
                                )})`
                              : "rgba(255,255,255,0.05)",
                        }}
                        whileHover={{ scaleY: 1.5 }}
                      />
                    </TooltipTrigger>
                    <TooltipContent className="text-xs bg-card border border-white/10">
                      <p className="font-mono">
                        {new Date(day.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                        })}
                        :
                        <span className="text-primary ml-1">
                          {day.contributionCount} contribution
                          {day.contributionCount !== 1 ? "s" : ""}
                        </span>
                      </p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </motion.div>
            ))}
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-card via-card/80 to-transparent" />
      </div>

      {contributions && (
        <div className="flex justify-between items-center mt-3 text-xs text-white/60">
          <span className="font-mono">
            {contributions.totalContributions.toLocaleString()} commits
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-primary/30" />
            Last 30 weeks
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default GitHistory;
