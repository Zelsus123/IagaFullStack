-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-12-2022 a las 17:47:57
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `iagareact`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `denuncias`
--

CREATE TABLE `denuncias` (
  `id` int(11) NOT NULL,
  `Motivo` varchar(100) NOT NULL,
  `Cedula` varchar(15) NOT NULL,
  `Denunciante` varchar(80) NOT NULL,
  `Correo` varchar(250) NOT NULL,
  `Telefono1` varchar(20) NOT NULL,
  `Telefono2` varchar(20) NOT NULL,
  `Direccion` varchar(500) NOT NULL,
  `Detalles` varchar(400) NOT NULL,
  `id_status` int(11) DEFAULT 1,
  `id_inspector` int(11) DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `denuncias`
--

INSERT INTO `denuncias` (`id`, `Motivo`, `Cedula`, `Denunciante`, `Correo`, `Telefono1`, `Telefono2`, `Direccion`, `Detalles`, `id_status`, `id_inspector`, `createdAt`, `updatedAt`) VALUES
(52, 'Poda Ilegal', 'V-27.752.052', 'Jesus Barrera', 'jesusbag123@gmail.com', '0412-032-98-22', '', '', 'Poda xD', 1, NULL, '2022-12-07', '2022-12-09'),
(53, 'Tala Ilegal', 'V-10.795.160', 'Diogenes Perez', 'luisbarreravlutriosa@gmail.com', '0212-962-58-82', '', 'Av. 589 propatria', 'Se observo a una persona talando un arbol de forma presuntamente ilegal en via publica', 1, NULL, '2022-12-10', '2022-12-10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `rol` varchar(50) NOT NULL,
  `CrearDenuncia` tinyint(1) NOT NULL,
  `VerDenuncias` tinyint(1) NOT NULL,
  `createdAt` int(11) NOT NULL,
  `updatedAt` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `rol`, `CrearDenuncia`, `VerDenuncias`, `createdAt`, `updatedAt`) VALUES
(1, 'Superusuario', 1, 1, 2022, 2022),
(2, 'Secretaria', 1, 0, 2022, 2022);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitudes`
--

CREATE TABLE `solicitudes` (
  `id` int(11) NOT NULL,
  `Motivo` varchar(100) NOT NULL,
  `Cedula` varchar(15) NOT NULL,
  `Solicitante` varchar(80) NOT NULL,
  `Correo` varchar(250) NOT NULL,
  `Telefono1` varchar(20) NOT NULL,
  `Telefono2` varchar(20) NOT NULL,
  `Direccion` varchar(500) NOT NULL,
  `Detalles` varchar(400) NOT NULL,
  `id_status` int(11) NOT NULL DEFAULT 1,
  `id_inspector` int(11) DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `solicitudes`
--

INSERT INTO `solicitudes` (`id`, `Motivo`, `Cedula`, `Solicitante`, `Correo`, `Telefono1`, `Telefono2`, `Direccion`, `Detalles`, `id_status`, `id_inspector`, `createdAt`, `updatedAt`) VALUES
(52, 'Prueba Solicitud 1', 'V-6.426.771', 'Diogenes Herrera', 'diogenes@test.com', '0412-555-55-55', '', 'Av. Propatria', 'Solicitud de prueba procesada con exito', 1, NULL, '2022-12-10', '2022-12-10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `Status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `status`
--

INSERT INTO `status` (`id`, `Status`) VALUES
(1, 'Creado'),
(2, 'Asignado'),
(3, 'Pendiente de inspeccion'),
(4, 'Pendiente de informe'),
(5, 'Procesado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(20) NOT NULL,
  `Nombre` varchar(70) NOT NULL,
  `CedulaUser` varchar(25) NOT NULL,
  `CorreoUser` varchar(50) NOT NULL,
  `roleId` int(11) NOT NULL,
  `Password` varchar(500) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `Nombre`, `CedulaUser`, `CorreoUser`, `roleId`, `Password`, `createdAt`, `updatedAt`) VALUES
(9, 'Luis Barrera', 'V-10.795.160', 'luisbarreravlutriosa@gmail.com', 2, 'lutriosa', '2022-12-06', '2022-12-06'),
(10, 'Carlos Suarez', 'V-6.321.515', 'carlos@test.com', 1, '123456879', '2022-12-06', '2022-12-06'),
(11, 'Pepe Ronaldo', 'V-6.351.585', 'pepe@test.com', 1, '$2a$10$3h2PY3MdbCQsQRaoIlnCeuzmNYNLxA1aY2zSP3k7wx254TwSwPsTS', '2022-12-06', '2022-12-06'),
(12, 'Pedro Lugo', 'V-15.351.585', 'Pedro@test.com', 1, '$2a$10$zbyR41wctUeWTqVqrQbU4OdXfL11dR33fKwpPDKo3N0d874S0PZJa', '2022-12-06', '2022-12-06'),
(13, 'Jose Barreto', 'V-15.789.457', 'jose@test.com', 1, '$2a$10$Y4KnfzQLkQ5mrb8hjspr/O9kj3bTFTtIuALdjp2c9lyDf7vBB5aPe', '2022-12-06', '2022-12-06'),
(14, 'Jesus Barrera', 'V-27.752.052', 'jesusbag123@gmail.com', 1, '$2a$10$ItYCdoCm9acNLcYvbKVVmOG.Qlc7aymbjuxsdWobQJCiwEg5rt3f6', '2022-12-06', '2022-12-06'),
(17, 'Zeros Prueba', 'V-50.482.325', 'xxxx@gmail.com', 2, '$2a$10$LrRdn.KrC2Ctmlzor0040.ehPPWdIgM01M2YLOwhQTnerwcexpH4i', '2022-12-09', '2022-12-09'),
(18, 'ADMINISTRADOR ADMIN', 'V-11.111.111', 'admin@admin.com', 1, '$2a$10$itX4jxyo1WWroV47046cyuOoXjEWVHj7jL047MuEuHhZ5KWPunkpS', '2022-12-10', '2022-12-10');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `denuncias`
--
ALTER TABLE `denuncias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_status` (`id_status`,`id_inspector`),
  ADD KEY `id_inspector` (`id_inspector`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_status` (`id_status`,`id_inspector`),
  ADD KEY `id_inspector` (`id_inspector`);

--
-- Indices de la tabla `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Rol_ID1` (`roleId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `denuncias`
--
ALTER TABLE `denuncias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `denuncias`
--
ALTER TABLE `denuncias`
  ADD CONSTRAINT `denuncias_ibfk_1` FOREIGN KEY (`id_inspector`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `denuncias_ibfk_2` FOREIGN KEY (`id_status`) REFERENCES `status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD CONSTRAINT `solicitudes_ibfk_1` FOREIGN KEY (`id_inspector`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `solicitudes_ibfk_2` FOREIGN KEY (`id_status`) REFERENCES `status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
