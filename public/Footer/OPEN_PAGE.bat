@echo off
echo Starting About Us Page...
echo.
echo Opening at http://localhost:8000
echo Press Ctrl+C to stop the server
echo.
cd dist
python -m http.server 8000
