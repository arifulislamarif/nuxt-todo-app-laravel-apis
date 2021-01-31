<template>
  <b-container fluid class="mt-5">
    <b-row>
      <b-col cols="8">
        <b-card-group>
          <b-card
            header-bg-variant="dark"
            header-text-variant="white"
            header="All Students"
            header-tag="header"
          >
            <b-card-text>
              <table class="table">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>Roll</th>
                    <th>Addesss</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <b-button variant="primary">Show</b-button>
                       <b-button variant="info">Edit</b-button>
                      <b-button variant="danger">Delete</b-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </b-card-text>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col cols="4">
        <b-card-group>
          <b-card
            header-bg-variant="dark"
            header-text-variant="white"
            header="All Students"
            header-tag="header"
          >
            <b-card-text>
              <form>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group">
                  <label for="roll">Roll</label>
                  <input
                    type="text"
                    class="form-control"
                    id="roll"
                    placeholder="Roll"
                  />
                </div>
                <div class="form-group">
                  <label for="address">Addesss</label>
                  <textarea  id="address" rows="5" class="form-control"  placeholder="Address"></textarea>
                </div>
              </form>
            </b-card-text>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>
