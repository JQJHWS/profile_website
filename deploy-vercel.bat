@echo off
chcp 65001 >nul
echo ========================================
echo     简历生成器 - Vercel 一键部署
echo ========================================
echo.

cd /d "%~dp0"

echo [步骤 1/3] 检查 Vercel CLI...
where vercel >nul 2>nul
if %errorlevel% neq 0 (
    echo [信息] 正在安装 Vercel CLI...
    call npm install -g vercel
)

echo.
echo [步骤 2/3] 构建项目...
call npm run build
if %errorlevel% neq 0 (
    echo [错误] 构建失败，请检查代码
    pause
    exit /b 1
)

echo.
echo [步骤 3/3] 部署到 Vercel...
echo [提示] 首次部署需要登录 Vercel 账号
echo.
call vercel --prod

echo.
echo ========================================
echo [完成] 部署成功！
echo [提示] 请查看上方显示的网址
echo ========================================
pause
