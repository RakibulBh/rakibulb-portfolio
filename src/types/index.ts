type ContributionDay = {
  date: string; // Date in YYYY-MM-DD format
  contributionCount: number; // Number of contributions on that day
  color?: string; // Optional: Color for visualization (e.g., from GitHub's theme)
};

type ContributionWeek = {
  contributionDays: ContributionDay[]; // Array of contributions for each day in the week
};

export type ContributionCalendar = {
  totalContributions: number; // Total contributions in the year
  weeks: ContributionWeek[]; // Array of weeks, each containing contribution days
};

type ContributionsCollection = {
  contributionCalendar: ContributionCalendar; // The contribution calendar data
};

type GitHubUserContributions = {
  user: {
    contributionsCollection: ContributionsCollection; // The contributions collection for the user
  };
};
