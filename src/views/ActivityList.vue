<template>
  <div class="list">
    <Breadcrumbs>
      <NavMenu :text="$t('components.nav.activity')" to="/activity" />
    </Breadcrumbs>
    <div class="bar">
      <SelectUi :options="city" v-model="searchCity" />
      <SelectUi :options="activity" v-model="searchType" />
      <SearchBar>
        <input
          class="input"
          type="text"
          :placeholder="$t('components.searchBar.activity')"
          v-model.trim="searchKey"
        />
        <Search :disabled="!canSubmit" @on-click="search" />
      </SearchBar>
    </div>
    <div class="section" v-if="spot_activity">
      <div class="title">{{ $t('components.searchList.result') }}</div>
      <div class="row">
        <Card
          v-for="item in spot_activity"
          :key="item.ActivityID"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import commonDelegate from '@/delegate/commonDelegate'
import spotDelegate from '@/delegate/spotDelegate'
import Breadcrumbs from '@/components/Breadcrumbs'
import NavMenu from '@/components/Breadcrumbs/NavMenu'
import SearchBar from '@/components/SearchBar'
import Search from '@/components/SearchBar/Search'
import SelectUi from '@/components/ui/SelectUi'
import Card from '@/components/Card'
import { CITY, ACTIVITY } from '@/tools/searchType'

export default {
  name: 'ActivityList',
  components: {
    Breadcrumbs,
    NavMenu,
    SearchBar,
    Search,
    SelectUi,
    Card,
  },
  mixins: [commonDelegate, spotDelegate],
  data() {
    return {
      searchKey: '' /*搜尋關鍵字 */,
      searchCity: '' /*搜尋城市 */,
      searchType: '' /*搜尋活動主題 */,
      canSubmit: true,
    }
  },
  computed: {
    city() {
      return CITY
    },
    activity() {
      return ACTIVITY
    },
    searchState() {
      if (this.searchType) {
        if (this.searchKey) {
          return `$filter=(contains(Name, '${this.searchKey}') or contains(Class1, '${this.searchType}') or contains(Class2, '${this.searchType}')) and Picture/PictureUrl1 ne null`
        }
        return `$filter=contains(Class1, '${this.searchType}') or contains(Class2, '${this.searchType}') and Picture/PictureUrl1 ne null`
      }
      return '$filter=Picture/PictureUrl1 ne null'
    },
  },
  watch: {
    spot_activity(val) {
      if (val) {
        this.canSubmit = true
      }
    },
  },
  methods: {
    search() {
      this.canSubmit = false
      this.spot_getActivityCity(this.searchCity, this.searchState)
    },
  },
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.list {
  @apply --container;
  @media (--pc-viewport) {
    padding: 0px 45px;
  }
}
.bar {
  display: flex;
  align-items: center;
  padding-bottom: 60px;
  & .select-ui + .select-ui {
    margin-left: 15px;
  }
  & .input {
    width: 370px;
    @apply --input;
  }
  & .searchbar {
    margin-left: 15px;
  }
  & .search {
    width: 175px;
    margin-left: 15px;
  }
}
.section {
  & .title {
    font-size: var(--text8);
    font-weight: 300;
    color: var(--gray2);
    padding-bottom: 15px;
  }
  & .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  & .card {
    width: 22.97%;
    padding-bottom: 36px;
  }
}
</style>
