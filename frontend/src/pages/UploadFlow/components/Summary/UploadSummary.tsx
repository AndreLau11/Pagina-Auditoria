import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import {
  CheckCircle,
  Error,
  Pending,
  CloudUpload,
  InsertDriveFile,
} from "@mui/icons-material";

interface UploadSummaryProps {
  uploadedFile?: File;
  progress?: number;
  status?: "pending" | "uploading" | "success" | "error";
}

// Datos de ejemplo
const mockUploadedFiles = [
  { name: "RTU_2024.xlsx", type: "RTU", size: "1.2 MB", status: "success" },
  { name: "Compras_Enero_2024.csv", type: "Compras", size: "3.4 MB", status: "success" },
  { name: "Ventas_Enero_2024.xlsx", type: "Ventas", size: "2.1 MB", status: "success" },
  { name: "CFA_Retencion.pdf", type: "Otros", size: "0.8 MB", status: "pending" },
];

const UploadSummary: React.FC<UploadSummaryProps> = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success": return <CheckCircle color="success" />;
      case "error": return <Error color="error" />;
      case "uploading": return <CloudUpload color="info" />;
      default: return <Pending color="action" />;
    }
  };

  const getStatusChip = (status: string) => {
    switch (status) {
      case "success": return <Chip label="Completado" color="success" size="small" />;
      case "error": return <Chip label="Error" color="error" size="small" />;
      case "uploading": return <Chip label="Subiendo" color="info" size="small" />;
      default: return <Chip label="Pendiente" variant="outlined" size="small" />;
    }
  };

  return (
    <Box>
      <Alert severity="success" sx={{ mb: 3 }}>
        <Typography variant="subtitle2" fontWeight={600}>
          ¡Documentos cargados exitosamente!
        </Typography>
        <Typography variant="body2">
          Revisa la información antes de generar tu reporte SAT. 
          Puedes volver a cualquier paso si necesitas modificar algo.
        </Typography>
      </Alert>

      <Typography variant="h6" gutterBottom>
        Resumen de Documentos Cargados
      </Typography>

      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Documento</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Tamaño</TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockUploadedFiles.map((file, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <InsertDriveFile color="action" />
                    <Typography variant="body2">{file.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{file.type}</TableCell>
                <TableCell>{file.size}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {getStatusIcon(file.status)}
                    {getStatusChip(file.status)}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Próximos pasos:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText 
              primary="Validación de formatos SAT" 
              secondary="Los archivos se validarán contra los requisitos oficiales"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText 
              primary="Cálculo automático de IVA" 
              secondary="Se calcularán los montos de IVA compras vs ventas"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText 
              primary="Generación de reportes" 
              secondary="Se crearán los libros de compras y ventas en formato SAT"
            />
          </ListItem>
        </List>
      </Paper>

      <Alert severity="info">
        <Typography variant="body2">
          <strong>Nota importante:</strong> Este sistema procesa los datos localmente en tu navegador. 
          Ninguna información fiscal sensible se envía a servidores externos, garantizando total 
          confidencialidad de tus datos.
        </Typography>
      </Alert>
    </Box>
  );
};

export default UploadSummary;
