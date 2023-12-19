import {FaPizzaSlice,FaPastafarianism} from 'react-icons/fa'
import {GiCow,GiChickenOven  } from 'react-icons/gi'
import {TbBrandCakephp ,TbMeat } from 'react-icons/tb'
import { NavLink} from 'react-router-dom'
import styled from 'styled-components'

function Category() {
  return (
    <main id='category'>
    <Navlink to={'/cuisine/SeaFood'}    >
        <div>
        <FaPizzaSlice />
        <h4 className='text-xs'>SeaFood</h4>
        </div> 
    </Navlink >

    <Navlink to={'/cuisine/Pasta'}  >
        <div >
        <FaPastafarianism />
        <h4 className='text-xs'>Pasta</h4>
        </div>
    </Navlink >

    <Navlink to={'/cuisine/Dessert'}  >
        <div>
            <TbBrandCakephp/>
            <h4 className='text-xs'>Dessert</h4>
        </div>
    </Navlink >

    <Navlink to={'/cuisine/Beef'}  >
        <div>
        <GiCow/>
        <h4 className='text-xs'>Beef</h4>
        </div>
    </Navlink >

    <Navlink to={'/cuisine/Chicken'}  >
        <div>
        <GiChickenOven/>
        <h4 className='text-xs'>Chicken</h4>
        </div>
    </Navlink >

    <Navlink to={'/cuisine/Lamb'}  >
        <div>
            <TbMeat/>
            <h4 className='text-xs'>Lamb</h4>
        </div>
    </Navlink >
    </main>
    
  )
}


const Navlink = styled(NavLink) `
div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    background: linear-gradient(35deg , #EA580C, #a86f32 );
    cursor: pointer;
    color: #fff;
}
`

export default Category