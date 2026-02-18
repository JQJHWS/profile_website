@echo off
chcp 65001 >nul
echo ========================================
echo        简历生成器 - 启动脚本
echo ========================================
echo.

cd /d "%~dp0"

if not exist "node_modules" (
    echo [信息] 检测到首次运行，正在安装依赖...
    call npm install
    echo.
)

echo [信息] 正在启动开发服务器...
echo [信息] 启动后请在浏览器中访问: http://localhost:5173
echo.
echo [提示] 按 Ctrl+C 可停止服务器
echo ========================================
echo.

call npm run dev
