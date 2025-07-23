
<template>
<header class="bg-gray-700 shadow-md fixed w-full z-50">
      <div class="container mx-auto px-4 py-3">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <img
              src="../assets/logo-bom-frio-ar-br.png"
              alt="Bom Frio Ar"
              class="h-12"
            />
          </div>

          <div class="hidden md:flex space-x-8">
            <a
              href="#home"
              class="text-blue-600 font-medium hover:text-blue-800 transition"
              >Início</a
            >
            <a
              href="#services"
              class="text-gray-100 hover:text-blue-600 transition"
              >Serviços</a
            >
            <a
              href="#about"
              class="text-gray-100 hover:text-blue-600 transition"
              >Sobre Nós</a
            >
            <a
              href="#portfolio"
              class="text-gray-100 hover:text-blue-600 transition"
              >Portfólio</a
            >
            <a
              href="#contact"
              class="text-gray-100 hover:text-blue-600 transition"
              >Contato</a
            >
          </div>

          <div class="md:hidden">
            <button id="menu-toggle" class="text-gray-100 focus:outline-none">
              <i class="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden mt-4 pb-4">
          <a href="#home" class="block py-2 text-gray-100 hover:text-blue-600"
            >Início</a
          >
          <a
            href="#services"
            class="block py-2 text-gray-100 hover:text-blue-600"
            >Serviços</a
          >
          <a href="#about" class="block py-2 text-gray-100 hover:text-blue-600"
            >Sobre Nós</a
          >
          <a
            href="#portfolio"
            class="block py-2 text-gray-100 hover:text-blue-600"
            >Portfólio</a
          >
          <a
            href="#contact"
            class="block py-2 text-gray-100 hover:text-blue-600"
            >Contato</a
          >
          <div class="mt-3">
            <a
              href="tel:+5511999999999"
              class="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block hover:bg-blue-700 transition"
            >
              <i class="fas fa-phone mr-2"></i> (11) 99999-9999
            </a>
          </div>
        </div>
      </div>
    </header>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
});
</script>
