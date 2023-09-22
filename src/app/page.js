"use client"
import { useEffect, useState } from 'react';
import styles from './page.module.css'
import { redirect } from "next/navigation";
import { checkDataProvider, setWorkGroupId } from './services/HeaderAPI';
import { SESSION_WORKGROUP_ID_KEY } from './data/constants';
import { MuiNavbar } from './components/MuiNavbar';

export default function Home() {

  const [workgroup, setWorkGroup] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem('TOKEN');
    if(!token){
      redirect('/pages/useraccess')
    }

    async function dataprovide(){
      const data = await checkDataProvider(token);
      if(data){
        sessionStorage.setItem('HEADER_ID', data.headerId);

        const workgroup = await setWorkGroupId(data.headerId);
        sessionStorage.setItem(SESSION_WORKGROUP_ID_KEY, workgroup.workGroupId);

        setWorkGroup(sessionStorage.getItem(SESSION_WORKGROUP_ID_KEY));
        
      }
    }

    dataprovide();

    
  }, [])


  return (
    <div>
      <MuiNavbar workgroup={workgroup}/>
      <main className={styles.main}>
        
      </main>
    </div>
    
  )
}
