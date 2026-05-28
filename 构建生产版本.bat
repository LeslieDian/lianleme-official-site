@echo off
chcp 65001 >nul
echo ====================================
echo TrainYet 练了么 - 构建生产版本
echo ====================================
echo.
echo 正在构建生产版本...
echo.
cd /d "%~dp0"
npm run build
echo.
echo ====================================
echo 构建完成！
echo 文件位于 dist 目录
echo ====================================
echo.
pause
