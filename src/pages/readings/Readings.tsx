import { Link } from 'react-router-dom'

export default function Readings() {
  return (
    <div>
        <h1>Reading Page</h1>
        <p>This is the Reading Page</p>
        <div className='flex flex-col justify-center'>
            <Link to='/readings/1' className='m-1 p-1 border- bg-slate-200'>Ir para readings 1</Link>
            <Link to='/readings/3' className='m-1 p-1 border- bg-slate-400'>Ir para readings 3</Link>
        </div>
    </div>
  )
}
