import React, { useState } from "react";
import { ReactComponent as ArrowLeftIcon } from "../../assets/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/arrow-right.svg";
import { ReactComponent as StarIcon } from "../../assets/star.svg";
import { ReactComponent as TriangleIcon } from "../../assets/trianlge.svg";
import { ReactComponent as StarBlackIcon } from "../../assets/starblack.svg";
import {
  ArrowButton,
  Author,
  Card,
  CardWrapper,
  Carousel,
  Divider,
  Quote,
  Section,
  Stars,
  Title,
} from "./Testimonials.style";
import { testimonials } from "./constants";

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <Section>
      <div className="title">
        <Title>What people are saying about LeadCRM</Title>
        <div className="inner">
          <ArrowButton className="prev-btn" onClick={prev}>
            <ArrowLeftIcon />
          </ArrowButton>

          <ArrowButton className="next-btn" onClick={next}>
            <ArrowRightIcon />
          </ArrowButton>
        </div>
      </div>

      <Carousel>
        <CardWrapper>
          {testimonials.slice(index, index + 3).map((t) => (
            <Card key={t.id}>
              <Quote>{t.text}</Quote>
              <div className="triangle-star-wrapper">
                <div className="triangle-icon">
                  <TriangleIcon />
                </div>
                <Stars>
                  <StarBlackIcon />
                  <StarBlackIcon />
                  <StarBlackIcon />
                  <StarBlackIcon />
                  <StarBlackIcon />
                </Stars>
              </div>
              <Divider />
              <Author>
                <img src={t.avatar} alt={t.name} />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </Author>
            </Card>
          ))}
        </CardWrapper>
      </Carousel>
    </Section>
  );
};

export default Testimonials;
