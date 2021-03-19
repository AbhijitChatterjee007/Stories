import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Button,
  Typography,
  Paper,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";
import { Modal } from "../Form/Modal";
import useStyles from "./styles";

const Home = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem("profile"));

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        {user?.result ? (
          <Grid item xs={12} sm={12} lg={12}>
            <Button
              className={classes.paper}
              onClick={openModal}
              variant="contained"
              color="secondary"
            >
              Start Posting!
            </Button>
            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          </Grid>
        ) : (
          <Paper className={classes.paper}>
            <Typography variant="h6" align="center">
              Please Sign In to start posting or view other's posts.
            </Typography>
          </Paper>
        )}
        <Grid
          container
          justify="center"
          spacing={3}
          style={showModal ? { "-webkit-filter": "blur(8px)" } : classes.grid}
        >
          <Grid item xs={12} sm={7} lg={11}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
