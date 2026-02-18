import React from "react";
import FileUploader from "./FileUploader";
import { Alert, Typography, Box } from "@mui/material";
import { Info } from "@mui/icons-material";

interface VentasUploadProps {
  onFileUpload: (file: File) => void;
  progress?: number;
  status?: "pending" | "uploading" | "success" | "error";
  uploadedFile?: File;
}

const VentasUpload: React.FC<VentasUploadProps> = (props) => {
  const requirements = [
    "Debe incluir fecha de venta (formato dd/mm/aaaa)",
    "Debe contener NIT del cliente (si es contribuyente)",
    "Debe incluir número de documento facturado",
    "Debe especificar base imponible (sin IVA)",
    "Debe mostrar monto de IVA (12% o exento)",
    "Debe indicar tipo de venta (local, exportación, etc.)",
    "Formato: Excel con columnas según formato SAT oficial",
  ];

  return (
    <Box>
      <Alert 
        severity="info"
        icon={<Info />}
        sx={{ mb: 3 }}
      >
        <Typography variant="body2">
          Incluye <strong>todas las ventas</strong> realizadas en el período, incluso las exentas de IVA.
          Las ventas de exportación deben marcarse específicamente.
        </Typography>
      </Alert>

      <FileUploader
        title="Libro de Ventas Mensual"
        description="Registro de todas las ventas realizadas en el período fiscal"
        acceptedFiles={{
<<<<<<< Updated upstream
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"], // Excel moderno
          "application/vnd.ms-excel": [".xls"], // Excel antiguo
          "application/vnd.ms-excel.sheet.macroEnabled.12": [".xlsm"], // Excel con macros
          "application/vnd.ms-excel.template.macroEnabled.12": [".xltm"], // Plantillas con macros
          "application/vnd.openxmlformats-officedocument.spreadsheetml.template": [".xltx"], // Plantillas modernas
          "application/vnd.ms-excel.addin.macroEnabled.12": [".xlam"], // Complementos de Excel
          "text/csv": [".csv"] // Archivos CSV
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
          <strong>Nota:</strong> Las ventas a consumidor final (sin NIT) deben registrarse como "CF" 
          (Consumidor Final). Las ventas exentas deben indicar "EXENTO" en la columna de IVA.
        </Typography>
      </Box>
    </Box>
  );
};

export default VentasUpload;
