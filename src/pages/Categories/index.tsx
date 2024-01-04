import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import streetFighter6 from '../../assets/images/street_fighter_6.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    infos: ['R$ 250,00', '-10%'],
    system: 'Windows',
    title: 'Resident Evil 4'
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    infos: ['R$ 290,00', '-5%'],
    system: 'PS5',
    title: 'Resident Evil 4'
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    infos: ['R$ 250,00', '-10%'],
    system: 'Windows',
    title: 'Resident Evil 4'
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    infos: ['R$ 250,00', '-10%'],
    system: 'Windows',
    title: 'Resident Evil 4'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    infos: ['05/04'],
    system: 'Windows',
    title: 'Resident Evil 4'
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    image: zelda,
    infos: ['05/04'],
    system: 'PS5',
    title: 'The Legend of Zelda - TOK'
  },
  {
    id: 7,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    image: starWars,
    infos: ['05/04'],
    system: 'Windows',
    title: 'Star Wars Jedi Survivor'
  },
  {
    id: 8,
    category: 'Ação',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    image: streetFighter6,
    infos: ['05/04'],
    system: 'Windows',
    title: 'Street Fighter 6'
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
