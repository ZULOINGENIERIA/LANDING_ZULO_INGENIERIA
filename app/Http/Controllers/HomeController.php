<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Home');
    }

    public function submit(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'service' => ['required', 'string', 'max:120'],
            'projectType' => ['required', 'string', 'max:120'],
            'stage' => ['required', 'string', 'max:120'],
            'department' => ['required', 'string', 'max:120'],
            'city' => ['required', 'string', 'max:120'],
            'address' => ['nullable', 'string', 'max:255'],
            'scope' => ['required', 'array', 'min:1'],
            'scope.*' => ['string', 'max:120'],
            'details' => ['nullable', 'string', 'max:1500'],
            'budget' => ['required', 'string', 'max:120'],
            'timeline' => ['required', 'string', 'max:120'],
            'name' => ['required', 'string', 'max:120'],
            'company' => ['nullable', 'string', 'max:120'],
            'phone' => ['required', 'string', 'max:40'],
            'whatsapp' => ['nullable', 'string', 'max:40'],
            'email' => ['required', 'email', 'max:190'],
            'preferredContact' => ['required', 'string', 'max:120'],
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Solicitud recibida correctamente.',
            'payload' => $validated,
        ]);
    }
}
