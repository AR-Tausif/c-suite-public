import * as React from "react";
import { ExpertCard } from "./ExpertCard";

// const experts = [
//   {
//     imageSrc:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/11ffe1e7e3e92f9f7ae311fbf7c5d6f22575b9219b119ab81e58bbd7573a4c52?placeholderIfAbsent=true&apiKey=c164382b341b449397a4a0d906ba38f9",
//     title: "Frontend Developer",
//     alt: "Frontend Developer profile picture",
//   },
//   {
//     imageSrc:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/8510cdb83597b43dc45f366005255ca8f89971dec296f4bcfe753ed060951db5?placeholderIfAbsent=true&apiKey=c164382b341b449397a4a0d906ba38f9",
//     title: "Backend Developer",
//     alt: "Backend Developer profile picture",
//   },
//   {
//     imageSrc:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/7b83ba6455ef72649a0e0d9e75e0c48b9d05871854dc8a115ddd512c01284616?placeholderIfAbsent=true&apiKey=c164382b341b449397a4a0d906ba38f9",
//     title: "Fullstack Developer",
//     alt: "Fullstack Developer profile picture",
//   },
//   {
//     imageSrc:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/98e59f508345e7cf82d2d95b0b035f202c91c38317c9947dfb88d99225cb9070?placeholderIfAbsent=true&apiKey=c164382b341b449397a4a0d906ba38f9",
//     title: "UX Designer",
//     alt: "UX Designer profile picture",
//   },
//   {
//     imageSrc:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/a8a6edbff5cebf49ba4fafc05d4aa1e8dc71a336ed1fd4e4933c025952ce2d99?placeholderIfAbsent=true&apiKey=c164382b341b449397a4a0d906ba38f9",
//     title: "UI Designer",
//     alt: "UI Designer profile picture",
//   },
//   {
//     imageSrc:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/321aa3ff9e712d3503b3a5fc5953cc114cfa69ea4222fb6aee514fd72bb226b0?placeholderIfAbsent=true&apiKey=c164382b341b449397a4a0d906ba38f9",
//     title: "Facebook Marketer",
//     alt: "Facebook Marketer profile picture",
//   },
// ];

const marketers = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7263e68bcd8b1bdf19558236a67062ee58b849f6fa6afb8a322a9629ddea7d62?placeholderIfAbsent=true&apiKey=c164382b341b449397a4a0d906ba38f9",
    title: "Instagram Marketer",
    alt: "Instagram Marketer profile picture",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8abf9f2eeda1475a03bb48a32d91038111e7408e4ede28ad97afed7761cdc486?placeholderIfAbsent=true&apiKey=c164382b341b449397a4a0d906ba38f9",
    title: "Senior Digital Marketer",
    alt: "Senior Digital Marketer profile picture",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8abf9f2eeda1475a03bb48a32d91038111e7408e4ede28ad97afed7761cdc486?placeholderIfAbsent=true&apiKey=c164382b341b449397a4a0d906ba38f9",
    title: "Senior Digital Marketer",
    alt: "Senior Digital Marketer profile picture",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8abf9f2eeda1475a03bb48a32d91038111e7408e4ede28ad97afed7761cdc486?placeholderIfAbsent=true&apiKey=c164382b341b449397a4a0d906ba38f9",
    title: "Senior Digital Marketer",
    alt: "Senior Digital Marketer profile picture",
  },
];

export const Experts: React.FC = () => {
  return (
    <section
      className="flex flex-col rounded-none py-12"
      aria-labelledby="experts-title"
    >
      <div className="flex justify-center">
        <ExpertCard marketers={marketers} />
      </div>
    </section>
  );
};
