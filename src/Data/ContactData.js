const contacts = [
    {
        id: 1,
        name: "Sofía Ramírez",
        last_time_connection: "Hace 2 minutos",
        profile_picture: 'https://randomuser.me/api/portraits/women/44.jpg',
        messages: [
            {
                id: 1,
                text: '¿Confirmás para el viernes?',
                send_by_me: true,
                created_at: '2026-03-10T10:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Sí! A las 20hs te parece?',
                send_by_me: false,
                created_at: '2026-03-10T10:03:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Perfecto, yo llevo algo para tomar',
                send_by_me: true,
                created_at: '2026-03-10T10:05:00Z',
                is_read: true
            },
            {
                id: 4,
                text: 'Genial! Yo me encargo de la comida entonces',
                send_by_me: false,
                created_at: '2026-03-10T10:06:00Z',
                is_read: true
            },
            {
                id: 5,
                text: 'Va a ser una noche épica jajaja',
                send_by_me: true,
                created_at: '2026-03-10T10:08:00Z',
                is_read: true
            },
            {
                id: 6,
                text: 'Jaja re! Avísame si necesitás que lleve algo más 🙌',
                send_by_me: false,
                created_at: '2026-03-10T10:10:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 2,
        name: "Matías Herrera",
        last_time_connection: "Hace 1 hora",
        profile_picture: 'https://randomuser.me/api/portraits/men/32.jpg',
        messages: [
            {
                id: 1,
                text: 'Che, me pasás el link de la reunión?',
                send_by_me: false,
                created_at: '2026-03-10T09:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Ya te lo mando',
                send_by_me: true,
                created_at: '2026-03-10T09:05:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'https://meet.google.com/xyz-abc',
                send_by_me: true,
                created_at: '2026-03-10T09:06:00Z',
                is_read: true
            },
            {
                id: 4,
                text: 'Gracias! A qué hora empieza?',
                send_by_me: false,
                created_at: '2026-03-10T09:07:00Z',
                is_read: true
            },
            {
                id: 5,
                text: 'A las 10, no llegues tarde esta vez jaja',
                send_by_me: true,
                created_at: '2026-03-10T09:08:00Z',
                is_read: true
            },
            {
                id: 6,
                text: 'Jajaja prometo que esta vez llego puntual 😅',
                send_by_me: false,
                created_at: '2026-03-10T09:10:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 3,
        name: "Valentina Cruz",
        last_time_connection: "Hace 3 horas",
        profile_picture: 'https://randomuser.me/api/portraits/women/68.jpg',
        messages: [
            {
                id: 1,
                text: 'Gracias por todo! 🙌',
                send_by_me: false,
                created_at: '2026-03-10T07:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Para eso estamos!',
                send_by_me: true,
                created_at: '2026-03-10T07:10:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Oye, viste el diseño nuevo que subí?',
                send_by_me: false,
                created_at: '2026-03-10T07:15:00Z',
                is_read: true
            },
            {
                id: 4,
                text: 'Sí! Está muy bueno, me gustó mucho la paleta de colores',
                send_by_me: true,
                created_at: '2026-03-10T07:20:00Z',
                is_read: true
            },
            {
                id: 5,
                text: 'Menos mal! Estuve toda la tarde trabajando en eso',
                send_by_me: false,
                created_at: '2026-03-10T07:22:00Z',
                is_read: true
            },
            {
                id: 6,
                text: 'Se nota, quedó profesional. Lo mostramos mañana en la reunión?',
                send_by_me: true,
                created_at: '2026-03-10T07:25:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 4,
        name: "Lucas Fernández",
        last_time_connection: "Ayer",
        profile_picture: 'https://randomuser.me/api/portraits/men/76.jpg',
        messages: [
            {
                id: 1,
                text: 'Cómo va el proyecto?',
                send_by_me: true,
                created_at: '2026-03-09T18:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Bien, casi terminando la última pantalla',
                send_by_me: false,
                created_at: '2026-03-09T18:30:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Qué falta exactamente?',
                send_by_me: true,
                created_at: '2026-03-09T18:32:00Z',
                is_read: true
            },
            {
                id: 4,
                text: 'El formulario de contacto y ajustar el responsive en mobile',
                send_by_me: false,
                created_at: '2026-03-09T18:35:00Z',
                is_read: true
            },
            {
                id: 5,
                text: 'Para cuándo lo tenés listo?',
                send_by_me: true,
                created_at: '2026-03-09T18:37:00Z',
                is_read: true
            },
            {
                id: 6,
                text: 'Mañana a la tarde lo tenés, te lo juro 😅',
                send_by_me: false,
                created_at: '2026-03-09T18:40:00Z',
                is_read: false
            }
        ]
    }
]

export default contacts