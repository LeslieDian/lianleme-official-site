@echo off
chcp 65001 >nul
echo ====================================
echo TrainYet 练了么 - 企业级官网
echo ====================================
echo.
echo 正在启动开发服务器...
echo.
cd /d "%~dp0"
npm run dev
pause
