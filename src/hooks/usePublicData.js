import { useState, useEffect, useRef, useCallback } from 'react'

// Cache for storing fetched data across component instances
const dataCache = new Map()

/**
 * Custom hook to fetch JSON data from public folder with caching
 * @param {string} fileName - Name of the JSON file (without .json extension)
 * @returns {object} { data, loading, error, refetch }
 */
export const usePublicData = (fileName) => {
    const [data, setData] = useState(() => dataCache.get(fileName) || null)
    const [loading, setLoading] = useState(() => !dataCache.has(fileName))
    const [error, setError] = useState(null)
    const abortControllerRef = useRef(null)

    const fetchData = useCallback(async () => {
        // Check cache first
        if (dataCache.has(fileName)) {
            setData(dataCache.get(fileName))
            setLoading(false)
            return
        }

        try {
            setLoading(true)
            setError(null)

            // Abort previous request if exists
            if (abortControllerRef.current) {
                abortControllerRef.current.abort()
            }

            abortControllerRef.current = new AbortController()

            const response = await fetch(`/data/${fileName}.json`, {
                signal: abortControllerRef.current.signal
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const jsonData = await response.json()

            // Validate data is not empty
            if (!jsonData || (typeof jsonData === 'object' && Object.keys(jsonData).length === 0)) {
                throw new Error(`Empty data in ${fileName}.json`)
            }

            // Cache the data
            dataCache.set(fileName, jsonData)
            setData(jsonData)
            setError(null)
        } catch (err) {
            if (err.name !== 'AbortError') {
                const errorMessage = `Failed to load ${fileName}: ${err.message}`
                setError(errorMessage)
            }
        } finally {
            setLoading(false)
        }
    }, [fileName])

    useEffect(() => {
        fetchData()

        // Cleanup: abort fetch on unmount
        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort()
            }
        }
    }, [fetchData])

    return { data, loading, error, refetch: fetchData }
}

/**
 * Hook to fetch personal information
 */
export const usePersonalData = () => {
    return usePublicData('personal')
}

/**
 * Hook to fetch skills data
 */
export const useSkillsData = () => {
    return usePublicData('skills')
}

/**
 * Hook to fetch experience data
 */
export const useExperienceData = () => {
    return usePublicData('experience')
}

/**
 * Hook to fetch education data
 */
export const useEducationData = () => {
    return usePublicData('education')
}

/**
 * Hook to fetch projects data
 */
export const useProjectsData = () => {
    return usePublicData('projects')
}

export default usePublicData