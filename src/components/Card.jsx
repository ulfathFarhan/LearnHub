import React from "react";
import { Grid, Image } from "semantic-ui-react";
import Rating from "@material-ui/lab/Rating";
import LinkIcon from "@material-ui/icons/Link";
import "./Card.css";

const GridExampleColumnWidth = (props) => {
  return (
    <Grid id="Row">
      <Grid.Column width={4}>
        <Image src={props.img} />
        <div className="rating">
          <span className="rate">
            {/* <Rating
              id="rate"
              name="half-rating-read"
              defaultValue={props.rating}
              precision={0.5}
              readOnly
            /> */}
            <Rating
              id="rate"
              name="half-rating-read"
              value={props.rating}
              precision={0.5}
              readOnly
            />
          </span>
          <span className="link">
            <a href={props.url}>
              <LinkIcon />
              Link
            </a>
          </span>
        </div>
      </Grid.Column>
      <Grid.Column width={9}>
        <h5 className="title">{props.title}</h5>
        <p className="description">{props.desc}</p>
      </Grid.Column>
      <Grid.Column width={3}>
        <div id="label">{props.level}</div>
        <div id="Price">${props.price}</div>
        <div id="disPrice">Offer: ${props.disPrice}</div>
      </Grid.Column>
    </Grid>
  );
};

export default GridExampleColumnWidth;
