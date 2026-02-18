import type { ReactNode } from "react"
import { useNavigate } from "react-router-dom"
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material"
import { AccountBalance, Menu as MenuIcon } from "@mui/icons-material"

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate()

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <AppBar position="static" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ mr: 2 }}
              onClick={() => navigate("/")}
            >
              <AccountBalance sx={{ fontSize: 32 }} />
            </IconButton>
            
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ 
                flexGrow: 1, 
                fontWeight: 700,
                display: { xs: "none", sm: "block" }
              }}
            >
              Auditor IVA SAT
            </Typography>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <Button 
                color="inherit" 
                onClick={() => navigate("/")}
                sx={{ fontWeight: 600 }}
              >
                Inicio
              </Button>
              <Button 
                color="inherit" 
                onClick={() => navigate("/upload")}
                sx={{ fontWeight: 600 }}
              >
                Cargar Documentos
              </Button>
              <Button 
                color="inherit"
                sx={{ fontWeight: 600 }}
              >
                Tutorial
              </Button>
              <Button 
                color="inherit"
                sx={{ fontWeight: 600 }}
              >
                Contacto
              </Button>
            </Box>

            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Contenido principal */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          {children}
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "primary.dark",
          color: "white",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Auditor IVA SAT - Sistema para generación de libros de compras y ventas
          </Typography>
          <Typography variant="caption" align="center" sx={{ display: "block", mt: 1, opacity: 0.8 }}>
            Versión Demo 1.0.0 - Los datos se eliminarán automáticamente después de 30 días.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default Layout
//'@ | Set-Content -Path "src\components\Layout\Layout.tsx" -Encoding UTF8