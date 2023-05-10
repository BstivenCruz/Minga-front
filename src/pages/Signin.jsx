import register from '../assets/register.svg'

export default function Signin() {
  return (
    <div className='flex w-[100vw] border border-red-600'>
      <div className='w-1/2 object-cover'>
        <img  className=' object-cover h-screen w-screen' src={register}/>
      </div>
      <div>
        <h1>Welcome back!</h1>
        <p>
          Discover manga, manhua and manhwa, track your progress, have fun, read
          manga.
        </p>
        <form>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="password" />
          <input type="submit" />
        </form>
        <p>you don`t have an account yet? <span>Sign up</span> </p>
        <p>Go back to <span>home page</span> </p>

      </div>
    </div>
  );
}
