import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { 
  Bot, User, Trophy, DollarSign, TrendingUp, TrendingDown, 
  Eye, EyeOff, Bell, Settings, LogOut, Home, BarChart3, 
  Wallet, Users, Search, Filter, Calendar, ArrowUpRight,
  ArrowDownRight, Play, Pause, RotateCcw, Zap, Target, Activity
} from 'lucide-react';

const TradeBeatMockups = () => {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [showPassword, setShowPassword] = useState(false);

  // Mock data
  const performanceData = [
    { day: 'Mon', user: 100000, ai: 100000 },
    { day: 'Tue', user: 98500, ai: 101200 },
    { day: 'Wed', user: 102300, ai: 99800 },
    { day: 'Thu', user: 99800, ai: 102100 },
    { day: 'Fri', user: 101500, ai: 103450 },
    { day: 'Sat', user: 103200, ai: 102800 },
    { day: 'Sun', user: 105400, ai: 103450 }
  ];

  const assets = [
    { symbol: 'BTC', name: 'Bitcoin', price: 67234.50, change: 2.34, changeAmount: 1543.21 },
    { symbol: 'ETH', name: 'Ethereum', price: 3456.78, change: -1.23, changeAmount: -43.12 },
    { symbol: 'AAPL', name: 'Apple Inc.', price: 189.45, change: 0.87, changeAmount: 1.63 },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 234.56, change: -2.45, changeAmount: -5.89 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 156.78, change: 1.56, changeAmount: 2.41 }
  ];

  const trades = [
    { id: 1, symbol: 'BTC', type: 'BUY', amount: 0.5, price: 67000, time: '10:30 AM', profit: 117.25 },
    { id: 2, symbol: 'AAPL', type: 'SELL', amount: 25, price: 188, time: '09:15 AM', profit: -36.25 },
    { id: 3, symbol: 'ETH', type: 'BUY', amount: 2.1, price: 3400, time: '08:45 AM', profit: 119.28 }
  ];

  const leaderboard = [
    { rank: 1, name: 'AI Assistant', avatar: '🤖', return: 4.32, balance: 104320, badge: 'ai' },
    { rank: 2, name: 'You', avatar: '👤', return: 3.24, balance: 103240, badge: 'user' },
    { rank: 3, name: 'CryptoKing', avatar: '👑', return: 2.87, balance: 102870, badge: null },
    { rank: 4, name: 'StockMaster', avatar: '📈', return: 1.45, balance: 101450, badge: null },
    { rank: 5, name: 'TradingBot2024', avatar: '🤖', return: 0.89, balance: 100890, badge: 'ai' }
  ];

  // Screen Components
  const LoginScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-6">
      <div className="bg-gray-900/90 backdrop-blur-xl rounded-3xl p-10 w-full max-w-md border border-gray-700/50 shadow-2xl">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-lg">
              <Bot className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Beat the AI</h1>
          <p className="text-gray-400 text-lg">Prove human intuition beats algorithms</p>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              placeholder="your@email.com"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent pr-12 transition-all"
                placeholder="••••••••"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-cyan-400 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          <button
            onClick={() => setCurrentScreen('dashboard')}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-cyan-500/25"
          >
            Start Trading Challenge
          </button>
          
          <div className="text-center pt-4">
            <p className="text-gray-500 text-sm">New to trading?</p>
            <button className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
              Get $100k virtual funds
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const DashboardScreen = () => (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-900/95 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl font-bold text-white">Beat the AI</h1>
              </div>
              <nav className="hidden md:flex space-x-1">
                <button className="px-4 py-2 bg-gray-800 text-cyan-400 rounded-lg font-medium">Dashboard</button>
                <button className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg font-medium transition-all">Trading</button>
                <button className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg font-medium transition-all">Portfolio</button>
                <button className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg font-medium transition-all">Leaderboard</button>
              </nav>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-sm text-gray-400">Portfolio Value</p>
                <p className="text-xl font-bold text-emerald-400">$105,432</p>
              </div>
              <Bell className="w-6 h-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Performance Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Activity className="w-5 h-5 mr-3 text-cyan-400" />
                Performance vs AI
              </h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1.5 bg-cyan-500 text-white rounded-lg text-sm font-medium">7D</button>
                <button className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors">30D</button>
                <button className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors">90D</button>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="day" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '12px',
                      color: '#F9FAFB'
                    }} 
                  />
                  <Line type="monotone" dataKey="user" stroke="#06B6D4" strokeWidth={3} name="Your Portfolio" />
                  <Line type="monotone" dataKey="ai" stroke="#EF4444" strokeWidth={3} name="AI Portfolio" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
                  <div>
                    <p className="text-gray-400 text-sm">Current Rank</p>
                    <p className="text-3xl font-bold text-white">#2</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Weekly Return</p>
                  <p className="text-lg font-bold text-emerald-400">+5.43%</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-3 border border-yellow-500/30">
                <p className="text-yellow-300 text-sm flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  Only 1.1% behind the AI
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button 
                  onClick={() => setCurrentScreen('trading')}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-medium hover:from-emerald-600 hover:to-teal-700 transition-all transform hover:scale-[1.02]"
                >
                  Quick Trade
                </button>
                <button 
                  onClick={() => setCurrentScreen('portfolio')}
                  className="w-full bg-gray-700 text-white py-3 rounded-xl font-medium hover:bg-gray-600 transition-all"
                >
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Market Overview */}
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Market Overview</h3>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input 
                  placeholder="Search assets..."
                  className="bg-gray-700/50 border border-gray-600/50 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {assets.map((asset) => (
              <div key={asset.symbol} className="bg-gray-700/30 rounded-xl p-4 hover:bg-gray-700/50 transition-all cursor-pointer border border-gray-600/30 hover:border-cyan-500/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-white text-lg">{asset.symbol}</span>
                  <span className={`flex items-center text-sm font-medium ${
                    asset.change >= 0 ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {asset.change >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                    {asset.change.toFixed(2)}%
                  </span>
                </div>
                <p className="text-2xl font-bold text-white mb-1">${asset.price.toLocaleString()}</p>
                <p className="text-xs text-gray-400 mb-2">{asset.name}</p>
                <p className={`text-sm font-medium ${asset.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {asset.change >= 0 ? '+' : ''}${asset.changeAmount.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
            <h3 className="text-xl font-bold text-white mb-6">Recent Trades</h3>
            <div className="space-y-4">
              {trades.map((trade) => (
                <div key={trade.id} className="flex items-center justify-between bg-gray-700/30 rounded-xl p-4 border border-gray-600/30">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-4 ${
                      trade.type === 'BUY' ? 'bg-emerald-400' : 'bg-red-400'
                    }`}></div>
                    <div>
                      <p className="font-semibold text-white text-lg">{trade.symbol}</p>
                      <p className="text-sm text-gray-400">{trade.amount} @ ${trade.price.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">{trade.time}</p>
                    <p className={`font-bold text-lg ${trade.profit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {trade.profit >= 0 ? '+' : ''}${trade.profit.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
            <h3 className="text-xl font-bold text-white mb-6">AI Strategy Insights</h3>
            <div className="space-y-4">
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <Bot className="w-5 h-5 text-cyan-400 mr-2" />
                  <span className="font-semibold text-cyan-300">Current Strategy</span>
                </div>
                <p className="text-gray-300 text-sm">Momentum + Mean Reversion</p>
                <p className="text-xs text-gray-400 mt-1">Confidence: 87%</p>
              </div>
              
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400 mr-2" />
                  <span className="font-semibold text-emerald-300">Recent Move</span>
                </div>
                <p className="text-gray-300 text-sm">Bought 0.3 BTC at $66,800</p>
                <p className="text-xs text-gray-400 mt-1">Technical breakout detected</p>
              </div>
              
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <Target className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="font-semibold text-yellow-300">Performance Gap</span>
                </div>
                <p className="text-gray-300 text-sm">AI leads by $1,188</p>
                <p className="text-xs text-gray-400 mt-1">Focus on risk management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TradingScreen = () => (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-900/95 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl font-bold text-white">Beat the AI</h1>
              </div>
              <nav className="hidden md:flex space-x-1">
                <button onClick={() => setCurrentScreen('dashboard')} className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg font-medium transition-all">Dashboard</button>
                <button className="px-4 py-2 bg-gray-800 text-cyan-400 rounded-lg font-medium">Trading</button>
                <button onClick={() => setCurrentScreen('portfolio')} className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg font-medium transition-all">Portfolio</button>
                <button onClick={() => setCurrentScreen('leaderboard')} className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg font-medium transition-all">Leaderboard</button>
              </nav>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-sm text-gray-400">Buying Power</p>
                <p className="text-xl font-bold text-emerald-400">$32,456</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Trading Panel */}
          <div className="lg:col-span-1 bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
            <h2 className="text-xl font-bold text-white mb-6">Place Order</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Asset</label>
                <select className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all">
                  <option>BTC - Bitcoin</option>
                  <option>ETH - Ethereum</option>
                  <option>AAPL - Apple</option>
                  <option>TSLA - Tesla</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="bg-emerald-500 text-white py-3 rounded-xl font-medium hover:bg-emerald-600 transition-colors">BUY</button>
                <button className="bg-gray-700 text-gray-300 py-3 rounded-xl font-medium hover:bg-gray-600 transition-colors">SELL</button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Order Type</label>
                <select className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all">
                  <option>Market Order</option>
                  <option>Limit Order</option>
                  <option>Stop Loss</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Quantity</label>
                <input 
                  type="number" 
                  placeholder="0.0"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                />
              </div>

              <div className="bg-gray-700/30 rounded-xl p-4 border border-gray-600/30">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Current Price:</span>
                  <span className="text-white font-bold">$67,234.50</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Est. Total:</span>
                  <span className="text-white font-bold">$6,723.45</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Fees:</span>
                  <span className="text-white">$6.72</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all transform hover:scale-[1.02]">
                Place Buy Order
              </button>

              <div className="border-t border-gray-700 pt-4">
                <p className="text-xs text-gray-400 mb-2">AI Recommendation:</p>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3">
                  <p className="text-cyan-300 text-sm flex items-center">
                    <Bot className="w-4 h-4 mr-2" />
                    Consider DCA strategy
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Confidence: 72%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">BTC/USD</h3>
              <div className="flex space-x-2">
                <button className="px-3 py-1.5 bg-cyan-500 text-white rounded-lg text-sm font-medium">1D</button>
                <button className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors">1W</button>
                <button className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors">1M</button>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-white">$67,234.50</span>
                <span className="flex items-center text-emerald-400 font-medium bg-emerald-500/10 px-3 py-1 rounded-lg">
                  <ArrowUpRight className="w-5 h-5 mr-1" />
                  +2.34% (+$1,543.21)
                </span>
              </div>
            </div>

            <div className="h-80 bg-gray-900/50 rounded-xl flex items-center justify-center border border-gray-700/50">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">Interactive Chart Coming Soon</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-6">
              <div className="text-center bg-gray-700/30 rounded-lg p-3">
                <p className="text-xs text-gray-400 mb-1">24h High</p>
                <p className="text-white font-bold">$68,234</p>
              </div>
              <div className="text-center bg-gray-700/30 rounded-lg p-3">
                <p className="text-xs text-gray-400 mb-1">24h Low</p>
                <p className="text-white font-bold">$65,789</p>
              </div>
              <div className="text-center bg-gray-700/30 rounded-lg p-3">
                <p className="text-xs text-gray-400 mb-1">Volume</p>
                <p className="text-white font-bold">2.1B</p>
              </div>
              <div className="text-center bg-gray-700/30 rounded-lg p-3">
                <p className="text-xs text-gray-400 mb-1">Market Cap</p>
                <p className="text-white font-bold">$1.3T</p>
              </div>
            </div>
          </div>

          {/* Order Book & Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Order Book</h3>
              <div className="space-y-2">
                <div className="text-xs text-gray-400 grid grid-cols-2 gap-2 mb-3">
                  <span>Price</span>
                  <span className="text-right">Size</span>
                </div>
                
                {/* Sell orders */}
                {[67250, 67245, 67240, 67238, 67235].map((price, i) => (
                  <div key={price} className="grid grid-cols-2 gap-2 text-sm py-1">
                    <span className="text-red-400 font-medium">${price.toLocaleString()}</span>
                    <span className="text-right text-gray-300">{(0.1 + i * 0.05).toFixed(2)}</span>
                  </div>
                ))}
                
                <div className="border-t border-gray-700 my-3"></div>
                
                {/* Buy orders */}
                {[67230, 67225, 67220, 67215, 67210].map((price, i) => (
                  <div key={price} className="grid grid-cols-2 gap-2 text-sm py-1">
                    <span className="text-emerald-400 font-medium">${price.toLocaleString()}</span>
                    <span className="text-right text-gray-300">{(0.15 + i * 0.03).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Open Orders</h3>
              <div className="text-center text-gray-400 py-8">
                <Pause className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No open orders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PortfolioScreen = () => (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-900/95 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl font-bold text-white">Beat the AI</h1>
              </div>
              <nav className="hidden md:flex space-x-1">
                <button onClick={() => setCurrentScreen('dashboard')} className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg font-medium transition-all">Dashboard</button>
                <button onClick={() => setCurrentScreen('trading')} className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg font-medium transition-all">Trading</button>
                <button className="px-4 py-2 bg-gray-800 text-cyan-400 rounded-lg font-medium">Portfolio</button>
                <button onClick={() => setCurrentScreen('leaderboard')} className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg font-medium transition-all">Leaderboard</button>
              </nav>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-sm text-gray-400">Total Value</p>
                <p className="text-xl font-bold text-emerald-400">$105,432</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Portfolio Value</p>
                <p className="text-2xl font-bold text-white">$105,432</p>
                <p className="text-emerald-400 text-sm">+5.43% (+$5,432)</p>
              </div>
              <Wallet className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Day's Change</p>
                <p className="text-2xl font-bold text-emerald-400">+$1,234</p>
                <p className="text-emerald-400 text-sm">+1.18%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-emerald-400" />
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Cash Balance</p>
                <p className="text-2xl font-bold text-white">$32,456</p>
                <p className="text-gray-400 text-sm">Available to trade</p>
              </div>
              <DollarSign className="w-8 h-8 text-yellow-400" />
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Total Positions</p>
                <p className="text-2xl font-bold text-white">7</p>
                <p className="text-gray-400 text-sm">Active holdings</p>
              </div>
              <BarChart3 className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Holdings */}
          <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Holdings</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1.5 bg-cyan-500 text-white rounded-lg text-sm font-medium">Value</button>
                <button className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors">%</button>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { symbol: 'BTC', name: 'Bitcoin', amount: 0.5, value: 33617.25, change: 2.34, allocation: 31.9 },
                { symbol: 'ETH', name: 'Ethereum', amount: 6.2, value: 21432.84, change: -1.23, allocation: 20.3 },
                { symbol: 'AAPL', name: 'Apple Inc.', amount: 85, value: 16103.25, change: 0.87, allocation: 15.3 },
                { symbol: 'TSLA', name: 'Tesla Inc.', amount: 25, value: 5864.00, change: -2.45, allocation: 5.6 },
                { symbol: 'GOOGL', name: 'Alphabet Inc.', amount: 15, value: 2351.70, change: 1.56, allocation: 2.2 }
              ].map((holding) => (
                <div key={holding.symbol} className="bg-gray-700/30 rounded-xl p-4 hover:bg-gray-700/50 transition-all border border-gray-600/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-sm">{holding.symbol.slice(0, 2)}</span>
                      </div>
                      <div>
                        <p className="font-bold text-white text-lg">{holding.symbol}</p>
                        <p className="text-sm text-gray-400">{holding.name}</p>
                        <p className="text-xs text-gray-500">{holding.amount} {holding.symbol === 'BTC' || holding.symbol === 'ETH' ? 'coins' : 'shares'}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-bold text-white text-lg">${holding.value.toLocaleString()}</p>
                      <p className={`text-sm font-medium ${holding.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {holding.change >= 0 ? '+' : ''}{holding.change.toFixed(2)}%
                      </p>
                      <p className="text-xs text-gray-400">{holding.allocation}% of portfolio</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Analytics */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Allocation</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Crypto</span>
                  <span className="text-white font-bold">52.2%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full" style={{width: '52.2%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Stocks</span>
                  <span className="text-white font-bold">23.1%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full" style={{width: '23.1%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cash</span>
                  <span className="text-white font-bold">24.7%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full" style={{width: '24.7%'}}></div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Total Return</span>
                  <span className="text-emerald-400 font-bold">+5.43%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Max Drawdown</span>
                  <span className="text-red-400 font-bold">-2.1%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sharpe Ratio</span>
                  <span className="text-white font-bold">1.34</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Win Rate</span>
                  <span className="text-emerald-400 font-bold">67%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Avg Trade</span>
                  <span className="text-white font-bold">+$234</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-medium hover:from-emerald-600 hover:to-teal-700 transition-all">
                  Rebalance Portfolio
                </button>
                <button className="w-full bg-gray-700 text-white py-3 rounded-xl font-medium hover:bg-gray-600 transition-all">
                  Export Report
                </button>
                <button className="w-full bg-gray-700 text-white py-3 rounded-xl font-medium hover:bg-gray-600 transition-all">
                  Set Stop Losses
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trade History */}
        <div className="mt-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Recent Transactions</h3>
            <div className="flex items-center space-x-3">
              <Filter className="w-5 h-5 text-gray-400" />
              <button className="text-gray-400 hover:text-cyan-400 transition-colors">Filter</button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-700">
                  <th className="pb-4 text-gray-300 font-medium">Date</th>
                  <th className="pb-4 text-gray-300 font-medium">Asset</th>
                  <th className="pb-4 text-gray-300 font-medium">Type</th>
                  <th className="pb-4 text-gray-300 font-medium">Quantity</th>
                  <th className="pb-4 text-gray-300 font-medium">Price</th>
                  <th className="pb-4 text-gray-300 font-medium">Total</th>
                  <th className="pb-4 text-gray-300 font-medium">P&L</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {[
                  { date: 'Dec 15', asset: 'BTC', type: 'BUY', qty: '0.1', price: '$67,234', total: '$6,723', pnl: '+$234', positive: true },
                  { date: 'Dec 14', asset: 'AAPL', type: 'SELL', qty: '10', price: '$189.45', total: '$1,894', pnl: '+$45', positive: true },
                  { date: 'Dec 14', asset: 'ETH', type: 'BUY', qty: '1.5', price: '$3,456', total: '$5,184', pnl: '-$123', positive: false },
                  { date: 'Dec 13', asset: 'TSLA', type: 'BUY', qty: '5', price: '$234.56', total: '$1,173', pnl: '+$89', positive: true },
                ].map((trade, i) => (
                  <tr key={i} className="border-b border-gray-700/50">
                    <td className="py-4 text-gray-300">{trade.date}</td>
                    <td className="py-4 text-white font-medium">{trade.asset}</td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                        trade.type === 'BUY' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {trade.type}
                      </span>
                    </td>
                    <td className="py-4 text-gray-300">{trade.qty}</td>
                    <td className="py-4 text-white">{trade.price}</td>
                    <td className="py-4 text-white font-medium">{trade.total}</td>
                    <td className="py-4">
                      <span className={`font-medium ${trade.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                        {trade.pnl}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const LeaderboardScreen = () => (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-900/95 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl font-bold text-white">Beat the AI</h1>
              </div>
              <nav className="hidden md:flex space-x-1">
                <button onClick={() => setCurrentScreen('dashboard')} className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg font-medium transition-all">Dashboard</button>
                <button onClick={() => setCurrentScreen('trading')} className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg font-medium transition-all">Trading</button>
                <button onClick={() => setCurrentScreen('portfolio')} className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg font-medium transition-all">Portfolio</button>
                <button className="px-4 py-2 bg-gray-800 text-cyan-400 rounded-lg font-medium">Leaderboard</button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <select className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option>This Week</option>
                <option>This Month</option>
                <option>All Time</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Competition Info */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Weekly Challenge: Beat the AI</h2>
              <p className="text-purple-200">December 9-15, 2024 • $100,000 starting capital</p>
              <div className="flex items-center mt-3">
                <Calendar className="w-5 h-5 text-purple-300 mr-2" />
                <span className="text-purple-300">2 days left</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-purple-200 text-sm">Prize Pool</p>
              <p className="text-3xl font-bold text-white">$50,000</p>
              <p className="text-xs text-purple-300">Virtual rewards & bragging rights</p>
            </div>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* 2nd Place */}
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 order-2 md:order-1">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👤
              </div>
              <div className="w-8 h-8 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-gray-800 font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-white">You</h3>
              <p className="text-gray-400 text-sm">Human Trader</p>
              <div className="mt-4">
                <p className="text-2xl font-bold text-emerald-400">+5.43%</p>
                <p className="text-white">$105,432</p>
              </div>
            </div>
          </div>

          {/* 1st Place */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 backdrop-blur-xl rounded-2xl p-6 order-1 md:order-2">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                🤖
              </div>
              <div className="w-10 h-10 bg-yellow-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-yellow-800" />
              </div>
              <h3 className="text-xl font-bold text-white">AI Assistant</h3>
              <p className="text-yellow-200 text-sm">Neural Network v2.1</p>
              <div className="mt-4">
                <p className="text-3xl font-bold text-yellow-400">+6.89%</p>
                <p className="text-white">$106,890</p>
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 order-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👑
              </div>
              <div className="w-8 h-8 bg-amber-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-amber-800 font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-white">CryptoKing</h3>
              <p className="text-gray-400 text-sm">Human Trader</p>
              <div className="mt-4">
                <p className="text-2xl font-bold text-emerald-400">+4.32%</p>
                <p className="text-white">$104,320</p>
              </div>
            </div>
          </div>
        </div>

        {/* Full Leaderboard */}
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700/50">
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Full Rankings</h3>
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">1,247 participants</span>
                <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-cyan-600 transition-colors font-medium">
                  Join Next Competition
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {leaderboard.map((participant, index) => (
                <div
                  key={participant.rank}
                  className={`flex items-center justify-between p-4 rounded-xl transition-all hover:bg-gray-700/30 border ${
                    participant.name === 'You' ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-gray-700/20 border-gray-600/30'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold ${
                      participant.rank === 1 ? 'bg-yellow-400 text-yellow-800' :
                      participant.rank === 2 ? 'bg-gray-400 text-gray-800' :
                      participant.rank === 3 ? 'bg-amber-600 text-amber-800' :
                      'bg-gray-600 text-gray-300'
                    }`}>
                      {participant.rank}
                    </div>
                    
                    <div className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-xl bg-gradient-to-r from-cyan-500 to-blue-600">
                      {participant.avatar}
                    </div>
                    
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-bold text-white mr-2">{participant.name}</h4>
                        {participant.badge === 'ai' && (
                          <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs font-medium">AI</span>
                        )}
                        {participant.name === 'You' && (
                          <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs font-medium">YOU</span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm">
                        {participant.badge === 'ai' ? 'Artificial Intelligence' : 'Human Trader'}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className={`text-lg font-bold ${
                      participant.return >= 0 ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {participant.return >= 0 ? '+' : ''}{participant.return.toFixed(2)}%
                    </p>
                    <p className="text-white font-medium">${participant.balance.toLocaleString()}</p>
                  </div>
                </div>
              ))}

              {/* Show more button */}
              <div className="text-center pt-4">
                <button className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                  Show More Rankings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
            <h4 className="text-lg font-bold text-white mb-4">Competition Stats</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Total Participants</span>
                <span className="text-white font-bold">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">AI Traders</span>
                <span className="text-red-400 font-bold">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Human Traders</span>
                <span className="text-cyan-400 font-bold">1,235</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Avg Return</span>
                <span className="text-emerald-400 font-bold">+2.1%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
            <h4 className="text-lg font-bold text-white mb-4">Your Performance</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Rank</span>
                <span className="text-white font-bold">#2 of 1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Percentile</span>
                <span className="text-emerald-400 font-bold">99.8th</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Trades Made</span>
                <span className="text-white font-bold">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Win Rate</span>
                <span className="text-emerald-400 font-bold">65%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
            <h4 className="text-lg font-bold text-white mb-4">Next Competition</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Starts</span>
                <span className="text-white font-bold">Dec 16</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Duration</span>
                <span className="text-white font-bold">7 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Capital</span>
                <span className="text-white font-bold">$100,000</span>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-xl font-medium mt-4 hover:from-purple-600 hover:to-pink-700 transition-all">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Screen Navigation
  const screens = {
    login: LoginScreen,
    dashboard: DashboardScreen,
    trading: TradingScreen,
    portfolio: PortfolioScreen,
    leaderboard: LeaderboardScreen
  };

  const CurrentScreen = screens[currentScreen];

  return (
    <div className="w-full">
      {/* Screen Navigation for Demo */}
      {currentScreen !== 'login' && (
        <div className="fixed top-4 right-4 z-50 bg-gray-900/90 backdrop-blur-lg rounded-xl p-2 flex space-x-2 border border-gray-700">
          <button
            onClick={() => setCurrentScreen('dashboard')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              currentScreen === 'dashboard' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setCurrentScreen('trading')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              currentScreen === 'trading' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'
            }`}
          >
            Trading
          </button>
          <button
            onClick={() => setCurrentScreen('portfolio')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              currentScreen === 'portfolio' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'
            }`}
          >
            Portfolio
          </button>
          <button
            onClick={() => setCurrentScreen('leaderboard')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              currentScreen === 'leaderboard' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'
            }`}
          >
            Leaderboard
          </button>
          <button
            onClick={() => setCurrentScreen('login')}
            className="px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-600/20 font-medium transition-all"
          >
            Logout
          </button>
        </div>
      )}
      
      <CurrentScreen />
    </div>
  );
};

export default TradeBeatMockups;