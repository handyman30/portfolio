'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  TrendingUp, 
  CreditCard, 
  Shield, 
  Users, 
  DollarSign,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  Globe,
  BarChart3,
  ArrowLeft,
  Download,
  Filter,
  Zap,
  MapPin,
  TrendingDown
} from 'lucide-react';

// Mock data generators
const generateTransactionData = () => {
  const baseAmount = 2470000;
  const variance = 50000;
  return baseAmount + (Math.random() - 0.5) * variance;
};

const generatePaymentMethods = () => [
  { name: 'Credit Card', value: 67.2, amount: 1659840, color: '#3B82F6' },
  { name: 'Digital Wallet', value: 23.1, amount: 570570, color: '#10B981' },
  { name: 'Bank Transfer', value: 9.7, amount: 239590, color: '#F59E0B' }
];

const generateRegionalData = () => [
  { region: 'Victoria', percentage: 45.2, amount: 1116440, transactions: 20752, color: '#8B5CF6' },
  { region: 'New South Wales', percentage: 29.8, amount: 736060, transactions: 13674, color: '#06B6D4' },
  { region: 'Queensland', percentage: 15.3, amount: 377910, transactions: 7021, color: '#F97316' },
  { region: 'Others', percentage: 9.7, amount: 239590, transactions: 4445, color: '#84CC16' }
];

const generateRecentTransactions = () => {
  const merchants = ['Coffee Bean Co.', 'Tech Solutions Ltd', 'Green Grocers', 'Fashion Hub', 'Digital Services', 'Local Restaurant'];
  const amounts = [45.80, 234.50, 89.20, 156.70, 67.30, 178.90, 23.45, 345.60];
  
  return Array.from({ length: 8 }, (_, i) => ({
    id: `TXN${Date.now() + i}`,
    merchant: merchants[Math.floor(Math.random() * merchants.length)],
    amount: amounts[Math.floor(Math.random() * amounts.length)],
    status: Math.random() > 0.05 ? 'completed' : 'pending',
    time: new Date(Date.now() - Math.random() * 3600000).toLocaleTimeString(),
    riskScore: Math.floor(Math.random() * 100)
  }));
};

export default function FintechDashboard() {
  const [totalVolume, setTotalVolume] = useState(2470000);
  const [totalTransactions, setTotalTransactions] = useState(45892);
  const [activeMerchants, setActiveMerchants] = useState(1247);
  const [successRate, setSuccessRate] = useState(99.2);
  const [recentTransactions, setRecentTransactions] = useState(generateRecentTransactions());
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');

  // Real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalVolume(prev => prev + Math.random() * 1000);
      setTotalTransactions(prev => prev + Math.floor(Math.random() * 5));
      setActiveMerchants(prev => prev + (Math.random() > 0.7 ? 1 : 0));
      setSuccessRate(prev => 99.0 + Math.random() * 0.5);
      
      // Update transactions occasionally
      if (Math.random() > 0.7) {
        setRecentTransactions(generateRecentTransactions());
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const paymentMethods = generatePaymentMethods();
  const regionalData = generateRegionalData();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Portfolio
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">FinPay Analytics</h1>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">LIVE DEMO</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <select 
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="1h">Last Hour</option>
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
              </select>
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Volume</p>
                <p className="text-3xl font-bold text-gray-900">${(totalVolume / 1000000).toFixed(2)}M</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-sm text-green-600 font-medium">+12.3%</span>
                </div>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Transactions</p>
                <p className="text-3xl font-bold text-gray-900">{totalTransactions.toLocaleString()}</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-sm text-green-600 font-medium">+8.7%</span>
                </div>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Activity className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Merchants</p>
                <p className="text-3xl font-bold text-gray-900">{activeMerchants.toLocaleString()}</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-sm text-green-600 font-medium">+5.2%</span>
                </div>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Success Rate</p>
                <p className="text-3xl font-bold text-gray-900">{successRate.toFixed(1)}%</p>
                <div className="flex items-center mt-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-sm text-green-600 font-medium">Excellent</span>
                </div>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Payment Methods */}
          <motion.div 
            className="lg:col-span-1 bg-white rounded-xl p-6 shadow-sm border border-gray-200"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
            <div className="space-y-4">
              {paymentMethods.map((method, index) => (
                <div key={method.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: method.color }}
                    />
                    <span className="text-sm font-medium text-gray-900">{method.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">{method.value}%</p>
                    <p className="text-xs text-gray-500">${(method.amount / 1000).toFixed(0)}K</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Regional Distribution */}
          <motion.div 
            className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-200"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Distribution</h3>
            <div className="space-y-4">
              {regionalData.map((region, index) => (
                <div key={region.region} className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3 flex-1">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-900 w-32">{region.region}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${region.percentage}%`, 
                          backgroundColor: region.color 
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-right min-w-[80px]">
                    <p className="text-sm font-semibold text-gray-900">{region.percentage}%</p>
                    <p className="text-xs text-gray-500">{region.transactions.toLocaleString()} txns</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent Transactions */}
        <motion.div 
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-green-500" />
              <span className="text-sm text-green-600 font-medium">Live Updates</span>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">Transaction ID</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">Merchant</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">Amount</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">Status</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">Risk Score</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentTransactions.map((transaction, index) => (
                  <motion.tr 
                    key={transaction.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="py-4 text-sm font-mono text-gray-900">{transaction.id}</td>
                    <td className="py-4 text-sm text-gray-900">{transaction.merchant}</td>
                    <td className="py-4 text-sm font-semibold text-gray-900">${transaction.amount}</td>
                    <td className="py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        transaction.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {transaction.status === 'completed' ? (
                          <CheckCircle className="h-3 w-3 mr-1" />
                        ) : (
                          <Clock className="h-3 w-3 mr-1" />
                        )}
                        {transaction.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center space-x-2">
                        <div className={`h-2 w-16 rounded-full ${
                          transaction.riskScore < 30 ? 'bg-green-200' : 
                          transaction.riskScore < 70 ? 'bg-yellow-200' : 'bg-red-200'
                        }`}>
                          <div 
                            className={`h-2 rounded-full ${
                              transaction.riskScore < 30 ? 'bg-green-500' : 
                              transaction.riskScore < 70 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${transaction.riskScore}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">{transaction.riskScore}</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-gray-500">{transaction.time}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Demo Info Banner */}
        <motion.div 
          className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Interactive Fintech Demo</h3>
                <p className="text-gray-600">Real-time payment processing dashboard with live data simulation</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Built with React, TypeScript & Framer Motion</p>
              <p className="text-sm text-gray-500">By Handy Hasan - Senior Software Engineer</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 