
export function updateBio(data) {
      const { nama,kota,pekerjaan } = data;
      return {
            type: "CHANGE_BIODATA",
            names:nama,
            kota:kota,
            pekerjaan:pekerjaan
      };
}
export function addAddress(data) {
      const { id,propinsi, kabupaten, kecamatan } = data;
      return {
            type: "ADD_ADDRESS",
            id:id,
            propinsi:propinsi,
            kabupaten:kabupaten,
            kecamatan:kecamatan
      };
}
export function deleteAddress(data) {
      return {
            type: "DELETE_ADDRESS",
            id:data.id
      };
}
export function updateAddress(data) {
      const { id,propinsi, kabupaten, kecamatan } = data;
      return {
            type: "UPDATE_ADDRESS",
            id:id,
            propinsi:propinsi,
            kabupaten:kabupaten,
            kecamatan:kecamatan
      };
}
export function deleteAllAddress(data) {
      return {
            type: "DELETE_ALL_ADDRESS",
            alamat:''
      };
}



export function changeJob(data) {
      const { pekerjaan } = data;
      return {
            type: "CHANGE_JOB",
            pakaerjaan:pekerjaan
      };
}
