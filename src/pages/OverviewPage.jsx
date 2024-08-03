import React from 'react'
import Header from '../components/common/Header'
import Statcard from '../components/common/Statcard'
import { motion } from 'framer-motion'
import { BarChart2, ShoppingBag, Users, Zap } from 'lucide-react'
import SalesOverviewChart from '../components/overview/SalesOverviewChart'
import SalesChannelChart from '../components/overview/SalesChannelChart'
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart'

const OverviewPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title={'Overview'}></Header>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
        >
          <Statcard name='Total Sales' icon={Zap} value='$12,345' color='#6366F1' />
          <Statcard name='New Users' icon={Users} value='1,234' color='#8B5CF6' />
          <Statcard name='Total Products' icon={ShoppingBag} value='567' color='#EC4899' />
          <Statcard name='Conversion Rate' icon={BarChart2} value='12.5%' color='#10B981' />
        </motion.div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
          
        </div>
      </main>
    </div>
  )
}

export default OverviewPage