$Host.UI.RawUI.WindowTitle = "简历生成器"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "       简历生成器 - 启动脚本" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Set-Location $PSScriptRoot

if (-not (Test-Path "node_modules")) {
    Write-Host "[信息] 检测到首次运行，正在安装依赖..." -ForegroundColor Yellow
    npm install
    Write-Host ""
}

Write-Host "[信息] 正在启动开发服务器..." -ForegroundColor Green
Write-Host "[信息] 启动后请在浏览器中访问: " -NoNewline
Write-Host "http://localhost:5173" -ForegroundColor Cyan
Write-Host ""
Write-Host "[提示] 按 Ctrl+C 可停止服务器" -ForegroundColor DarkGray
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

npm run dev
