import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {ProgressLoader1} from './../components/Progressing'
import { connect } from "react-redux";
import { updateBio, addAddress, deleteAddress, updateAddress,deleteAllAddress, changeJob } from './../redux/actions/bioActions';
import { isAuthentication, successLogin,login_failed, logoutUserLogin } from './../redux/actions/userActions';


class ReduxManage extends React.Component {
    constructor() {
      super();    
        this.nama = React.createRef();
        this.state = {
            listdata:[],
            loading: false,
            pages: 0,
            isLoading: true,
            bioadata:{},
            alamat:[],
            aksi_addr:{btn_alamat:'Add Address',aksi:'new',id_edit:''},
            date:new Date()
        };
    }
   
  
  jam() {
      this.setState({
        date: new Date()
      });
  }
componentDidMount() {
      // this.Mytimer = setInterval(() => this.jam(),1000);
      setTimeout(() => this.setState({ isLoading: false }), 600);
      const { nama,kota,pekerjaan,alamat } = this.props.bioadata;
      let bio={
        nama:nama,
        kota:kota,
        pekerjaan:pekerjaan,
      }
      this.setState({bioadata:bio})
      this.setState({alamat:alamat})
}
static getDerivedStateFromProps(props, state) {
  console.log('Component getDerivedStateFromProps!')
  console.log('PROPS BERUBAH '+JSON.stringify(props.bioadata))
  console.log('STATE BERUBAH '+JSON.stringify(state.bioadata))
  const { alamat,nama,kota,pekerjaan } = props.bioadata;
  return { alamat,nama,kota,pekerjaan };
}
/*
componentWillReceiveProps(nextProps){
      this.setState({alamat:nextProps.bioadata.alamat})
      let bio={
        nama:nextProps.bioadata.nama,
        kota:nextProps.bioadata.kota,
        pekerjaan:nextProps.bioadata.pekerjaan,
      }
      this.setState({bioadata:bio})
      // console.log('setelah '+JSON.stringify(nextProps.bioadata.alamat))
}
*/

updateBio = ev => {
      ev.preventDefault();
      let nama = (this.nama.current.value !=='')?this.nama.current.value:this.props.bioadata.nama;
      let kota = (this.refs.kota.value !=='')?this.refs.kota.value:this.props.bioadata.kota;
      let pekerjaan = (this.refs.pekerjaan.value !=='')?this.refs.pekerjaan.value:this.props.bioadata.pekerjaan;

      let bio={nama:nama,kota:kota,pekerjaan:pekerjaan};
      this.props.gantiNama(bio);

      this.nama.current.focus();
      this.nama.current.value=''
      this.refs.kota.value=''
      this.refs.pekerjaan.value=''
};

add_address = ev => {
  ev.preventDefault();
let aksi=this.state.aksi_addr.aksi
if(aksi ==='new'){
      var timestamp = new Date().getUTCMilliseconds();
      let data={
        id : timestamp,
        propinsi : this.refs.propinsi.value,
        kabupaten : this.refs.kabupaten.value,
        kecamatan : this.refs.kecamatan.value
      }
      this.props.tambahAlamat(data);
  } else{
      let data={
        id : this.state.aksi_addr.id_edit,
        propinsi : this.refs.propinsi.value,
        kabupaten : this.refs.kabupaten.value,
        kecamatan : this.refs.kecamatan.value
      }
      this.props.updateAlamat(data);
  }

    this.setState(prevState =>({
      aksi_addr:{
        ...prevState,
        btn_alamat:'New Addrees',
        aksi:'new',
        id_edit:''
      }
    }));
      this.refs.propinsi.value=''
      this.refs.propinsi.focus();
      this.refs.kabupaten.value=''
      this.refs.kecamatan.value=''
};

edit_addr=(el)=>{
  let alamat=this.state.alamat
  let data=alamat.filter(val=>val.id ===el)
  this.setState(prevState =>({
      aksi_addr:{
        ...prevState,
        btn_alamat:'Update Addrees',
        aksi:'edit',
        id_edit:el
      }
  }));

  let allstate=this.state.alamat
  let filterdata=allstate.filter(val=>val.id !== el)
  let newobject={
    id:data[0].id,
    propinsi:'Lapmung',
    kabupaten:'mesuji',
    kecamatan:'ogan ilir'
  }
  let gabung=[...filterdata,newobject]
  // let gabung=filterdata.concat(newobject)
  console.log('INI perubahan '+ JSON.stringify(gabung))

  this.refs.propinsi.value=data[0].propinsi
  this.refs.kabupaten.value=data[0].kabupaten
  this.refs.kecamatan.value=data[0].kecamatan

}

delete_addr=(el)=>{
  var result = window.confirm("Want to delete?");
  if(result){
    this.props.deleteONeAdress({id:el});
  }
}

delete_all_address = () => {
      this.props.deleteAllMyadress({alamat:''});
      this.setState({alamat:[]})
};

