import { Suspense } from 'react';
import Imagenes from './imagenes';
import LoadingImages from './LoadingImages';

export default function App() {
  return (
    <div>
      <h1>Ander</h1>
      <Suspense fallback={<LoadingImages/>}>
        <Imagenes></Imagenes>
      </Suspense>
    </div>
  )
}
