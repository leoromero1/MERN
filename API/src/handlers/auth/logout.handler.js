export const logoutHandler = (req, res) =>{
  res.cookie("token", "", {
    expires: new Date(0)
  })

  return res.status(200).send( "closed session")
}