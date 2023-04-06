import React from "react";
import { LoadingButton } from "@mui/lab";
export function LoadingBtn({ variant = "text", estyles = {} }) {
  return (
    <>
      <LoadingButton sx={{ estyles }} loading color='secondary' variant={variant}>
        cargando..
      </LoadingButton>
    </>
  );
}
