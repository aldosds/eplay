import ProductsList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import streetFighter6 from '../../assets/images/street_fighter_6.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductsList games={actionGames} title="Ação" background="gray" />
        <ProductsList games={sportGames} title="Esportes" background="black" />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="gray"
        />
        <ProductsList games={fightGames} title="Luta" background="black" />
        <ProductsList games={rpgGames} title="RPG" background="gray" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
