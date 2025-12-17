// src/components/Team.tsx
import React from "react";

// Use your own image files here (webp/jpg/png etc.)
import Manjunath  from "../../assets/team/5.jpg";
import Harshitha from "../../assets/team/4.jpeg";
import KristianPhoto from "../../assets/team/3.jpeg";
import Khurshid from "../../assets/team/1.jpeg";
import Harish from "../../assets/team/2.jpeg";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Manjunath R A",
    role: "CFO",
    image: Manjunath,
  },
  {
    name: "Harshitha K",
    role: "UI/UX Designer",
    image: Harshitha,
  },
  {
    name: "Yashas Pawar",
    role: "Full Stack Developer",
    image: KristianPhoto,
  },
  {
    name: "Khurshid Alom",
    role: "Full Stack Developer",
    image: Khurshid,
  },
  {
    name: "Harish M",
    role: "Full Stack Developer",
    image: Harish,
  },
];

// First 5 SVG mask shapes (paths) copied from your HTML
const maskPaths: string[] = [
  // 1) mask0_15_81
  "M180 16C180 7.16344 172.837 0 164 0H44C35.1634 0 28 7.16344 28 16V37.5779C28 40.436 26.4752 43.077 24 44.5061L5.82447 54.9997C1.99801 57.2089 0.0848449 60.1045 0.0849609 63V153.569C0.123691 156.434 2.03726 159.293 5.82448 161.48L24 171.973C26.4752 173.402 28 176.043 28 178.902V224C28 232.837 35.1634 240 44 240H115.582C118.39 240 121.149 239.261 123.582 237.856L166.144 213.283C173.789 208.869 179.989 198.139 180 189.307L180 189.283L180 16Z",

  // 2) mask0_15_1050
  "M172 129.568C176.95 126.71 180 121.428 180 115.712V58.2886C180 52.5724 176.95 47.2903 172 44.4322L100.61 3.21539C96.9619 1.10895 92.8233 0 88.6104 0H16C7.16344 0 0 7.16344 0 16V224C0 232.837 7.16344 240 16 240H164C172.837 240 180 232.837 180 224V183.289C180 177.572 176.95 172.29 172 169.432L143.477 152.964C140.81 151.425 140.81 147.576 143.477 146.036L172 129.568Z",

  // 3) mask0_23275_8157
  "M84.7245 3.32039C88.5585 1.10679 93.5861 0.00222801 98.6113 0.00669832C98.7268 0.00223834 98.8426 0 98.9585 0H164.018C172.854 0 180.018 7.16344 180.018 16L180.018 224C180.018 232.837 172.854 240 164.018 240H66.0176C59.3902 240 54.0176 234.627 54.0176 228V218.454C54.0176 216.915 52.3509 215.953 51.0176 216.722L13.8739 238.167C6.22126 242.586 0.0175409 239.004 0.0175409 230.167V57.4025C-0.205683 54.3492 1.70164 51.2537 5.73951 48.9224L84.7245 3.32039Z",

  // 4) mask0_15_89
  "M74.9176 237.86C77.3485 239.262 80.1053 240 82.9116 240H164C172.837 240 180 232.837 180 224V16C180 7.16344 172.837 0 164 0H121.897C117.684 0 113.545 1.10895 109.897 3.21539L64 29.7139C61.3333 31.2535 58 29.329 58 26.2498V4.21788C58 1.14578 54.6805 -0.779585 52.0139 0.745821L6.04157 27.0435C2.30535 29.1808 0 33.1554 0 37.4597V187.718C0 192.007 2.28917 195.97 6.00454 198.113L74.9176 237.86Z",

  // 5) mask0_15_79
  "M0 84V224C0 232.837 7.16344 240 16 240H109.722C112.525 240 115.278 239.264 117.707 237.865L173.989 205.447C177.708 203.305 180 199.34 180 195.048V16C180 7.16344 172.837 0 164 0H46C41.2646 0.114962 36.5876 1.25736 32.972 3.34483L5.85641 19C-1.79627 23.4183 -1.79628 30.5817 5.85641 35L35.3633 52.0358C38.0299 53.5754 38.0299 57.4244 35.3633 58.964L5.85578 76.0001C2.0295 78.2092 0.116328 81.1046 0.116267 84H0Z",
];

const Team: React.FC = () => {
  return (
    <section className="mt-20 md:mt-40 pb-12 mb-12 md:pb-20 md:mb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-10">
        <h2 className="mb-8 md:mb-12 text-3xl md:text-4xl font-light">
          Meet our team
        </h2>

        <ul className="flex -mx-8 md:mx-0 px-8 md:px-0 overflow-x-scroll md:overflow-x-visible snap-x snap-mandatory md:grid md:grid-cols-5 md:gap-x-3 lg:gap-x-6 md:gap-y-6 lg:gap-y-8 scrollbar-none">
          {teamMembers.map((member, index) => {
            const maskPath = maskPaths[index % maskPaths.length];
            const maskId = `team-mask-${index}`;

            return (
              <li
                key={member.name}
                className="snap-start w-3/5 md:w-auto pl-8 md:pl-0 -mr-4 md:mr-0 flex-shrink-0 col-span-1"
              >
                <figure>
                  <svg
                    viewBox="0 0 180 240"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[180px] md:w-[200px] lg:w-[220px] h-auto"
                  >
                    <defs>
                      <mask
                        id={maskId}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={180}
                        height={240}
                        style={{ maskType: "alpha" as any }}
                      >
                        <path d={maskPath} fill="black" />
                      </mask>
                    </defs>

                    {/* Full-rect image with mask = same shapes as your HTML */}
                    <image className="grayscale-[50]"
                      href={member.image}
                      x={0}
                      y={0}
                      width={180}
                      height={240}
                      preserveAspectRatio="xMidYMid slice"
                      mask={`url(#${maskId})`}
                    />
                  </svg>

                  <figcaption className="mt-3 lg:mt-5">
                    <p className="text-sm lg:text-base text-[#111827]">
                      {member.name}
                    </p>
                    <p className="text-xs lg:text-sm text-gray-500">
                      {member.role}
                    </p>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Team;
