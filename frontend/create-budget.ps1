# Crear budget de $0.01 para alertas
$accountId = aws sts get-caller-identity --query Account --output text

$budgetJson = @{
    Budget = @{
        BudgetName = "FreeTierAlert"
        BudgetType = "COST"
        BudgetLimit = @{
            Amount = "0.01"
            Unit   = "USD"
        }
        TimeUnit = "MONTHLY"
    }
    NotificationsWithSubscribers = @(
        @{
            Notification = @{
                NotificationType = "ACTUAL"
                ComparisonOperator = "GREATER_THAN"
                Threshold = 100
                ThresholdType = "PERCENTAGE"
                NotificationState = "ALARM"
            }
            Subscribers = @(
                @{
                    SubscriptionType = "EMAIL"
                    Address = "tu-email@example.com"
                }
            )
        }
    )
}

$budgetJson | ConvertTo-Json -Depth 10 | aws budgets create-budget --cli-input-json file:///dev/stdin
