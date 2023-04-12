import { getLocalData } from "../utilites/FakeDb"

export const jobDataLoader=async()=>{
    const jobData= await fetch('/jobDetails.json')
    const jobs=await jobData.json()

    const savedData=getLocalData()
    let newArr=[]
    for(const id in savedData){
        const foundData=jobs.find(singleJob => singleJob.id === id)
       if(foundData){
       newArr.push(foundData)
       }
    }
    return {newArr,jobs}
}