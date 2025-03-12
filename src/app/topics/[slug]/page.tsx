import { data } from "@/data/topicData";
import { colors } from "@/themes/colors";
import { capitalizeFirstLetter } from "@/utils/textFormatting";
import "./styles.css";

const TopicPage = async ({
  params,
  ...props
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const content = data[slug as keyof typeof data];

  const heading = capitalizeFirstLetter(slug.replace("-", " "));

  return (
    <div className="container">
      <div className="container__header">
        <h1 className="container__header__text">{heading}</h1>
      </div>
      <div className="container__body">
        <div className="container__body__content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default TopicPage;
