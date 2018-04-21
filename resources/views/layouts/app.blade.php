<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>App Name - @yield('title')</title>
    <link rel="stylesheet" type="text/css" href="/css/app.css">
    {{--<link rel="stylesheet" type="text/css"--}}
          {{--href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.5/jquery.fullpage.min.css">--}}
    {{--<link href="https://fonts.googleapis.com/css?family=Anton|Rubik+Mono+One" rel="stylesheet">--}}


    <style>
        html, body {
            margin: 0;
            padding: 0;
        }
        .shader {
            width: 100vw;
            height: 100vh;
        }
    </style>

</head>
<body>
    <div id="app">
        <full-page-component></full-page-component>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.5/jquery.fullpage.min.js"></script>
    <script src="/js/app.js"></script>



</body>
</html>