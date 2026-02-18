import React from "react";
import FileUploader from "./FileUploader";
import { Alert, Typography, Box, Chip } from "@mui/material";
import { Help } from "@mui/icons-material";

interface OtrosUploadProps {
  onFileUpload: (file: File) => void;
  progress?: number;
  status?: "pending" | "uploading" | "success" | "error";
  uploadedFile?: File;
}

const OtrosUpload: React.FC<OtrosUploadProps> = (props) => {
  const requirements = [
    "Comprobantes Fiscales Autorizados (CFA) emitidos",
    "Documentos de retención de IVA (si aplica)",
    "Notas de crédito o débito emitidas/recibidas",
    "Comprobantes de exportación (para exportadores)",
    "Declaraciones de renta complementarias",
    "Cualquier otro documento fiscal relevante",
    "Formato: PDF, Excel o imágenes escaneadas",
  ];

  const documentTypes = [
    "CFA - Comprobante Fiscal Autorizado",
    "Retención de IVA",
    "Nota de Crédito",
    "Nota de Débito",
    "Comprobante de Exportación",
    "Declaración Jurada",
    "Otro Documento Fiscal",
  ];

  return (
    <Box>
      <Alert 
        severity="info"
        icon={<Help />}
        sx={{ mb: 3 }}
      >
        <Typography variant="body2">
          Estos documentos son <strong>opcionales</strong> pero recomendados para un registro completo.
          Solo carga los documentos que apliquen a tu situación fiscal específica.
        </Typography>
      </Alert>

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom>
          Tipos de documentos que puedes cargar:
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {documentTypes.map((type) => (
            <Chip
              key={type}
              label={type}
              size="small"
              variant="outlined"
              color="primary"
            />
          ))}
        </Box>
      </Box>

      <FileUploader
        title="Documentos Adicionales (Opcional)"
        description="Otros documentos fiscales relevantes para tu declaración"
        acceptedFiles={{
<<<<<<< Updated upstream
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"], // Excel moderno
          "application/vnd.ms-excel": [".xls"], // Excel antiguo
          "application/vnd.ms-excel.sheet.macroEnabled.12": [".xlsm"], // Excel con macros
          "application/vnd.ms-excel.template.macroEnabled.12": [".xltm"], // Plantillas con macros
          "application/vnd.openxmlformats-officedocument.spreadsheetml.template": [".xltx"], // Plantillas modernas
          "application/vnd.ms-excel.addin.macroEnabled.12": [".xlam"], // Complementos de Excel
          "text/csv": [".csv"] // Archivos CSV
        }}        
=======
            "application/vnd.ms-excel": [".xls"],
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
            "application/vnd.ms-excel.sheet.macroEnabled.12": [".xlsm"],
            "application/vnd.openxmlformats-officedocument.spreadsheetml.template": [".xltx"],
            "application/vnd.ms-excel.template.macroEnabled.12": [".xltm"],
            "application/vnd.ms-excel.addin.macroEnabled.12": [".xlam"],
            "text/csv": [".csv"],
            "application/vnd.oasis.opendocument.spreadsheet": [".ods"]
        }}

>>>>>>> Stashed changes
        requirements={requirements}
        onFileUpload={props.onFileUpload}
        progress={props.progress}
        status={props.status}
        uploadedFile={props.uploadedFile}
        isOptional={true}
      />

      <Box sx={{ mt: 4, p: 2, bgcolor: "grey.50", borderRadius: 1 }}>
        <Typography variant="caption" color="text.secondary">
          <strong>¿Qué documentos son obligatorios?</strong> Solo el RTU es estrictamente obligatorio. 
          Los demás se recomiendan para mayor precisión pero puedes omitirlos si no aplican.
        </Typography>
      </Box>
    </Box>
  );
};

export default OtrosUpload;
