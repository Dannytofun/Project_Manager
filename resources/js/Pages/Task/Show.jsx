import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP,TASK_PRIORITY_CLASS_MAP,TASK_PRIORITY_TEXT_MAP } from "@/constants.jsx";

export default function Show({auth,task}){
    return(
        <AuthenticatedLayout
             user={auth.user}
        header={
            <div className="flex items-center justify-between">
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
           {`Task "${task.name}"`}
           </h2>
             <Link 
             href={route('task.edit',task.id)}
             className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                 Edit
             </Link>
               </div>
            
            }
            >

            <Head title={`Task "${task.name}"`}/>
            
                <div className="py-12">
                    <div className="max-w-7-xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                                <img
                                src={task.image_path}
                                alt=""
                                className="w-full h-64 object-cover"
                                
                                />
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid gap-1 grid-cols-2 mt-2">
                                <div>

                                    <div>
                                        <label className="font-bold text-lg text-white">Task ID</label>
                                        <p className="mt-1 text-white">{task.id}</p>                             
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg text-white">Task Name</label>
                                        <p className="mt-1 text-white">{task.name}</p>                             
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg text-white">Task Status</label>
                                        <p className="mt-1 text-white">

                                        <span 
                                                className={
                                                    "px-2 py-1 rounded text-white "+ 
                                                    TASK_STATUS_CLASS_MAP[task.status]
                                                }
                                                >
                                                {TASK_STATUS_TEXT_MAP[task.status]}
                                                </span>                           
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg text-white">Task Priority</label>
                                        <p className="mt-1 text-white">

                                        <span 
                                                className={
                                                    "px-2 py-1 rounded text-white "+ 
                                                    TASK_PRIORITY_CLASS_MAP[task.priority]
                                                }
                                                >
                                                {TASK_PRIORITY_TEXT_MAP[task.priority]}
                                                </span>                           
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                    <label className="font-bold text-lg text-white">Created By</label>
                                    <p className="mt-1 text-white">{task.createdBy.name}</p>  
                                    </div>
                                </div>
                            <div>
                                <div className="mt-4">
                                    <label className="font-bold text-lg text-white">Due Date</label>
                                    <p className="mt-1 text-white">{task.due_date}</p>                             
                                </div>
                                <div className="mt-4">
                                    <label className="font-bold text-lg text-white">Created Date</label>
                                    <p className="mt-1 text-white">{task.created_at}</p>                             
                                </div>
                                <div className="mt-4">
                                    <label className="font-bold text-lg text-white">Updated By</label>
                                    <p className="mt-1 text-white">{task.updatedBy.name}</p>                             
                                </div>
                                <div className="mt-4">
                                    <label className="font-bold text-lg text-white">Project</label>
                                    <p className="mt-1">
                                        <Link href={route('project.show',task.project.id)}
                                        className="hover:underline">
                                        {task.project.name}
                                        </Link>
                                        </p>                             
                                </div>
                                <div className="mt-4">
                                    <label className="font-bold text-lg text-white">Assigned User</label>
                                    <p className="mt-1 text-white">{task.assignedUser.name}</p>                             
                                </div>
                            </div>
                            </div>
                            <div className="mt-4">
                                <label className="font-bold text-lg text-white"> Task Description</label>
                                <p className="mt-1 text-white">{task.description}</p>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                           
        
        </AuthenticatedLayout>
    )
}