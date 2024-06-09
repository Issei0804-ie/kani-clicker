import { useNetStore } from '@/stores/net'

export const initIntervalManager = () => {
  const net = useNetStore()
  setInterval(async () => {
    net.act()
  }, 1000)
}
