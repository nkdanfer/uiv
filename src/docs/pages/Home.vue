<template>
  <section>
    <div class="jumbotron">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-12">
            <h1>uiv</h1>
            <br/>
            <p>
              <a href="https://travis-ci.org/wxsms/uiv" target="_blank">
                <img src="https://travis-ci.org/wxsms/uiv.svg?branch=master" alt="Build Status" height="20px">
              </a>
              <a href='https://coveralls.io/github/wxsms/uiv?branch=master' target="_blank">
                <img src='https://coveralls.io/repos/github/wxsms/uiv/badge.svg?branch=master' alt='Coverage Status'
                     height="20px"/>
              </a>
              <a href='https://github.com/wxsms/uiv' target="_blank">
                <img src='https://img.shields.io/github/license/mashape/apistatus.svg' alt='License' height="20px"/>
              </a>
            </p>
            <p>
              <a href="https://npmjs.org/package/uiv" target="_blank">
                <img src='https://nodei.co/npm/uiv.png' alt='NPM' height="56px"/>
              </a>
            </p>
            <p><b>Bootstrap 3</b> Components Built with <b>Vue 2</b>.</p>
            <br/>
            <div>
              <a href="https://github.com/wxsms/uiv" class="btn btn-success btn-lg">
                Code on Github
              </a>
              <a href="https://github.com/wxsms/uiv/archive/master.zip" target="_blank" class="btn btn-success btn-lg">
                <i class="glyphicon glyphicon-download-alt"></i>
                Download
              </a>
            </div>
            <br/>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <div class="caption">
              <h3>Light Weight</h3>
              <p><i class="glyphicon glyphicon-leaf icon-thumbnail"></i></p>
              <p>~ <b>9KB</b> Gziped</p>
              <p>Dependencies only</p>
              <p><b>Vue</b> & <b>Bootstrap CSS</b></p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <div class="caption">
              <h3>Compatible</h3>
              <p><i class="glyphicon glyphicon-check icon-thumbnail"></i></p>
              <p>Tested with</p>
              <p><b>Modern Browsers</b></p>
              <p>And <b>IE 9+</b></p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <div class="caption">
              <h3>Open Source</h3>
              <p><i class="glyphicon glyphicon-grain icon-thumbnail"></i></p>
              <p>
                <b>MIT</b> License
                <a target="_blank" href="https://github.com/wxsms/uiv/blob/master/LICENSE"><i class="glyphicon glyphicon-share"></i></a>
              </p>
              <p>Easy and Free</p>
              <p>Welcome to contribute!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    components: {}
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "./../../assets/css/variables";

  .thumbnail {
    text-align: center;

    .icon-thumbnail {
      font-size: 600%;
      color: @highlight-color;
      margin: 20px 0;
      height: 100px;
    }
  }

  .jumbotron {
    .btn {
      background: transparent;
      color: #fff;
      transition: all .3s ease-in-out;
      border: 1px solid #fff;
      margin-right: 10px;

      &:visited, &:focus, &:active {
        color: #fff;
        border: 1px solid #fff;
      }

      &:hover {
        background: #fff;
        color: #333;
        border: 1px solid #fff;
      }
    }

    color: #fff;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNjAiIGhlaWdodD0iMjM3Ij48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJyZ2IoODMsIDE3NywgMTc3KSIgIC8+PGcgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iIzIyMiIgZmlsbC1vcGFjaXR5PSIwLjA5OCIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAsLTMwLjApIiA+PHBvbHlsaW5lIHBvaW50cz0iMCwwLDMwLjAsMjAuNCwzMC4wLDYwLjAsMCwzOS42LDAsMCIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMzAuMCwyMC40LDYwLjAsMCw2MC4wLDM5LjYsMzAuMCw2MC4wLDMwLjAsMjAuNCIgIC8+PC9nPjxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wOTgiIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wLDIwNy42MDAwMDAwMDAwMDAwMikiID48cG9seWxpbmUgcG9pbnRzPSIwLDAsMzAuMCwyMC40LDMwLjAsNjAuMCwwLDM5LjYsMCwwIiAgLz48cG9seWxpbmUgcG9pbnRzPSIzMC4wLDIwLjQsNjAuMCwwLDYwLjAsMzkuNiwzMC4wLDYwLjAsMzAuMCwyMC40IiAgLz48L2c+PGcgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iIzIyMiIgZmlsbC1vcGFjaXR5PSIwLjAyODY2NjY2NjY2NjY2NjY2NyIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MC4wLC0zMC4wKSIgPjxwb2x5bGluZSBwb2ludHM9IjAsMCwzMC4wLDIwLjQsMzAuMCw2MC4wLDAsMzkuNiwwLDAiICAvPjxwb2x5bGluZSBwb2ludHM9IjMwLjAsMjAuNCw2MC4wLDAsNjAuMCwzOS42LDMwLjAsNjAuMCwzMC4wLDIwLjQiICAvPjwvZz48ZyBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9IjAuMDI4NjY2NjY2NjY2NjY2NjY3IiBzdHJva2Utd2lkdGg9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYwLjAsMjA3LjYwMDAwMDAwMDAwMDAyKSIgPjxwb2x5bGluZSBwb2ludHM9IjAsMCwzMC4wLDIwLjQsMzAuMCw2MC4wLDAsMzkuNiwwLDAiICAvPjxwb2x5bGluZSBwb2ludHM9IjMwLjAsMjAuNCw2MC4wLDAsNjAuMCwzOS42LDMwLjAsNjAuMCwzMC4wLDIwLjQiICAvPjwvZz48ZyBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjZGRkIiBmaWxsLW9wYWNpdHk9IjAuMTQxMzMzMzMzMzMzMzMzMzQiIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIwLjAsLTMwLjApIiA+PHBvbHlsaW5lIHBvaW50cz0iMCwwLDMwLjAsMjAuNCwzMC4wLDYwLjAsMCwzOS42LDAsMCIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMzAuMCwyMC40LDYwLjAsMCw2MC4wLDM5LjYsMzAuMCw2MC4wLDMwLjAsMjAuNCIgIC8+PC9nPjxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIGZpbGw9IiNkZGQiIGZpbGwtb3BhY2l0eT0iMC4xNDEzMzMzMzMzMzMzMzMzNCIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAuMCwyMDcuNjAwMDAwMDAwMDAwMDIpIiA+PHBvbHlsaW5lIHBvaW50cz0iMCwwLDMwLjAsMjAuNCwzMC4wLDYwLjAsMCwzOS42LDAsMCIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMzAuMCwyMC40LDYwLjAsMCw2MC4wLDM5LjYsMzAuMCw2MC4wLDMwLjAsMjAuNCIgIC8+PC9nPjxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNjMzMzMzMzMzMzMzMzMzNCIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAuMCwtMzAuMCkiID48cG9seWxpbmUgcG9pbnRzPSIwLDAsMzAuMCwyMC40LDMwLjAsNjAuMCwwLDM5LjYsMCwwIiAgLz48cG9seWxpbmUgcG9pbnRzPSIzMC4wLDIwLjQsNjAuMCwwLDYwLjAsMzkuNiwzMC4wLDYwLjAsMzAuMCwyMC40IiAgLz48L2c+PGcgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iIzIyMiIgZmlsbC1vcGFjaXR5PSIwLjA2MzMzMzMzMzMzMzMzMzM0IiBzdHJva2Utd2lkdGg9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4MC4wLDIwNy42MDAwMDAwMDAwMDAwMikiID48cG9seWxpbmUgcG9pbnRzPSIwLDAsMzAuMCwyMC40LDMwLjAsNjAuMCwwLDM5LjYsMCwwIiAgLz48cG9seWxpbmUgcG9pbnRzPSIzMC4wLDIwLjQsNjAuMCwwLDYwLjAsMzkuNiwzMC4wLDYwLjAsMzAuMCwyMC40IiAgLz48L2c+PGcgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iI2RkZCIgZmlsbC1vcGFjaXR5PSIwLjA4OTMzMzMzMzMzMzMzMzMzIiBzdHJva2Utd2lkdGg9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0MC4wLC0zMC4wKSIgPjxwb2x5bGluZSBwb2ludHM9IjAsMCwzMC4wLDIwLjQsMzAuMCw2MC4wLDAsMzkuNiwwLDAiICAvPjxwb2x5bGluZSBwb2ludHM9IjMwLjAsMjAuNCw2MC4wLDAsNjAuMCwzOS42LDMwLjAsNjAuMCwzMC4wLDIwLjQiICAvPjwvZz48ZyBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjZGRkIiBmaWxsLW9wYWNpdHk9IjAuMDg5MzMzMzMzMzMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQwLjAsMjA3LjYwMDAwMDAwMDAwMDAyKSIgPjxwb2x5bGluZSBwb2ludHM9IjAsMCwzMC4wLDIwLjQsMzAuMCw2MC4wLDAsMzkuNiwwLDAiICAvPjxwb2x5bGluZSBwb2ludHM9IjMwLjAsMjAuNCw2MC4wLDAsNjAuMCwzOS42LDMwLjAsNjAuMCwzMC4wLDIwLjQiICAvPjwvZz48ZyBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjZGRkIiBmaWxsLW9wYWNpdHk9IjAuMTQxMzMzMzMzMzMzMzMzMzQiIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAwLjAsLTMwLjApIiA+PHBvbHlsaW5lIHBvaW50cz0iMCwwLDMwLjAsMjAuNCwzMC4wLDYwLjAsMCwzOS42LDAsMCIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMzAuMCwyMC40LDYwLjAsMCw2MC4wLDM5LjYsMzAuMCw2MC4wLDMwLjAsMjAuNCIgIC8+PC9nPjxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIGZpbGw9IiNkZGQiIGZpbGwtb3BhY2l0eT0iMC4xNDEzMzMzMzMzMzMzMzMzNCIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDAuMCwyMDcuNjAwMDAwMDAwMDAwMDIpIiA+PHBvbHlsaW5lIHBvaW50cz0iMCwwLDMwLjAsMjAuNCwzMC4wLDYwLjAsMCwzOS42LDAsMCIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMzAuMCwyMC40LDYwLjAsMCw2MC4wLDM5LjYsMzAuMCw2MC4wLDMwLjAsMjAuNCIgIC8+PC9nPjxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNjMzMzMzMzMzMzMzMzMzNCIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAsOS42MDAwMDAwMDAwMDAwMDEpIiA+PHBvbHlsaW5lIHBvaW50cz0iMCwwLDMwLjAsMjAuNCwzMC4wLDYwLjAsMCwzOS42LDAsMCIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMzAuMCwyMC40LDYwLjAsMCw2MC4wLDM5LjYsMzAuMCw2MC4wLDMwLjAsMjAuNCIgIC8+PC9nPjxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wODA2NjY2NjY2NjY2NjY2NiIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MC4wLDkuNjAwMDAwMDAwMDAwMDAxKSIgPjxwb2x5bGluZSBwb2ludHM9IjAsMCwzMC4wLDIwLjQsMzAuMCw2MC4wLDAsMzkuNiwwLDAiICAvPjxwb2x5bGluZSBwb2ludHM9IjMwLjAsMjAuNCw2MC4wLDAsNjAuMCwzOS42LDMwLjAsNjAuMCwzMC4wLDIwLjQiICAvPjwvZz48ZyBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjZGRkIiBmaWxsLW9wYWNpdHk9IjAuMTQxMzMzMzMzMzMzMzMzMzQiIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIwLjAsOS42MDAwMDAwMDAwMDAwMDEpIiA+PHBvbHlsaW5lIHBvaW50cz0iMCwwLDMwLjAsMjAuNCwzMC4wLDYwLjAsMCwzOS42LDAsMCIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMzAuMCwyMC40LDYwLjAsMCw2MC4wLDM5LjYsMzAuMCw2MC4wLDMwLjAsMjAuNCIgIC8+PC9nPjxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIGZpbGw9IiNkZGQiIGZpbGwtb3BhY2l0eT0iMC4wNTQ2NjY2NjY2NjY2NjY2NyIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAuMCw5LjYwMDAwMDAwMDAwMDAwMSkiID48cG9seWxpbmUgcG9pbnRzPSIwLDAsMzAuMCwyMC40LDMwLjAsNjAuMCwwLDM5LjYsMCwwIiAgLz48cG9seWxpbmUgcG9pbnRzPSIzMC4wLDIwLjQsNjAuMCwwLDYwLjAsMzkuNiwzMC4wLDYwLjAsMzAuMCwyMC40IiAgLz48L2c+PGcgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iIzIyMiIgZmlsbC1vcGFjaXR5PSIwLjAyODY2NjY2NjY2NjY2NjY2NyIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDAuMCw5LjYwMDAwMDAwMDAwMDAwMSkiID48cG9seWxpbmUgcG9pbnRzPSIwLDAsMzAuMCwyMC40LDMwLjAsNjAuMCwwLDM5LjYsMCwwIiAgLz48cG9seWxpbmUgcG9pbnRzPSIzMC4wLDIwLjQsNjAuMCwwLDYwLjAsMzkuNiwzMC4wLDYwLjAsMzAuMCwyMC40IiAgLz48L2c+PGcgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iIzIyMiIgZmlsbC1vcGFjaXR5PSIwLjEzMjY2NjY2NjY2NjY2NjY1IiBzdHJva2Utd2lkdGg9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwMC4wLDkuNjAwMDAwMDAwMDAwMDAxKSIgPjxwb2x5bGluZSBwb2ludHM9IjAsMCwzMC4wLDIwLjQsMzAuMCw2MC4wLDAsMzkuNiwwLDAiICAvPjxwb2x5bGluZSBwb2ludHM9IjMwLjAsMjAuNCw2MC4wLDAsNjAuMCwzOS42LDMwLjAsNjAuMCwzMC4wLDIwLjQiICAvPjwvZz48ZyBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjZGRkIiBmaWxsLW9wYWNpdHk9IjAuMTQxMzMzMzMzMzMzMzMzMzQiIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wLDQ5LjIpIiA+PHBvbHlsaW5lIHBvaW50cz0iMCwwLDMwLjAsMjAuNCwzMC4wLDYwLjAsMCwzOS42LDAsMCIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMzAuMCwyMC40LDYwLjAsMCw2MC4wLDM5LjYsMzAuMCw2MC4wLDMwLjAsMjAuNCIgIC8+PC9nPjxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIGZpbGw9IiNkZGQiIGZpbGwtb3BhY2l0eT0iMC4xMDY2NjY2NjY2NjY2NjY2NyIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MC4wLDQ5LjIpIiA+PHBvbHlsaW5lIHBvaW50cz0iMCwwLDMwLjAsMjAuNCwzMC4wLDYwLjAsMCwzOS42LDAsMCIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMzAuMCwyMC40LDYwLjAsMCw2MC4wLDM5LjYsMzAuMCw2MC4wLDMwLjAsMjAuNCIgIC8+PC9nPjxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIGZpbGw9IiNkZGQiIGZpbGwtb3BhY2l0eT0iMC4wODkzMzMzMzMzMzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAuMCw0OS4yKSIgPjxwb2x5bGluZSBwb2ludHM9IjAsMCwzMC4wLDIwLjQsMzAuMCw2MC4wLDAsMzkuNiwwLDAiICAvPjxwb2x5bGluZSBwb2ludHM9IjMwLjAsMjAuNCw2MC4wLDAsNjAuMCwzOS42LDMwLjAsNjAuMCwzMC4wLDIwLjQiICAvPjwvZz48ZyBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjZGRkIiBmaWxsLW9wYWNpdHk9IjAuMDIiIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgwLjAsNDkuMikiID48cG9seWxpbmUgcG9pbnRzPSIwLDAsMzAuMCwyMC40LDMwLjAsNjAuMCwwLDM5LjYsMCwwIiAgLz48cG9seWxpbmUgcG9pbnRzPSIzMC4wLDIwLjQsNjAuMCwwLDYwLjAsMzkuNiwzMC4wLDYwLjAsMzAuMCwyMC40IiAgLz48L2c+PGcgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iI2RkZCIgZmlsbC1vcGFjaXR5PSIwLjAzNzMzMzMzMzMzMzMzMzMzIiBzdHJva2Utd2lkdGg9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0MC4wLDQ5LjIpIiA+PHBvbHlsaW5lIHBvaW50cz0iMCwwLDMwLjAsMjAuNCwzMC4wLDYwLjAsMCwzOS42LDAsMCIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMzAuMCwyMC40LDYwLjAsMCw2MC4wLDM5LjYsMzAuMCw2MC4wLDMwLjAsMjAuNCIgIC8+PC9nPjxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xNSIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDAuMCw0OS4yKSIgPjxwb2x5bGluZSBwb2ludHM9IjAsMCwzMC4wLDIwLjQsMzAuMCw2MC4wLDAsMzkuNiwwLDAiICAvPjxwb2x5bGluZSBwb2ludHM9IjMwLjAsMjAuNCw2MC4wLDAsNjAuMCwzOS42LDMwLjAsNjAuMCwzMC4wLDIwLjQiICAvPjwvZz48ZyBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjZGRkIiBmaWxsLW9wYWNpdHk9IjAuMDcyMDAwMDAwMDAwMDAwMDEiIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wLDg4LjgwMDAwMDAwMDAwMDAxKSIgPjxwb2x5bGluZSBwb2ludHM9IjAsMCwzMC4wLDIwLjQsMzAuMCw2MC4wLDAsMzkuNiwwLDAiICAvPjxwb2x5bGluZSBwb2ludHM9IjMwLjAsMjAuNCw2MC4wLDAsNjAuMCwzOS42LDMwLjAsNjAuMCwzMC4wLDIwLjQiICAvPjwvZz48ZyBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjZGRkIiBmaWxsLW9wYWNpdHk9IjAuMDg5MzMzMzMzMzMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjAuMCw4OC44MDAwMDAwMDAwMDAwMSkiID48cG9seWxpbmUgcG9pbnRzPSIwLDAsMzAuMCwyMC40LDMwLjAsNjAuMCwwLDM5LjYsMCwwIiAgLz48cG9seWxpbmUgcG9pbnRzPSIzMC4wLDIwLjQsNjAuMCwwLDYwLjAsMzkuNiwzMC4wLDYwLjAsMzAuMCwyMC40IiAgLz48L2c+PGcgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iIzIyMiIgZmlsbC1vcGFjaXR5PSIwLjE1IiBzdHJva2Utd2lkdGg9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMC4wLDg4LjgwMDAwMDAwMDAwMDAxKSIgPjxwb2x5bGluZSBwb2ludHM9IjAsMCwzMC4wLDIwLjQsMzAuMCw2MC4wLDAsMzkuNiwwLDAiICAvPjxwb2x5bGluZSBwb2ludHM9IjMwLjAsMjAuNCw2MC4wLDAsNjAuMCwzOS42LDMwLjAsNjAuMCwzMC4wLDIwLjQiICAvPjwvZz48ZyBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9IjAuMTUiIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgwLjAsODguODAwMDAwMDAwMDAwMDEpIiA+PHBvbHlsaW5lIHBvaW50cz0iMCwwLDMwLjAsMjAuNCwzMC4wLDYwLjAsMCwzOS42LDAsMCIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMzAuMCwyMC40LDYwLjAsMCw2MC4wLDM5LjYsMzAuMCw2MC4wLDMwLjAsMjAuNCIgIC8+PC9nPjxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIGZpbGw9IiNkZGQiIGZpbGwtb3BhY2l0eT0iMC4xMjQwMDAwMDAwMDAwMDAwMSIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDAuMCw4OC44MDAwMDAwMDAwMDAwMSkiID48cG9seWxpbmUgcG9pbnRzPSIwLDAsMzAuMCwyMC40LDMwLjAsNjAuMCwwLDM5LjYsMCwwIiAgLz48cG9seWxpbmUgcG9pbnRzPSIzMC4wLDIwLjQsNjAuMCwwLDYwLjAsMzkuNiwzMC4wLDYwLjAsMzAuMCwyMC40IiAgLz48L2c+PGcgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iIzIyMiIgZmlsbC1vcGFjaXR5PSIwLjAyODY2NjY2NjY2NjY2NjY2NyIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDAuMCw4OC44MDAwMDAwMDAwMDAwMSkiID48cG9seWxpbmUgcG9pbnRzPSIwLDAsMzAuMCwyMC40LDMwLjAsNjAuMCwwLDM5LjYsMCwwIiAgLz48cG9seWxpbmUgcG9pbnRzPSIzMC4wLDIwLjQsNjAuMCwwLDYwLjAsMzkuNiwzMC4wLDYwLjAsMzAuMCwyMC40IiAgLz48L2c+PGcgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iI2RkZCIgZmlsbC1vcGFjaXR5PSIwLjA3MjAwMDAwMDAwMDAwMDAxIiBzdHJva2Utd2lkdGg9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMCwxMjguNCkiID48cG9seWxpbmUgcG9pbnRzPSIwLDAsMzAuMCwyMC40LDMwLjAsNjAuMCwwLDM5LjYsMCwwIiAgLz48cG9seWxpbmUgcG9pbnRzPSIzMC4wLDIwLjQsNjAuMCwwLDYwLjAsMzkuNiwzMC4wLDYwLjAsMzAuMCwyMC40IiAgLz48L2c+PGcgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iI2RkZCIgZmlsbC1vcGFjaXR5PSIwLjA4OTMzMzMzMzMzMzMzMzMzIiBzdHJva2Utd2lkdGg9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYwLjAsMTI4LjQpIiA+PHBvbHlsaW5lIHBvaW50cz0iMCwwLDMwLjAsMjAuNCwzMC4wLDYwLjAsMCwzOS42LDAsMCIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMzAuMCwyMC40LDYwLjAsMCw2MC4wLDM5LjYsMzAuMCw2MC4wLDMwLjAsMjAuNCIgIC8+PC9nPjxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wODA2NjY2NjY2NjY2NjY2NiIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAuMCwxMjguNCkiID48cG9seWxpbmUgcG9pbnRzPSIwLDAsMzAuMCwyMC40LDMwLjAsNjAuMCwwLDM5LjYsMCwwIiAgLz48cG9seWxpbmUgcG9pbnRzPSIzMC4wLDIwLjQsNjAuMCwwLDYwLjAsMzkuNiwzMC4wLDYwLjAsMzAuMCwyMC40IiAgLz48L2c+PGcgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iIzIyMiIgZmlsbC1vcGFjaXR5PSIwLjAyODY2NjY2NjY2NjY2NjY2NyIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAuMCwxMjguNCkiID48cG9seWxpbmUgcG9pbnRzPSIwLDAsMzAuMCwyMC40LDMwLjAsNjAuMCwwLDM5LjYsMCwwIiAgLz48cG9seWxpbmUgcG9pbnRzPSIzMC4wLDIwLjQsNjAuMCwwLDYwLjAsMzkuNiwzMC4wLDYwLjAsMzAuMCwyMC40IiAgLz48L2c+PGcgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iI2RkZCIgZmlsbC1vcGFjaXR5PSIwLjA3MjAwMDAwMDAwMDAwMDAxIiBzdHJva2Utd2lkdGg9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0MC4wLDEyOC40KSIgPjxwb2x5bGluZSBwb2ludHM9IjAsMCwzMC4wLDIwLjQsMzAuMCw2MC4wLDAsMzkuNiwwLDAiICAvPjxwb2x5bGluZSBwb2ludHM9IjMwLjAsMjAuNCw2MC4wLDAsNjAuMCwzOS42LDMwLjAsNjAuMCwzMC4wLDIwLjQiICAvPjwvZz48ZyBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjZGRkIiBmaWxsLW9wYWNpdHk9IjAuMDg5MzMzMzMzMzMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAwLjAsMTI4LjQpIiA+PHBvbHlsaW5lIHBvaW50cz0iMCwwLDMwLjAsMjAuNCwzMC4wLDYwLjAsMCwzOS42LDAsMCIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMzAuMCwyMC40LDYwLjAsMCw2MC4wLDM5LjYsMzAuMCw2MC4wLDMwLjAsMjAuNCIgIC8+PC9nPjxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xNSIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAsMTY4LjApIiA+PHBvbHlsaW5lIHBvaW50cz0iMCwwLDMwLjAsMjAuNCwzMC4wLDYwLjAsMCwzOS42LDAsMCIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMzAuMCwyMC40LDYwLjAsMCw2MC4wLDM5LjYsMzAuMCw2MC4wLDMwLjAsMjAuNCIgIC8+PC9nPjxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xNSIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MC4wLDE2OC4wKSIgPjxwb2x5bGluZSBwb2ludHM9IjAsMCwzMC4wLDIwLjQsMzAuMCw2MC4wLDAsMzkuNiwwLDAiICAvPjxwb2x5bGluZSBwb2ludHM9IjMwLjAsMjAuNCw2MC4wLDAsNjAuMCwzOS42LDMwLjAsNjAuMCwzMC4wLDIwLjQiICAvPjwvZz48ZyBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjZGRkIiBmaWxsLW9wYWNpdHk9IjAuMDIiIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIwLjAsMTY4LjApIiA+PHBvbHlsaW5lIHBvaW50cz0iMCwwLDMwLjAsMjAuNCwzMC4wLDYwLjAsMCwzOS42LDAsMCIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMzAuMCwyMC40LDYwLjAsMCw2MC4wLDM5LjYsMzAuMCw2MC4wLDMwLjAsMjAuNCIgIC8+PC9nPjxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNjMzMzMzMzMzMzMzMzMzNCIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAuMCwxNjguMCkiID48cG9seWxpbmUgcG9pbnRzPSIwLDAsMzAuMCwyMC40LDMwLjAsNjAuMCwwLDM5LjYsMCwwIiAgLz48cG9seWxpbmUgcG9pbnRzPSIzMC4wLDIwLjQsNjAuMCwwLDYwLjAsMzkuNiwzMC4wLDYwLjAsMzAuMCwyMC40IiAgLz48L2c+PGcgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iIzIyMiIgZmlsbC1vcGFjaXR5PSIwLjEzMjY2NjY2NjY2NjY2NjY1IiBzdHJva2Utd2lkdGg9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0MC4wLDE2OC4wKSIgPjxwb2x5bGluZSBwb2ludHM9IjAsMCwzMC4wLDIwLjQsMzAuMCw2MC4wLDAsMzkuNiwwLDAiICAvPjxwb2x5bGluZSBwb2ludHM9IjMwLjAsMjAuNCw2MC4wLDAsNjAuMCwzOS42LDMwLjAsNjAuMCwzMC4wLDIwLjQiICAvPjwvZz48ZyBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjZGRkIiBmaWxsLW9wYWNpdHk9IjAuMDIiIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAwLjAsMTY4LjApIiA+PHBvbHlsaW5lIHBvaW50cz0iMCwwLDMwLjAsMjAuNCwzMC4wLDYwLjAsMCwzOS42LDAsMCIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMzAuMCwyMC40LDYwLjAsMCw2MC4wLDM5LjYsMzAuMCw2MC4wLDMwLjAsMjAuNCIgIC8+PC9nPjwvc3ZnPg==);
  }
</style>
