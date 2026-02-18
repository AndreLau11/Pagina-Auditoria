import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  Box,
  Typography,
  Paper,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  LinearProgress,
} from "@mui/material";
import {
  CloudUpload,
  InsertDriveFile,
  CheckCircle,
  Error,
  Description,
  Upload,
} from "@mui/icons-material";

interface FileUploaderProps {
  title: string;
  description: string;
  acceptedFiles: {
    [key: string]: string[];
  };
  requirements: string[];
  onFileUpload: (file: File) => void;
  progress?: number;
  status?: "pending" | "uploading" | "success" | "error";
  uploadedFile?: File;
  isOptional?: boolean;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  title,
  description,
  acceptedFiles,
  requirements,
  onFileUpload,
  progress = 0,
  status = "pending",
  uploadedFile,
  isOptional = false,
}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      
      // Validar tamaño máximo (10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert("El archivo es demasiado grande. Tamaño máximo: 10MB");
        return;
      }
      
      onFileUpload(file);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFiles,
    maxFiles: 1,
    disabled: status === "uploading" || status === "success",
  });

  const getStatusColor = () => {
    switch (status) {
      case "success": return "success.main";
      case "error": return "error.main";
      case "uploading": return "info.main";
      default: return "primary.main";
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case "success": return <CheckCircle color="success" fontSize="large" />;
      case "error": return <Error color="error" fontSize="large" />;
      case "uploading": return <CloudUpload color="info" fontSize="large" />;
      default: return <Upload color="primary" fontSize="large" />;
    }
  };

  return (
    <Box>
      {isOptional && (
        <Alert severity="info" sx={{ mb: 2 }}>
          Este documento es opcional. Puedes omitirlo si no aplica a tu situación.
        </Alert>
      )}

      <Paper
        {...getRootProps()}
        sx={{
          p: 4,
          textAlign: "center",
          cursor: status === "uploading" || status === "success" ? "default" : "pointer",
          border: "2px dashed",
          borderColor: getStatusColor(),
          backgroundColor: isDragActive ? "action.hover" : "background.paper",
          transition: "all 0.2s",
          "&:hover": {
            borderColor: status === "pending" ? "primary.dark" : getStatusColor(),
            backgroundColor: status === "pending" ? "action.hover" : "background.paper",
          },
          mb: 3,
          opacity: status === "uploading" ? 0.7 : 1,
        }}
      >
        <input {...getInputProps()} />
        <Box sx={{ mb: 2, color: getStatusColor() }}>
          {getStatusIcon()}
        </Box>
        
        <Typography variant="h6" gutterBottom>
          {uploadedFile ? uploadedFile.name : title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" paragraph>
          {uploadedFile 
            ? `Archivo cargado: ${(uploadedFile.size / 1024 / 1024).toFixed(2)} MB`
            : description
          }
        </Typography>
        
        {!uploadedFile && (
          <Typography variant="caption" color="text.secondary">
            {isDragActive
              ? "Suelta el archivo aquí"
              : "Arrastra y suelta el archivo aquí, o haz clic para seleccionar"}
          </Typography>
        )}

        {status === "uploading" && (
          <Box sx={{ width: "100%", mt: 2 }}>
            <LinearProgress variant="determinate" value={progress} />
            <Typography variant="caption" color="text.secondary">
              Subiendo... {progress}%
            </Typography>
          </Box>
        )}
      </Paper>

      {uploadedFile && status === "success" && (
        <Alert severity="success" sx={{ mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <InsertDriveFile />
            <Typography variant="body2">
              Archivo cargado: <strong>{uploadedFile.name}</strong> ({(uploadedFile.size / 1024).toFixed(0)} KB)
            </Typography>
          </Box>
        </Alert>
      )}

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Requisitos del archivo:
        </Typography>
        <List dense>
          {requirements.map((req, index) => (
            <ListItem key={index} sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <Description color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary={req}
                primaryTypographyProps={{ variant: "body2" }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Alert severity="info">
        <Typography variant="caption">
          <strong>Formatos aceptados:</strong> .xlsx, .xls, .csv • 
          <strong> Tamaño máximo:</strong> 10MB • 
          <strong> Nota:</strong> Los datos se procesan localmente en tu navegador.
        </Typography>
      </Alert>
    </Box>
  );
};

export default FileUploader;
