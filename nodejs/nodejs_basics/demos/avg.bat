@echo off

node avg %* 2>> error.log

IF %ERRORLEVEL% neq 0  echo error %errorlevel%

