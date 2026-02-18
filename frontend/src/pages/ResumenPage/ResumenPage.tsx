import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert,
  LinearProgress,
  Chip,
} from "@mui/material";
import {
  Download,
  PictureAsPdf,
  TableChart,      // 👈 reemplazo de Excel
  ArrowBack,
  CheckCircle,
  Warning,
  AttachMoney,
  ShoppingCart,
  Sell,
  Calculate,
} from "@mui/icons-material";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

interface DocumentSummary {
  id: string;
  name: string;
  type: string;
  status: "success" | "pending" | "error";
  size: string;
  uploadDate: string;
}

interface ReportData {
  periodo: string;
  totalCompras: number;
  totalVentas: number;
  ivaCompras: number;
  ivaVentas: number;
  saldoIVA: number;
  documentos: number;
  fechaGeneracion: string;
}

const ResumenPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [reportData, setReportData] = useState<ReportData | null>(null);

  // Datos de ejemplo
  const [documents] = useState<DocumentSummary[]>([
    {
      id: "1",
      name: "RTU_2024.xlsx",
      type: "RTU",
      status: "success",
      size: "1.2 MB",
      uploadDate: new Date().toISOString().split("T")[0],
    },
    {
      id: "2",
      name: "Compras_Enero_2024.csv",
      type: "Compras",
      status: "success",
      size: "3.4 MB",
      uploadDate: new Date().toISOString().split("T")[0],
    },
    {
      id: "3",
      name: "Ventas_Enero_2024.xlsx",
      type: "Ventas",
      status: "success",
      size: "2.8 MB",
      uploadDate: new Date().toISOString().split("T")[0],
    },
  ]);

  const generarExcelSAT = () => {
    setLoading(true);
    
    // Simular procesamiento
    setTimeout(() => {
      // Crear formato SAT Guatemala
      const libroCompras = [
        ["LIBRO DE COMPRAS - SAT GUATEMALA"],
        ["Periodo Fiscal: Enero 2024"],
        ["Fecha de generación: " + new Date().toLocaleDateString("es-GT")],
        ["NIT Contribuyente: 1234567890123"],
        ["Razón Social: EMPRESA DEMO SA"],
        [""],
        ["No.", "Fecha", "NIT Proveedor", "Nombre Proveedor", "No. Documento", "Base", "IVA", "Total"],
        ["1", "2024-01-05", "123456789", "PROVEEDOR SA", "FAC-001", "1000.00", "120.00", "1120.00"],
        ["2", "2024-01-12", "987654321", "DISTRIBUIDORA SA", "FAC-002", "2000.00", "240.00", "2240.00"],
        ["3", "2024-01-18", "456789123", "SUMINISTROS SA", "FAC-003", "1500.00", "180.00", "1680.00"],
        ["", "", "", "", "TOTALES:", "4500.00", "540.00", "5040.00"],
      ];

      const libroVentas = [
        ["LIBRO DE VENTAS - SAT GUATEMALA"],
        ["Periodo Fiscal: Enero 2024"],
        ["Fecha de generación: " + new Date().toLocaleDateString("es-GT")],
        ["NIT Contribuyente: 1234567890123"],
        ["Razón Social: EMPRESA DEMO SA"],
        [""],
        ["No.", "Fecha", "NIT Cliente", "Nombre Cliente", "No. Documento", "Base", "IVA", "Total"],
        ["1", "2024-01-03", "456789123", "CLIENTE SA", "FAC-101", "3000.00", "360.00", "3360.00"],
        ["2", "2024-01-15", "789123456", "EMPRESA SA", "FAC-102", "4000.00", "480.00", "4480.00"],
        ["3", "2024-01-22", "CF", "CONSUMIDOR FINAL", "FAC-103", "2500.00", "300.00", "2800.00"],
        ["", "", "", "", "TOTALES:", "9500.00", "1140.00", "10640.00"],
      ];

      const resumen = [
        ["RESUMEN FISCAL - SAT GUATEMALA"],
        ["Periodo: Enero 2024"],
        ["Fecha: " + new Date().toLocaleDateString("es-GT")],
        [""],
        ["CONCEPTO", "MONTO (Q)"],
        ["Total Compras Gravadas", "4500.00"],
        ["IVA Compras", "540.00"],
        ["Total Ventas Gravadas", "9500.00"],
        ["IVA Ventas", "1140.00"],
        ["SALDO IVA A PAGAR", "600.00"],
        ["IVA A FAVOR", "0.00"],
        [""],
        ["FIRMA RESPONSABLE: ___________________________"],
        ["NOMBRE: EMPRESA DEMO SA"],
        ["NIT: 1234567890123"],
      ];

      // Crear workbook
      const wb = XLSX.utils.book_new();
      
      const wsCompras = XLSX.utils.aoa_to_sheet(libroCompras);
      const wsVentas = XLSX.utils.aoa_to_sheet(libroVentas);
      const wsResumen = XLSX.utils.aoa_to_sheet(resumen);

      XLSX.utils.book_append_sheet(wb, wsCompras, "Libro de Compras");
      XLSX.utils.book_append_sheet(wb, wsVentas, "Libro de Ventas");
      XLSX.utils.book_append_sheet(wb, wsResumen, "Resumen Fiscal");

      // Generar Excel
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const blob = new Blob([excelBuffer], { 
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
      });
      
      saveAs(blob, `Libro_SAT_${new Date().toISOString().split("T")[0]}.xlsx`);
      
      // Actualizar datos
      setReportData({
        periodo: "Enero 2024",
        totalCompras: 5040.00,
        totalVentas: 10640.00,
        ivaCompras: 540.00,
        ivaVentas: 1140.00,
        saldoIVA: 600.00,
        documentos: 3,
        fechaGeneracion: new Date().toLocaleDateString("es-GT"),
      });
      
      setLoading(false);
    }, 1500);
  };

  // Generar datos iniciales
  useEffect(() => {
    if (!reportData) {
      generarExcelSAT();
    }
  }, []);

  return (
    <Container maxWidth="lg">
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate("/upload")}
          sx={{ mb: 2 }}
        >
          Volver a Carga
        </Button>
        
        <Typography variant="h4" component="h1" gutterBottom>
          Resumen y Reportes SAT
        </Typography>
        
        <Typography variant="body1" color="text.secondary" paragraph>
          Reporte generado según los documentos cargados. Verifica la información antes de presentar a la SAT.
        </Typography>
      </Box>

      {loading && <LinearProgress sx={{ mb: 3 }} />}

      {/* Tarjetas de resumen */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <ShoppingCart color="primary" sx={{ mr: 1 }} />
                <Typography color="text.secondary" variant="body2">
                  Total Compras
                </Typography>
              </Box>
              <Typography variant="h4">
                Q {reportData?.totalCompras.toFixed(2) || "0.00"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Sell color="primary" sx={{ mr: 1 }} />
                <Typography color="text.secondary" variant="body2">
                  Total Ventas
                </Typography>
              </Box>
              <Typography variant="h4">
                Q {reportData?.totalVentas.toFixed(2) || "0.00"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <AttachMoney color="primary" sx={{ mr: 1 }} />
                <Typography color="text.secondary" variant="body2">
                  Saldo IVA
                </Typography>
              </Box>
              <Typography 
                variant="h4" 
                color={reportData && reportData.saldoIVA > 0 ? "error" : "success"}
              >
                Q {reportData?.saldoIVA.toFixed(2) || "0.00"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Calculate color="primary" sx={{ mr: 1 }} />
                <Typography color="text.secondary" variant="body2">
                  Documentos
                </Typography>
              </Box>
              <Typography variant="h4">
                {reportData?.documentos || 0}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Tabla de documentos */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Documentos Procesados
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Documento</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell>Tamaño</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell>Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>{doc.name}</TableCell>
                  <TableCell>
                    <Chip label={doc.type} size="small" color="primary" variant="outlined" />
                  </TableCell>
                  <TableCell>{doc.size}</TableCell>
                  <TableCell>{doc.uploadDate}</TableCell>
                  <TableCell>
                    <Chip
                      icon={doc.status === "success" ? <CheckCircle /> : <Warning />}
                      label={doc.status === "success" ? "Procesado" : "Pendiente"}
                      color={doc.status === "success" ? "success" : "warning"}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Generar reportes */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Generar Reportes Oficiales
        </Typography>
        
        <Alert severity="info" sx={{ mb: 3 }}>
          Los reportes generados siguen el formato oficial de la SAT Guatemala para presentación 
          de libros de compras y ventas. Descarga el archivo Excel y guárdalo para tus registros.
        </Alert>
        
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              fullWidth
              startIcon={<TableChart />}
              onClick={generarExcelSAT}
              disabled={loading}
              sx={{ py: 1.5 }}
            >
              Descargar Excel SAT
            </Button>
            <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1 }}>
              Formato oficial para presentación electrónica
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<PictureAsPdf />}
              disabled
              sx={{ py: 1.5 }}
            >
              Generar PDF (Próximamente)
            </Button>
            <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1 }}>
              Versión impresa para archivo físico
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Información adicional */}
      <Alert severity="warning">
        <Typography variant="body2">
          <strong>Recordatorio:</strong> Este es un sistema de demostración. 
          Los datos mostrados son ejemplos. Para uso oficial, asegúrate de verificar 
          toda la información con un contador público autorizado.
        </Typography>
      </Alert>
    </Container>
  );
};

export default ResumenPage;
