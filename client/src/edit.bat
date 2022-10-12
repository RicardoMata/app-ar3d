@echo off 
    setlocal enableextensions disabledelayedexpansion

    for /f "tokens=1-2 delims=:" %%a in ('ipconfig^|find "IPv4"') do set ip=%%b
    set ip=%ip:~1%

    SET "c = '//'"
    SET "url=%c%%ip%"

    set "search=%url:000.000.0.0" 
    set "replace=%"

    set "textFile=App.js"

    for /f "delims=" %%i in ('type "%textFile%" ^& break ^> "%textFile%" ') do (
        set "line=%%i"
        setlocal enabledelayedexpansion
        >>"%textFile%" echo(!line:%search%=%c%%ip%!
        endlocal
    )