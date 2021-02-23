import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid item xs={12} sm={12} md={6} lg ={4} justify="center" style={{ paddingBottom: 30}}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
        <Grid
          container
          justify="center"
          spacing={3}
        >
          <Grid item xs={12} sm={7} lg= {11}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
