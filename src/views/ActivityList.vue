<template>
  <div class="list">
    <Breadcrumbs>
      <NavMenu :text="$t('components.nav.activity')" to="/activity" />
    </Breadcrumbs>
    <div class="bar">
      <SelectUi :options="city" v-model="searchCity" />
      <SelectUi :options="activity" v-model="searchType" :value="searchType" />
      <input
        class="input"
        type="text"
        :placeholder="$t('components.searchBar.activity')"
        v-model.trim="searchKey"
      />
      <Search :disabled="!canSubmit" @on-click="search" />
    </div>
    <div class="section" v-if="spot_activity">
      <div class="title">
        <div>{{ $t('components.searchList.result') }}</div>
        <div class="result">
          {{ $t('components.searchList.total') }}<span>{{ total }}</span
          >{{ $t('components.searchList.unit') }}
        </div>
      </div>
      <template v-if="total > 0">
        <div class="row">
          <div
            class="cardbox"
            v-for="item in filterActivity"
            :key="item.ActivityID"
          >
            <Card :item="item" />
          </div>
        </div>
        <Pagination
          :total="total"
          :perPage="perPage"
          v-model="numPage"
          @prev="prevPage"
          @next="nextPage"
          v-if="total > perPage"
        />
      </template>
      <div v-else>
        <NoData />
      </div>
    </div>
    <div class="section" v-else>
      <div class="title">{{ $t('components.searchList.popularType') }}</div>
      <div class="row">
        <div class="typebox" v-for="(item, idx) in type" :key="idx">
          <TypeCard
            :text="item.label"
            :img="item.img"
            @on-click="setType(item.value)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonDelegate from '@/delegate/commonDelegate'
import spotDelegate from '@/delegate/spotDelegate'
import Breadcrumbs from '@/components/Breadcrumbs'
import NavMenu from '@/components/Breadcrumbs/NavMenu'
import Search from '@/components/Search'
import SelectUi from '@/components/ui/SelectUi'
import Card from '@/components/Card'
import TypeCard from '@/components/TypeCard'
import NoData from '@/components/ui/NoData'
import Pagination from '@/components/Pagination'
import { CITY, ACTIVITY } from '@/tools/searchType'
import Lazy from 'lazy.js'

export default {
  name: 'ActivityList',
  components: {
    Breadcrumbs,
    NavMenu,
    Search,
    SelectUi,
    Card,
    TypeCard,
    NoData,
    Pagination,
  },
  mixins: [commonDelegate, spotDelegate],
  data() {
    return {
      searchKey: '' /*搜尋關鍵字 */,
      searchCity: '' /*搜尋城市 */,
      searchType: '' /*搜尋活動主題 */,
      canSubmit: true,
      numPage: 1,
      perPage: 20,
      filterActivity: null,
    }
  },
  computed: {
    city() {
      return CITY
    },
    activity() {
      return ACTIVITY
    },
    type() {
      return Lazy(ACTIVITY)
        .filter((el) => el.img !== '')
        .toArray()
    },
    total() {
      return this.spot_activity && this.spot_activity.length
    },
    searchState() {
      const _params = `$format=JSON`
      if (this.searchType) {
        if (this.searchKey) {
          return `$filter=(contains(ActivityName,'${this.searchKey}') or contains(Description,'${this.searchKey}') or contains(Address,'${this.searchKey}')) and (contains(Class1, '${this.searchType}') or contains(Class2, '${this.searchType}')) and Picture/PictureUrl1 ne null&${_params}`
        }
        return `$filter=(contains(Class1, '${this.searchType}') or contains(Class2, '${this.searchType}')) and Picture/PictureUrl1 ne null&${_params}`
      }
      return `$filter=Picture/PictureUrl1 ne null&${_params}`
    },
  },
  watch: {
    spot_activity(val) {
      if (val) {
        this.canSubmit = true
        this.getFilterActivity()
      }
    },
    numPage() {
      this.getFilterActivity()
    },
  },
  methods: {
    search() {
      this.numPage = 1
      this.canSubmit = false
      this.spot_getActivityCity(this.searchCity, this.searchState)
    },
    setType(val) {
      this.searchType = val
      this.search()
    },
    prevPage() {
      this.numPage -= 1
    },
    nextPage() {
      this.numPage += 1
    },
    getFilterActivity() {
      const _offset = (this.numPage - 1) * this.perPage
      this.filterActivity = Lazy(this.spot_activity)
        .slice(_offset, _offset + this.perPage)
        .toArray()
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
  flex-wrap: wrap;
  margin-bottom: 24px;
  @media (--pc-viewport) {
    flex-wrap: nowrap;
    margin-bottom: 60px;
  }
  & .select-ui {
    margin-bottom: 7px;
    @media (--pc-viewport) {
      flex: 0 1 240px;
      margin-bottom: 0px;
    }
    & + .select-ui {
      @media (--pc-viewport) {
        margin-left: 15px;
      }
    }
  }
  & .input {
    @apply --input;
    @media (--pc-viewport) {
      flex: 0 1 375px;
      margin-left: 15px;
    }
  }
  & .search {
    @media (--pc-viewport) {
      flex: 0 0 210px;
      margin-left: 15px;
    }
  }
}
.section {
  margin-bottom: 72px;
  & .title {
    font-size: var(--text6);
    font-weight: 300;
    color: var(--gray2);
    margin-bottom: 10px;
    display: flex;
    align-items: flex-end;
    @media (--pc-viewport) {
      font-size: var(--text8);
      margin-bottom: 15px;
    }
    & .result {
      font-size: var(--text1);
      font-weight: 400;
      color: var(--gray3);
      padding-left: 8px;
      @media (--pc-viewport) {
        font-size: var(--text3);
      }
      & span {
        color: var(--brown);
        padding: 0px 5px;
      }
    }
  }
  & .row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
  }
  & .typebox {
    flex: 0 0 50%;
    padding: 0px 15px 12px 15px;
    box-sizing: border-box;
    @media (--pc-viewport) {
      flex: 0 0 25%;
      max-width: 25%;
    }
  }
  & .cardbox {
    width: 100%;
    margin: 0px 15px 20px 15px;
    @media (--s-viewport) {
      flex: 0 0 50%;
      padding: 0px 15px;
      margin: 0px 0px 20px 0px;
      max-width: 50%;
      box-sizing: border-box;
    }
    @media (--pc-viewport) {
      flex: 0 0 25%;
      max-width: 25%;
      margin: 0px 0px 36px 0px;
    }
  }
}
</style>
