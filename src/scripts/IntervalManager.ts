import { useNetStore } from '@/stores/net'
import { useFatherStore } from '@/stores/father'

export const initIntervalManager = () => {
  const net = useNetStore()
  const father = useFatherStore()
  setInterval(async () => {
    net.act()
    father.act()
  }, 1000)
}
