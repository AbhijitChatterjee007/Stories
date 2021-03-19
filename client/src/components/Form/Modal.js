import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import { Container } from "@material-ui/core";
import useStyles from "./styles";

import Form from "../Form/Form";
import {
  Background,
  CloseModalButton,
  ModalContent,
  ModalWrapper,
} from "./styles";
import { Grid, Paper } from "@material-ui/core";

export const Modal = ({ showModal, setShowModal, currentId, setCurrentId }) => {
  const classes = useStyles();
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Container component="main">
          <Grid
            item
            xs={10}
            sm={10}
            md={10}
            lg={9}
            justify="center"
            style={{ paddingBottom: 30 }}
          >
            <Background onClick={closeModal} ref={modalRef}>
              <animated.div style={animation}>
                <ModalWrapper showModal={showModal}>
                  <Paper className={classes.paper} elevation={0}>
                    <ModalContent>
                      <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </ModalContent>
                  </Paper>

                  <CloseModalButton
                    aria-label="Close modal"
                    onClick={() => setShowModal((prev) => !prev)}
                  />
                </ModalWrapper>
              </animated.div>
            </Background>
          </Grid>
        </Container>
      ) : null}
    </>
  );
};
