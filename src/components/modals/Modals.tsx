/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@mui/material";
import { useModal } from "../../hooks/modal/useModal";
import { Modal } from "./Modal";
import "./Modals.css";

import Grid from "@mui/material/Grid";
import { ModalPortal } from "./ModalPortal";

export const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModalPortal, openModalPortal, closeModalPortal] =
    useModal(false);

  return (
    <>
      <h2>Modales</h2>

      {/* <Grid container spacing={3}>
        <Grid xs={12} sm={4} md={3} lg={3}>
          <Paper elevation={3} sx={{ p: 2, m: 3 }}>
            <h3>Prueba</h3>
          </Paper>
        </Grid>
        <Grid xs={12} sm={4} md={3} lg={3}>
          <Paper elevation={3} sx={{ p: 2, m: 3 }}>
            <h3>Prueba</h3>
          </Paper>
        </Grid>
        <Grid xs={12} sm={4} md={3} lg={3}>
          <Paper elevation={3} sx={{ p: 2, m: 3 }}>
            <h3>Prueba</h3>
          </Paper>
        </Grid>
        <Grid xs={12} sm={4} md={3} lg={3}>
          <Paper elevation={3} sx={{ p: 2, m: 3 }}>
            <h3>Prueba</h3>
          </Paper>
        </Grid>
      </Grid> */}

      <Grid container spacing={3} columnSpacing={3}>
        <Button
          variant="contained"
          onClick={openModal1 as any}
          className="buttonModal"
          sx={{ m: 2 }}
        >
          Modal 1
        </Button>
        {/* <button onClick={openModal1 as any}>Modal 1</button> */}
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
          <h3>Modal 1</h3>
          <p>Hola este es el contenido de mi Modal 1.</p>
        </Modal>

        <Button variant="contained" onClick={openModal2 as any} sx={{ m: 2 }}>
          Modal 2
        </Button>
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
          <h3>Modal 2</h3>
          <p>Hola este es el contenido de mi Modal 2.</p>
        </Modal>

        <Button
          variant="contained"
          onClick={openModalPortal as any}
          sx={{ m: 2 }}
        >
          Modal Portal
        </Button>
        <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
          <h3>Modal en Portal</h3>
          <p>Hola este es el contenido de mi Modal Portal.</p>
        </ModalPortal>
      </Grid>
    </>
  );
};
