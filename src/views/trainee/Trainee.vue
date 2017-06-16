<template lang="html">
  <div class="trainee" ref="">
    <TableTopBar />
    <el-table :data="dataSource" :max-height="tableHeight">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="gender" label="性别">
        <template scope="scope">
          <span>{{ scope.row.gender == 1 ? '男' : '女' }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="birthday" label="生日"></el-table-column>
      <el-table-column prop="address" label="省份"></el-table-column>
    </el-table>
    <Pagination />
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import Pagination from '../../components/Pagination';
  import TableTopBar from '../../components/TableTopBar';

  export default {
    name: 'trainee',
    components: {
      Pagination,
      TableTopBar
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapState('trainee', [
        'dataSource'
      ]),
      ...mapState('layout', [
        'tableHeight'
      ])
    },
    created() {
      this.getList();
    },
    methods: {
      ...mapActions('trainee', [
        'getList'
      ])
    }
  }
</script>

<style lang="less">

</style>
