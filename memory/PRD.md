# PRD — Dhow Barbearia

## Problema original (pt-BR)
"faça um site de barbearia com o nome Dhow e com corte 25 e barba 15 bem estilizado e interativo tbm pra agendar horarios e chmar no zap"

## Personas
- Cliente jovem/adulto de Goiânia que quer cortar cabelo ou fazer a barba sem fila, agendando pelo WhatsApp
- Dono da barbearia (Dhow) que recebe os agendamentos prontos no WhatsApp (62) 98256-4548

## Requisitos centrais (fixos)
- Marca: Dhow Barbearia; preços fixos: Corte R$25, Barba R$15, Combo Corte+Barba R$35
- Agendamento: formulário (serviço, barbeiro, data, horário, nome, obs) → abre WhatsApp com mensagem pronta para 5562982564548
- Visual escuro e elegante, clima de barbearia clássica (preto/dourado)

## Arquitetura
- Frontend: Vite + React 19 + TS, Tailwind v4, motion (framer-motion), Lenis smooth scroll, fontes Playfair Display / Instrument Sans / JetBrains Mono
- Backend: FastAPI + MongoDB (motor) — POST/GET /api/bookings persistem agendamentos
- Favicon/logo: monograma "D" dourado com linha de navalha (SVG próprio)

## Implementado (07/2026)
- Hero cinético com reveal mascarado linha a linha, parallax no card visual, pill de status
- Marquee editorial lento com preços e diferenciais
- Bento de serviços (Corte/Barba/Combo) com preços e CTA que pré-seleciona o serviço no agendamento
- Agendamento interativo: serviço, barbeiro, data (Hoje/Amanhã/calendário, domingo bloqueado), grade de horários 09h–19h30 com ocupados simulados, nome/obs, resumo ao vivo com total, botão "Confirmar no WhatsApp" (wa.me/5562982564548) + POST /api/bookings
- Galeria com filtros vintage e depoimentos; Sobre com estatísticas; Horários/Contato com copiar número; footer tipográfico gigante "DHOW"
- Botão flutuante de WhatsApp; toasts Sonner; grain overlay; data-testids em todos os elementos interativos

## Backlog priorizado
- P0: nada pendente do pedido original
- P1: endereço real + Google Maps embed; horários ocupados reais (lidos do banco por data/barbeiro)
- P2: página/admin de agendamentos recebidos; lembrete automático; Instagram feed

## Próximas tarefas
- Substituir endereço placeholder pelo real; conectar ocupação real de horários; painel simples de agendamentos
