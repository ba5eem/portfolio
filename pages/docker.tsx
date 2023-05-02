import { useState } from 'react';
import appData from "../constants/data";
import Containers from '../components/Containers';
import "../styles/post.module.css"



export default function Home(props) {
  const [showLoader, setshowLoader] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [app, setApp] = useState("");


  const [names, setNames] = useState(props.payload.availImages || []);
  const [filteredNames, setFilteredNames] = useState(names);
  const [searchQuery, setSearchQuery] = useState('');

  const [runningContainers, setRunningContainers] = useState(props.payload.containers || []);


  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setFilteredNames(names.filter(name => name.toLowerCase().includes(query.toLowerCase())));
  }

  const runContainer = (app) => () => {
    setApp(app);
    callAPI(`${appData.runContainerURL}/${app}`)
  }

  const stopContainer = (containerName) => () => {
    callAPI(`${appData.stopContainerURL}/${containerName}`);
    setTimeout(() => {  window.location.reload(); }, 5000);

  }

  const restartContainer = (containerID) => () => {
    callAPI(`${appData.stopContainerURL}/${containerID}`);
    setTimeout(() => {  window.location.reload(); }, 10000);
  } 

  const refreshPage = () => {
    window.location.reload();
  }

  const callAPI = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };


  const listContainer = (cont,id) => {
    let ports = props.payload.imagePorts;
    return (
        <tr key={id}>
          <td>{cont["CONTAINER ID"]}</td>
          <td>{cont.IMAGE}</td>
          <td>{cont.COMMAND}</td>
          <td>{cont.CREATED}</td>
          <td>{cont.STATUS}</td>
          <td>{cont.PORTS}</td>
          <td>{cont.NAMES}</td>
          <td><a href={ports[cont.NAMES].url}><button className="open-button">open</button></a></td>
          <td><button onClick={stopContainer(cont.NAMES)} className="stop-button">stop</button></td>
          <td><button onClick={restartContainer(cont["CONTAINER ID"])} className="restart-button">restart</button></td>
        </tr>
        )
  }



  return (
    <div className="container">
      <div className="buttons">
      <div className="skills-container">
        <div className="grid-skills">

            

          {filteredNames.map((app, idx) => 
            <Containers 
              disabled={disabled} 
              className={disabled ? "disabled" : "button"} 
              key={idx}
              label={app} 
              onClick={runContainer(app)}/>
              )}

        </div>
        </div>
      </div>

      <div className="table">
        <div>
          <ul>
          <table>
            <thead>
              <tr>
                <th>Container ID</th>
                <th>Image</th>
                <th>Command</th>
                <th>Created</th>
                <th>Status</th>
                <th>Ports</th>
                <th>Names</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {runningContainers.map((cont, id) => listContainer(cont,id))}
            </tbody> 
          </table>
        </ul>

        </div>
        <button 
          onClick={refreshPage} 
          type="button" 
          className="refresh-button">refresh
        </button>
      </div>


      <div className="skills-container">
        <h2>Made with</h2>
        <div className="grid-skills">
          <div className="skill-card node">
            <p>Node</p>
          </div>
          <div className="skill-card docker">
            <p>Docker</p>
          </div>
        </div>
      </div>

  </div>
  )
}


const LoaderDiv = (props) => <div> <p>Loading {props.app}</p> <div className="loader"></div></div>;


export async function getServerSideProps() {
  const response = await fetch(`${appData.listContainersURL}`)
  const data = await response.json()

  return {
    props: {
      payload: data
    }

  }
}
