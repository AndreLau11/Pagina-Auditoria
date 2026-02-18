# AWS Configuration for Terraform Development
# Guardar como: aws-profile.ps1

# Exportar variables de entorno (alternativa a aws configure)
$env:AWS_ACCESS_KEY_ID="TU_ACCESS_KEY_AQUI"
$env:AWS_SECRET_ACCESS_KEY="TU_SECRET_KEY_AQUI"
$env:AWS_DEFAULT_REGION="us-east-1"

echo "✅ Variables AWS configuradas"
echo "• Region: $env:AWS_DEFAULT_REGION"
echo "• Access Key: $env:AWS_ACCESS_KEY_ID"
