import { value, computed } from 'vue-function-api'

export default (v: number) => {
  const count = value(v)
  const double = computed(() => count.value * 2)

  return {
    count,
    double
  }
}
