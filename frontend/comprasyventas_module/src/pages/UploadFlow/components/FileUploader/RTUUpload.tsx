import React from "react";
import FileUploader from "./FileUploader";
import { Alert, Typography, Box } from "@mui/material";
import { Warning } from "@mui/icons-material";

interface RTUUploadProps {
  onFileUpload: (file: File) => void;
  progress?: number;
  status?: "pending" | "uploading" | "success" | "error";
  uploadedFile?: File;
}

const RTUUpload: React.FC<RTUUploadProps> = (props) => {
  const requirements = [
    "Debe contener el Número de Identificación Tributaria (NIT)",
    "Debe incluir la razón social completa según registro mercantil",
    "Debe especificar el régimen tributario actual",
    "Debe tener la fecha de emisión del RTU vigente",
    "Debe incluir la dirección fiscal completa",
    "Debe mostrar el estado del contribuyente (activo/suspendido)",
    "Formato preferido: Excel (.xlsx) exportado desde portal SAT",
  ];

  return (
    <Box>
      <Alert 
        severity="warning" 
        icon={<Warning />}
        sx={{ mb: 3 }}
      >
        <Typography variant="subtitle2" fontWeight={600}>
          DOCUMENTO OBLIGATORIO
        </Typography>
        <Typography variant="body2">
          Sin el Registro Tributario Unificado no se puede continuar con el proceso.
          Este documento es requerido por el Artículo 62 del Código Tributario de Guatemala.
        </Typography>
      </Alert>

      <FileUploader
        title="Registro Tributario Unificado (RTU)"
        description="Documento oficial de identificación fiscal emitido por la SAT"
        acceptedFiles={{
<<<<<<< Updated upstream
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
          "application/vnd.ms-excel": [".xls"],
          "text/csv": [".csv"]
=======
            "application/vnd.ms-excel": [".xls"],
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
            "application/vnd.ms-excel.sheet.macroEnabled.12": [".xlsm"],
            "application/vnd.openxmlformats-officedocument.spreadsheetml.template": [".xltx"],
            "application/vnd.ms-excel.template.macroEnabled.12": [".xltm"],
            "application/vnd.ms-excel.addin.macroEnabled.12": [".xlam"],
            "text/csv": [".csv"],
            "application/vnd.oasis.opendocument.spreadsheet": [".ods"]
>>>>>>> Stashed changes
        }}
        requirements={requirements}
        onFileUpload={props.onFileUpload}
        progress={props.progress}
        status={props.status}
        uploadedFile={props.uploadedFile}
      />

      <Box sx={{ mt: 4, p: 2, bgcolor: "grey.50", borderRadius: 1 }}>
        <Typography variant="caption" color="text.secondary">
          <strong>¿Dónde obtener tu RTU?</strong> Puedes descargarlo desde el portal de la SAT: 
          <a 
            href="https://portal.sat.gob.gt/portal/consulta-rtu/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ marginLeft: 4, color: "#1a237e" }}
          >
            portal.sat.gob.gt/consulta-rtu
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default RTUUpload;