    render() {
          const { nama,kota,pekerjaan} = this.props.bioadata;
          const alamat= this.state.alamat;
          return (
                  this.state.isLoading ? <ProgressLoader1/>:
                  <div style={{paddingBottom:'55px'}}>
                  <h1>{this.state.date.toLocaleTimeString()}</h1>
                    <br/>
                  <p style={{background:'#8bc34a'}}><b>User Auth status : {JSON.stringify(this.props.userAuth)}</b></p>
                  <h2>Manage Redux Biodata</h2>
                  <p> Nama : {nama}</p>
                  <p> Kota : {kota}</p>
                  <p> Pekerjaan : {pekerjaan}</p>
                  <form method="post" onSubmit={this.updateBio}>
                    <input name="nama" ref={this.nama} placeholder="nama" />
                    <input name="kota" ref="kota" placeholder="kota"/>
                    <input name="pekerjaan" ref="pekerjaan" placeholder="pekerjaan" />
                    <button type="submit">Update Bio</button>
                  </form>
                  <br/>

                  <h3>Address Multiple</h3>
                  {
                    alamat.map((value,idx)=>{
                    return (
                        <li key={value.id}>{`${value.id} - ${value.propinsi} - ${value.kabupaten} -${value.kecamatan}`}
                          &nbsp; <button type="button" onClick={()=>this.edit_addr(value.id)}>Edit</button>
                          &nbsp; <button type="button" onClick={()=>this.delete_addr(value.id)}>Delete</button>
                        </li>
                      );
                    })
                  }
                  <br/>
                  <button type="button" onClick={this.delete_all_address}>Delete all address</button>
                  <br/><br/>
                  
                  <form method="post" onSubmit={this.add_address}>
                    <p>{`${this.state.aksi_addr.id_edit} - ${this.state.aksi_addr.aksi}`}</p>
                    <input name="propinsi" ref="propinsi" placeholder="propinsi" />
                    <input name="kabupaten" ref="kabupaten" placeholder="kabupaten"/>
                    <input name="kecamatan" ref="kecamatan" placeholder="kecamatan" />
                    <button type="submit">{this.state.aksi_addr.btn_alamat}</button>
                  </form>

                  </div>
         );
     }
}
const mapStateToProps = state => {
  return {
    bioadata: state.bioadata,
    userAuth: state.userLogin,
  };
};
// Membuat dispatch
const mapDispatchToProps = dispatch => ({
  gantiNama: data => {
    dispatch(updateBio(data));
  },
  tambahAlamat: data => {
    dispatch(addAddress(data));
  },
  hapusAlamat: data => {
    dispatch(deleteAddress(data));
  },
  updateAlamat: data => {
    dispatch(updateAddress(data));
  },
  gantiJob: data => {
    dispatch(changeJob(data));
  },
  deleteAllMyadress: data => {
    dispatch(deleteAllAddress(data));
  },
  deleteONeAdress: data => {
    dispatch(deleteAddress(data));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(ReduxManage);