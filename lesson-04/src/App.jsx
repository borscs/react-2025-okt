import ProjectsSideBar from "./components/ProjectsSideBar.jsx";
import NewProjects from "./components/NewProject.jsx";
import {useState} from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
	
	const [projectState, setProjectState] = useState({
		selectedProjectId: undefined,
		projects: [],
	});
	
	function handleStartAddProject() {
		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: null,
			}
		});
	}
	
	function handleAddProject(projectData) {
		setProjectState((prevState) => {
			const projectId = Math.random();
			const newProjects = {
				...projectData,
				id: projectId,
			};
			
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProjects],
			}
		})
	}
	
	function handleCancelAddProject() {
		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
			}
		})
	}
	
	function handleSelectedProject(id){
		 setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectId: id,
			}
		})
	}
	
	function handleDeleteProject(){
		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId),
			}
		})
	}
	
	const selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProjectId);
	
	let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>;
	
	if(projectState.selectedProjectId === null){
		content = <NewProjects onAdd={handleAddProject} onCancel={handleCancelAddProject}/>;
	}else if(projectState.selectedProjectId === undefined){
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	}
	
	return (
		<main className="h-screen py-8 flex gap-8">
			<ProjectsSideBar
				onStartAddProject={handleStartAddProject}
				projects={projectState.projects}
				onSelectedProject={handleSelectedProject}/>
			{content}
		</main>
	);
}

export default App;
