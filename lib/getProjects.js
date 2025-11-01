import { db } from '../lib/firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

export async function getProjects() {
  // Create a query to order posts by timestamp and limit to 10
  const q = query(collection(db, "projects"));
  
  const querySnapshot = await getDocs(q);
  const projects = [];
  
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    projects.push({ id: doc.id, ...doc.data() });
  });
  
  return projects;
}

export default getProjects;