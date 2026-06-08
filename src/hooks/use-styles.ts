
export interface MoodBoardImage {
    storageId?: string
    uploaded: boolean
    uploading: boolean
    error?: string
    url?: string // Convex URL for uploaded images
    isFromServer?: boolean // Track if image came from server
}

interface StylesFormData {
    images: MoodBoardImage[]
}

export const useMoodBoard = (guideImages: MoodBoardImage[]) => {
    const [dragActive, setDragActive] = useState(false)
    const searchParams = useSearchParams()
    const projectId = searchParams.get('project')

    const form = useForm<StylesFormData>({
        defaultValues: {
            images: [],
        },
    })

    const { watch, setValue, getValues } = form
    const images = watch('images')

    const generateUploadUrl = useMutation(api.moodboard.generateUploadUrl)
    const removeMoodBoardImage = useMutation(api.moodboard.removeMoodBoardImage)
}