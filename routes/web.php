<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/videos', function () {
    return Inertia::render('Videos');
})->name('videos');

Route::get('/blog', function () {
    return Inertia::render('Blog');
})->name('blog');

Route::get('/travel-guides', function () {
    return Inertia::render('TravelGuides');
})->name('travel-guides');

Route::get('/merch', function () {
    return Inertia::render('Merch');
})->name('merch');

Route::get('/collaborate', function () {
    return Inertia::render('Collaborate');
})->name('collaborate');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');
