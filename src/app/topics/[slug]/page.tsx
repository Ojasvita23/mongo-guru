"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { ContentView } from "@/components/contentView";
import { text } from "@/constants/text";
import { data } from "@/constants/topicData";
import { capitalizeFirstLetter } from "@/utils/textFormatting";
import "./styles.css";

const TopicPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [content, setContent] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const resolvedParams = await params;
      const slugValue = resolvedParams.slug;
      setSlug(slugValue);
      setContent(data[slugValue as keyof typeof data]);
    };

    fetchData();
  }, [params]);

  const heading = capitalizeFirstLetter(slug.replace("-", " "));

  return (
    <ContentView
      heading={heading}
      content={content}
      buttonText={text.practice}
      buttonOnClick={() => router.push(`${pathname}/practice`)}
    />
  );
};

export default TopicPage;
