import React from "react";
import FileUploader from "./FileUploader";
import { Alert, Typography, Box } from "@mui/material";
import { Info } from "@mui/icons-material";

interface ComprasUploadProps {
  onFileUpload: (file: File) => void;
  progress?: number;
  status?: "pending" | "uploading" | "success" | "error";
  uploadedFile?: File;
}

const ComprasUpload: React.FC<ComprasUploadProps> = (props) => {
  const requirements = [
    "Debe incluir fecha de compra (formato dd/mm/aaaa)",
    "Debe contener NIT del proveedor (13 dígitos)",
    "Debe incluir número de documento (factura, recibo, etc.)",
    "Debe especificar base imponible (sin IVA)",
    "Debe mostrar monto de IVA (12% o tasa correspondiente)",
    "Debe incluir total de la compra",
    "Formato: Excel con columnas específicas según SAT",
  ];

  return (
    <Box>
      <Alert 
        severity="info"
        icon={<Info />}
        sx={{ mb: 3 }}
      >
        <Typography variant="body2">
          El Libro de Compras debe corresponder al período fiscal que estás declarando.
          Asegúrate de incluir <strong>todas las compras del mes</strong>, incluso las de pequeño monto.
        </Typography>
      </Alert>

      <FileUploader
        title="Libro de Compras Mensual"
        description="Registro de todas las compras realizadas en el período fiscal"
        acceptedFiles={{
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
          "application/vnd.ms-excel": [".xls"],
          "text/csv": [".csv"]
        }}
        requirements={requirements}
        onFileUpload={props.onFileUpload}
        progress={props.progress}
        status={props.status}
        uploadedFile={props.uploadedFile}
      />

      <Box sx={{ mt: 4, p: 2, bgcolor: "grey.50", borderRadius: 1 }}>
        <Typography variant="caption" color="text.secondary">
          <strong>Recomendación:</strong> Usa el formato estándar de tu software contable.
          Si usas Excel manual, asegúrate de mantener las columnas: Fecha, Proveedor, NIT, No. Doc, Base, IVA, Total.
        </Typography>
      </Box>
    </Box>
  );
};

export default ComprasUpload;
