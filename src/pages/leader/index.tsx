import * as React from "react";
import { LeaderCardProps } from "./types";
import { LeaderCard } from "./LeaderCard";
import Container from "@/components/Container";

export const Leader: React.FC<LeaderCardProps> = () => {
  const leaderData = [
    {
      name: "Foyzan Ahmed",
      position: "Vice Chairman",
      description:
        "As there are not only positive changes and recovery but also widespread uncertainties, fears, and lack of confidence, we must be reviving the daily employment dynamism along with recovering our national economy and it needs to incentivize the private sector to recover and sustain...",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/c164382b341b449397a4a0d906ba38f9/496eeef7a8c564a96bd073f8aab646636108d6dd0918e16e70e24ee91bcbc3f7?apiKey=c164382b341b449397a4a0d906ba38f9&",
    },
  ];
  return (
      <Container>
        <section className="py-24 w-full bg-white max-md:px-5 max-md:max-w-full">
        {leaderData.map((leader) => (
          <LeaderCard
            key={leader.name}
            name={leader.name}
            position={leader.position}
            description={leader.description}
            imageUrl={leader.imageUrl}
          />
        ))}
      </section>
    
      </Container>
  );
};
