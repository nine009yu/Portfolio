
const SingleContactSocial = ({Icon,link}) => {
  return (
    <div className='text-4xl h-12 w-12 border border-orange text-orange rounded-full p-7 flex items-center justify-center '>
      <a href={link} target="_blank" className='cursor-pointer '><Icon/></a>
    </div>
  )
}

export default SingleContactSocial
