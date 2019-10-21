import React, { Component } from 'react';
import{ firebase} from '../../firebase';
import Fileuploader from 'react-firebase-file-uploader';
import CircularProgress from '@material-ui/core/CircularProgress'

class FileUploader extends Component {

    state ={
        name:'',
        isUploading:false,
        fileUrl:''
    }

    handleUploadStart = () => {
        this.setState({
            isUploading:true
        })
    }

    handleUploadError = () => {
        this.setState({
            isUploading:false
        })
     }

     handleUploadSuccess = (filename) => {

        console.log(filename)
     //giving back the name of file name
        this.setState({
            name:filename,
            isUploading:false
        });
      //go to directory in firebase
        firebase.storage().ref(this.props.dir)
        //inside directory find child dir with filename get url and return the promise
        .child(filename).getDownloadURL()
        .then( url => {
            this.setState({fileURL: url })
        })

        this.props.filename(filename)

     }



    static getDerivedStateFromProps(props,state){
        //if we have default image return and apply to the class
        if(props.defaultImg){
            return state = {
                name:props.defaultImgName,
                fileURL:props.defaultImg
            }
        }
        return null
    }

      uploadAgain = () => {
        this.setState({
            name:'',
            isUploading:false,
            fileURL:''
        });
        this.props.resetImage();
    }


    render() {
        return (
            <div>
                {/* if we dont have fileURL show Fileuploader */}
            { !this.state.fileURL ?
                <div>
                    <div className="label_inputs">{this.props.tag}</div>
                    <Fileuploader
                    accept='image/*'
                    name='image'
                    randomizeFilename
                    storageRef={firebase.storage().ref(this.props.dir)}
                    onUploadStart={ this.handleUploadStart }
                    onUploadError={ this.handleUploadError }
                    onUploadSuccess={ this.handleUploadSuccess }
                    />
                </div>
                :null
            }
            { this.state.isUploading ?
                <div className="progress"
                    style={{textAlign:'center',margin:'30px 0'}}
                >
                    <CircularProgress
                        style={{color:'#98c6e9'}}
                        thickness={7}
                    />
                </div>
            :null
            }
            { this.state.fileURL ?
                <div className="image_upload_container">
                    <img
                        style={{
                            width:'100%'
                        }}
                        src={this.state.fileURL}
                        alt={this.state.name}
                    />
                    <div className="remove" onClick={()=>this.uploadAgain()}>
                        Remove
                    </div>
                </div>

            :null
            }
        </div>
        );
    }
}

export default FileUploader;