import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { action } from '../../../../convex/_generated/server';

interface ProjectSummary {
    _id: string;
    name: string;
    projectNumber:number
    thumbnail?:string
    lastModified:number
    createdAt:number
    isPublic?:boolean
}


interface ProjectsState {
  projects: ProjectSummary[]
  total: number
  isLoading: boolean
  error: string | null
  lastFetched: number | null
  // Track creation state
  isCreating: boolean
  createError: string | null
}

const initialState: ProjectsState = {
  projects: [],
  total: 0,
  isLoading: false,
  error: null,
  lastFetched: null,
  isCreating: false,
  createError: null,
}
const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    fetchProjectsStart: (state) => {
      state.isLoading = true
      state.error = null
    },
    fetchProjectsSuccess: (
      state,
      action: PayloadAction<{ projects: ProjectSummary[]; total: number }>
    ) => {
      state.isLoading = false
      state.projects = action.payload.projects
      state.total = action.payload.total
      state.error = null
      state.lastFetched = Date.now()
    },
    fetchProjectsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    createProjectStart: (state) => {
      state.isCreating = true
      state.createError = null
    },
    createProjectSuccess: (state) => {
      state.isCreating = false
      state.createError = null
    },
    createProjectFailure: (state) => {
      state.isCreating = false
      state.createError = action.payload
    },
    addProject: (state, action: PayloadAction<ProjectSummary>) => {
      state.projects.unshift(action.payload)
      state.total += 1
    },
  },
})

export const { fetchProjectsStart, fetchProjectsSuccess, fetchProjectsFailure, createProjectStart, createProjectSuccess, createProjectFailure, updateProject, deleteProject, clearProjectError, clearProjectCreateError } = projectsSlice.actions

export default projectsSlice.reducer