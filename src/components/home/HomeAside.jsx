import { Col, Button, Card } from "react-bootstrap";
import { useState } from "react";
import { TbInfoSquareFilled } from "react-icons/tb";
import MiniFooter from "./MiniFooter";
import BannerCard from "./BannerCard";

const HomeAside = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const allNews = [
    { title: "Placeholder Notizia 1 con titolo lungo", postedWhen: "1 giorno fa" },
    { title: "Placeholder Notizia 2", postedWhen: "2 giorni fa" },
    { title: "Placeholder Notizia 3", postedWhen: "3 giorni fa" },
    { title: "Placeholder Notizia 4", postedWhen: "4 giorni fa" },
    { title: "Placeholder Notizia 5", postedWhen: "5 giorni fa" },
    { title: "Placeholder Notizia 6", postedWhen: "6 giorni fa" },
    { title: "Placeholder Notizia 7", postedWhen: "7 giorni fa" },
    { title: "Placeholder Notizia 8", postedWhen: "8 giorni fa" },
    { title: "Placeholder Notizia 9", postedWhen: "9 giorni fa" },
    { title: "Placeholder Notizia 10", postedWhen: "10 giorni fa" },
  ];

  const visibleNews = showMore ? allNews : allNews.slice(0, 5);

  return (
    <>
      <Card className="d-flex flex-column align-items-start mb-2 pt-2 pb-3 bg-white rounded px-2">
        <div className="d-flex justify-content-between align-items-baseline w-100">
          <h5 className="mb-0">LinkedIn Notizie</h5>

          <TbInfoSquareFilled className="ms-1" />
        </div>
        <div className="px-2 py-1 text-start">
          <ul className="px-3 py-0 list-unstiled">
            {visibleNews.map((item, index) => (
              <li key={index}>
                <div className="mb-0">
                  {item.title.length > 30 ? (
                    <p className="fw-bold my-0 d-block">{item.title.slice(0, 30) + "..."}</p>
                  ) : (
                    <strong>{item.title}</strong>
                  )}
                </div>
                <p className="mt-0 mb-2">{item.postedWhen}</p>
              </li>
            ))}
          </ul>
          {!showMore && (
            <Button
              variant="light"
              className="bg-white fw-bold"
              style={{ border: "none", color: "gray" }}
              size="sm"
              onClick={handleShowMore}
            >
              {showMore ? "Mostra Meno" : "Mostra Altri"}
            </Button>
          )}
        </div>
      </Card>
      <div className="position-sticky bannerTop">
        <BannerCard />
        <MiniFooter />
      </div>
    </>
  );
};

export default HomeAside;
