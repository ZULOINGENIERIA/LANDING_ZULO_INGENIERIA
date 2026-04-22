<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="Zulo Ingenieria ofrece diseno, construccion e interventoria de proyectos civiles, residenciales y comerciales en Colombia.">
    <meta name="keywords" content="ingenieria civil, construccion, interventoria, diseno estructural, proyectos civiles, obras civiles, Zulo Ingenieria, Colombia">
    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
    <meta name="author" content="Zulo Ingenieria">
    <meta property="og:site_name" content="Zulo Ingenieria">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="es_CO">
    <meta property="og:title" content="Zulo Ingenieria | Diseno, Construccion e Interventoria">
    <meta property="og:description" content="Construimos proyectos civiles con planificacion tecnica, control de calidad y acompanamiento de principio a fin.">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:image" content="{{ asset('images/og-zulo.png') }}">
    <meta property="og:image:alt" content="Marca de Zulo Ingenieria">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Zulo Ingenieria | Diseno, Construccion e Interventoria">
    <meta name="twitter:description" content="Construimos proyectos civiles con planificacion tecnica, control de calidad y acompanamiento de principio a fin.">
    <meta name="twitter:image" content="{{ asset('images/og-zulo.png') }}">
    <link rel="canonical" href="{{ url()->current() }}">
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @inertiaHead
</head>
<body>
    @inertia
</body>
</html>
