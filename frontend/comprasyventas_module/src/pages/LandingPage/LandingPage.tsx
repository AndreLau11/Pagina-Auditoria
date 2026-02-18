//# Crear src/pages/LandingPage/LandingPage.tsx
//@'
import React from "react"
import { useNavigate } from "react-router-dom"
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  alpha,
} from "@mui/material"
import {
  CheckCircle,
  Security,
  Speed,
  AttachMoney,
  CloudUpload,
  BarChart,
  Download,
  ArrowForward,
  VerifiedUser,
  Assignment,
  Calculate,
} from "@mui/icons-material"
import { satColors } from "../../theme/theme"

const LandingPage: React.FC = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: <CheckCircle sx={{ fontSize: 48, color: satColors.primary }} />,
      title: "Cumplimiento SAT 100%",
      description: "Genera los formatos exactos requeridos por la Superintendencia de Administración Tributaria de Guatemala. Compatible con los últimos requisitos legales.",
    },
    {
      icon: <Security sx={{ fontSize: 48, color: satColors.primary }} />,
      title: "Seguro y Confiable",
      description: "Tus datos están protegidos con encriptación AES-256. Procesamiento local sin enviar información sensible a servidores externos.",
    },
    {
      icon: <Speed sx={{ fontSize: 48, color: satColors.primary }} />,
      title: "Procesamiento Rápido",
      description: "Procesa miles de registros en segundos. Genera reportes completos de compras y ventas en formato SAT con un solo clic.",
    },
  ]

  const benefits = [
    {
      icon: <AttachMoney color="success" />,
      text: "Totalmente gratuito para uso personal y empresarial",
    },
    {
      icon: <CloudUpload color="info" />,
      text: "Interfaz intuitiva con arrastrar y soltar",
    },
    {
      icon: <BarChart color="warning" />,
      text: "Reportes detallados con gráficos y análisis",
    },
    {
      icon: <Download color="primary" />,
      text: "Descarga en formatos Excel, PDF y CSV",
    },
  ]

  const howItWorks = [
    {
      step: "1",
      title: "Carga tu RTU",
      description: "Sube tu Registro Tributario Unificado en formato Excel",
      icon: <VerifiedUser />,
    },
    {
      step: "2",
      title: "Agrega compras y ventas",
      description: "Carga tus libros mensuales en formato CSV o Excel",
      icon: <Assignment />,
    },
    {
      step: "3",
      title: "Genera reportes",
      description: "Sistema calcula automáticamente los totales y IVA",
      icon: <Calculate />,
    },
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Paper
        elevation={0}
        sx={{
          background: `linear-gradient(135deg, ${alpha(satColors.primary, 0.9)} 0%, ${alpha(satColors.primary, 0.7)} 100%)`,
          color: "white",
          borderRadius: 3,
          py: 8,
          px: 4,
          mb: 6,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill=\"%23ffffff\" fill-opacity=\"0.1\" fill-rule=\"evenodd\"/%3E%3C/svg%3E")',
            opacity: 0.3,
          },
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h1"
            gutterBottom
            sx={{ 
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              mb: 3
            }}
          >
            Auditor IVA SAT Guatemala
          </Typography>
          
          <Typography
            variant="h5"
            sx={{ 
              mb: 4, 
              opacity: 0.95,
              fontWeight: 400,
              fontSize: { xs: "1.1rem", md: "1.5rem" }
            }}
          >
            Sistema automatizado para la generación de libros de compras y ventas
            según los requerimientos oficiales de la SAT
          </Typography>
          
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/upload")}
            endIcon={<ArrowForward />}
            sx={{
              backgroundColor: "white",
              color: satColors.primary,
              py: 2,
              px: 6,
              fontSize: "1.1rem",
              fontWeight: 700,
              borderRadius: 2,
              "&:hover": {
                backgroundColor: alpha("#ffffff", 0.9),
                transform: "translateY(-2px)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Iniciar Ahora
          </Button>
          
          <Typography variant="caption" sx={{ display: "block", mt: 3, opacity: 0.8 }}>
            No se requiere registro. Comienza a usar la demo inmediatamente.
          </Typography>
        </Container>
      </Paper>

      {/* Características Principales */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
          ¿Por qué elegir Auditor IVA?
        </Typography>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flexGrow: 1, textAlign: "center", p: 4 }}>
                  <Box sx={{ mb: 3 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Cómo funciona */}
      <Paper
        elevation={0}
        sx={{
          backgroundColor: alpha(satColors.primary, 0.05),
          borderRadius: 3,
          py: 6,
          px: 4,
          mb: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
            Cómo funciona en 3 pasos
          </Typography>
          
          <Grid container spacing={4}>
            {howItWorks.map((step) => (
              <Grid item xs={12} md={4} key={step.step}>
                <Box sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      backgroundColor: satColors.primary,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      mb: 3,
                      mx: "auto",
                    }}
                  >
                    {step.step}
                  </Box>
                  <Box sx={{ mb: 2, color: satColors.primary }}>
                    {React.cloneElement(step.icon, { sx: { fontSize: 40 } })}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Paper>

      {/* Beneficios adicionales */}
      <Container maxWidth="md" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          Beneficios Adicionales
        </Typography>
        
        <Paper elevation={2} sx={{ p: 4, borderRadius: 3 }}>
          <List>
            {benefits.map((benefit, index) => (
              <ListItem key={index} sx={{ py: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  {benefit.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={benefit.text}
                  primaryTypographyProps={{ variant: "body1" }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>

      {/* Call to Action final */}
      <Container maxWidth="sm" sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
          ¿Listo para comenzar?
        </Typography>
        
        <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
          Únete a miles de contribuyentes que ya automatizaron su contabilidad con nuestro sistema.
        </Typography>
        
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/upload")}
          endIcon={<ArrowForward />}
          sx={{
            py: 2,
            px: 6,
            fontSize: "1.1rem",
            fontWeight: 700,
            borderRadius: 2,
          }}
        >
          Comenzar Demo Gratuita
        </Button>
        
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 3 }}>
          <Download sx={{ fontSize: 14, verticalAlign: "middle", mr: 0.5 }} />
          Compatible con Windows 10/11, macOS y Linux
        </Typography>
      </Container>
    </Box>
  )
}

export default LandingPage
//'@ | Set-Content -Path "src\pages\LandingPage\LandingPage.tsx" -Encoding UTF8