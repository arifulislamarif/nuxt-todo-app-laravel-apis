export const state = () => ({
  students: []
});

export const actions = {
         // async students() {
         //   const users = await this.$axios.$get(
         //     "https://jsonplaceholder.typicode.com/users"
         //   );
         //   // commit("fetch_users", users);
         //   console.log(users);
         // }

         studentData() {
           console.log(1321)
          //  axios({
          //    url: "https://jsonplaceholder.typicode.com/users",
          //    method: "GET"
          //  })
          //    .then(resp => {
          //      console.log(resp);
          //      //  const users = resp.data;
          //      //  commit("fetch_users", users);
          //    })
          //    .catch(err => {
          //      console.log(err);
          //    });
         }
       };

// export const mutations = {
//   studentAdd(state, info) {
//     state.students.push({
//       name: info.name,
//       email: info.email
//     });
//   },
//   fetch_users(state, users) {
//     state.students = users;
//   }
// };
