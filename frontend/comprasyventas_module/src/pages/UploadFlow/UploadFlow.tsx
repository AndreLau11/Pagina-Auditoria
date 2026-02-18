import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Container,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Alert,
  CircularProgress,
} from "@mui/material";
import { ArrowBack, Check, CloudUpload } from "@mui/icons-material";
import RTUUpload from "./components/FileUploader/RTUUpload";
import ComprasUpload from "./components/FileUploader/ComprasUpload";
import VentasUpload from "./components/FileUploader/VentasUpload";
import OtrosUpload from "./components/FileUploader/OtrosUpload";
import UploadSummary from "./components/Summary/UploadSummary";

// Pasos según requerimientos SAT Guatemala
const steps = [
  {
    label: "RTU - Registro Tributario",
    description: "Documento obligatorio para identificación fiscal",
    component: RTUUpload,
    key: "rtu",
  },
  {
    label: "Libro de Compras",
    description: "Registro mensual de todas las compras",
    component: ComprasUpload,
    key: "compras",
  },
  {
    label: "Libro de Ventas",
    description: "Registro mensual de todas las ventas",
    component: VentasUpload,
    key: "ventas",
  },
  {
    label: "Documentos Adicionales",
    description: "CFA, retenciones y otros documentos",
    component: OtrosUpload,
    key: "otros",
  },
  {
    label: "Revisión y Confirmación",
    description: "Verifica la información antes de generar",
    component: UploadSummary,
    key: "resumen",
  },
];

const UploadFlow: React.FC = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File>>({});
  const [uploadStatus, setUploadStatus] = useState<Record<string, "pending" | "uploading" | "success" | "error">>({});
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});

  const handleFileUpload = (stepKey: string, file: File) => {
    setUploadedFiles(prev => ({ ...prev, [stepKey]: file }));
    setUploadStatus(prev => ({ ...prev, [stepKey]: "uploading" }));
    
    // Simulación de progreso de carga
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(prev => ({ ...prev, [stepKey]: progress }));
      
      if (progress >= 100) {
        clearInterval(interval);
        setUploadStatus(prev => ({ 
          ...prev, 
          [stepKey]: "success" 
        }));
      }
    }, 100);
  };

  const handleNext = () => {
    // Validar que el paso actual tenga archivo antes de continuar
    const currentStepKey = steps[activeStep].key;
    
    if (activeStep < 4 && !uploadedFiles[currentStepKey]) {
      alert(`Debes cargar el archivo de ${steps[activeStep].label} antes de continuar`);
      return;
    }
    
    setActiveStep(prev => prev + 1);
  };

  const handleBack = () => {
    setActiveStep(prev => prev - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setUploadedFiles({});
    setUploadStatus({});
    setUploadProgress({});
  };

  const CurrentStepComponent = steps[activeStep].component;

  return (
    <Container maxWidth="lg">
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate("/")}
          sx={{ mb: 2 }}
        >
          Volver al Inicio
        </Button>
        
        <Typography variant="h4" component="h1" gutterBottom>
          Carga de Documentos SAT Guatemala
        </Typography>
        
        <Typography variant="body1" color="text.secondary" paragraph>
          Sigue los pasos para cargar los documentos requeridos por la Superintendencia 
          de Administración Tributaria. Los archivos se validarán automáticamente.
        </Typography>
      </Box>

      {/* Alertas informativas */}
      <Alert severity="info" sx={{ mb: 3 }}>
        <strong>Importante:</strong> Este proceso sigue las fases legales de la SAT Guatemala. 
        Todos los documentos son obligatorios excepto los marcados como opcionales.
      </Alert>

      {/* Stepper */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel 
                optional={
                  <Typography variant="caption" color="text.secondary">
                    {step.description}
                  </Typography>
                }
                StepIconProps={{
                  style: {
                    color: uploadStatus[step.key] === "success" 
                      ? "#2e7d32" 
                      : undefined
                  }
                }}
              >
                {step.label}
                {uploadStatus[step.key] === "success" && (
                  <Check sx={{ fontSize: 16, ml: 1, color: "#2e7d32" }} />
                )}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Paper>

      {/* Contenido del paso actual */}
      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Paso {activeStep + 1}: {steps[activeStep].label}
        </Typography>
        
        <CurrentStepComponent
          onFileUpload={(file: File) => handleFileUpload(steps[activeStep].key, file)}
          progress={uploadProgress[steps[activeStep].key]}
          status={uploadStatus[steps[activeStep].key]}
          uploadedFile={uploadedFiles[steps[activeStep].key]}
        />
      </Paper>

      {/* Barra de progreso si está cargando */}
      {uploadStatus[steps[activeStep].key] === "uploading" && (
        <Alert severity="info" icon={<CloudUpload />} sx={{ mb: 3 }}>
          <Box sx={{ width: "100%" }}>
            <Typography variant="body2" gutterBottom>
              Subiendo archivo... {uploadProgress[steps[activeStep].key]}%
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ flexGrow: 1, mr: 1 }}>
                <Box
                  sx={{
                    height: 4,
                    backgroundColor: "primary.light",
                    borderRadius: 2,
                    width: `${uploadProgress[steps[activeStep].key]}%`
                  }}
                />
              </Box>
              <CircularProgress size={16} />
            </Box>
          </Box>
        </Alert>
      )}

      {/* Botones de navegación */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          variant="outlined"
          sx={{ minWidth: 120 }}
        >
          Anterior
        </Button>
        
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            onClick={handleReset}
            variant="outlined"
            color="error"
          >
            Reiniciar Todo
          </Button>
          
          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={() => navigate("/resumen")}
              disabled={Object.keys(uploadedFiles).length === 0}
              sx={{ minWidth: 180 }}
            >
              Generar Reporte SAT
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={uploadStatus[steps[activeStep].key] === "uploading"}
              sx={{ minWidth: 120 }}
            >
              {activeStep === steps.length - 2 ? "Revisar" : "Siguiente"}
            </Button>
          )}
        </Box>
      </Box>

      {/* Indicador de progreso general */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="caption" color="text.secondary">
          Progreso general: {Math.round((activeStep + 1) / steps.length * 100)}% • 
          Archivos cargados: {Object.keys(uploadedFiles).length} de 4
        </Typography>
      </Box>
    </Container>
  );
};

export default UploadFlow;