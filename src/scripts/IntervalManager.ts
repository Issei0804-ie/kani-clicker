import { useEbiStore } from '@/stores/ebi'

export const initIntervalManager = () => {
  const ebi = useEbiStore()
  setInterval(async () => {
    ebi.act()
  }, 1000)
}
