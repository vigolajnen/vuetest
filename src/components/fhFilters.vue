<template>
  <div class="w-full py-5">
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4"
    >
      <select
        class="p-4 w-full rounded-md bg-brandLight border-transparent focus:border-gray-500 focus:bg-brandLight focus:ring-0 text-sm"
      >
        <option value="">Количество занятий</option>
        <option value="100">100 занятий</option>
        <option value="18">18 занятий</option>
        <option value="36">36 занятий</option>
        <option value="1">разовое посещение</option>
      </select>

      <select
        class="p-4 w-full rounded-md bg-brandLight border-transparent focus:border-gray-500 focus:bg-brandLight focus:ring-0 text-sm"
      >
        <option value="">Срок действия</option>
        <option value="fully-furnished">Fully Furnished</option>
        <option value="partially-furnished">Partially Furnished</option>
        <option value="not-furnished">Not Furnished</option>
      </select>

      <select
        class="p-4 w-full rounded-md bg-brandLight border-transparent focus:border-gray-500 focus:bg-brandLight focus:ring-0 text-sm"
      >
        <option value="">Время посещения</option>
        <option value="1000">RM 1000</option>
        <option value="2000">RM 2000</option>
        <option value="3000">RM 3000</option>
        <option value="4000">RM 4000</option>
      </select>

      <select
        class="p-4 w-full rounded-md bg-brandLight border-transparent focus:border-gray-500 focus:bg-brandLight focus:ring-0 text-sm"
      >
        <option value="">Тип секции</option>
        <option value="200">200 sq.ft</option>
        <option value="400">400 sq.ft</option>
        <option value="600">600 sq.ft</option>
        <option value="800 sq.ft">800</option>
        <option value="1000 sq.ft">1000</option>
        <option value="1200 sq.ft">1200</option>
      </select>

      <select
        class="p-4 w-full rounded-md bg-brandLight border-transparent focus:border-gray-500 focus:bg-brandLight focus:ring-0 text-sm"
      >
        <option value="">Категория тренера</option>
        <option value="1">1 bedroom</option>
        <option value="2">2 bedrooms</option>
        <option value="3">3 bedrooms</option>
        <option value="4">4 bedrooms</option>
        <option value="5">5 bedrooms</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fhFilters',
}
</script>