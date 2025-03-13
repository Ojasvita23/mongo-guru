import { data } from "@/constants/topicData";
import { capitalizeFirstLetter } from "@/utils/textFormatting";
import "./styles.css";
import { text } from "@/constants/text";

const TopicPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
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
        <div className="container__body__footer">
          <button className="container__body__footer__button">
            <span>{text.practice}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopicPage;
