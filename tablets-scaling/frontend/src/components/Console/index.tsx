import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { useSocketStore } from "../../stores/useSocketStore";

function Console() {
  const { output, connect } = useSocketStore();
  const consoleRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    connect();
    
    return () => {
      useSocketStore.getState().disconnect();
    };
  }, [connect]);

  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <Box
      component="pre"
      ref={consoleRef}
      sx={{
        backgroundColor: "#383d57",
        height: "100%",
        maxHeight: "100vh",
        padding: 2,
        marginTop: 0,
        color: "white",
        fontFamily: "Roboto Mono",
        fontWeight: "300",
        fontSize: "14px",
        overflowY: "auto",
        whiteSpace: "pre-wrap",
      }}
    >
      {output.join("")}
    </Box>
  );
}

export default Console;