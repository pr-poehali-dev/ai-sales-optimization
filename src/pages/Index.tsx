import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeTab, setActiveTab] = useState('dialog');

  const features = [
    {
      icon: 'Bot',
      title: 'ИИ дожимает лидов в WhatsApp, Telegram, Авито и на сайте',
      description: 'Автоматическая квалификация и первичная обработка заявок 24/7'
    },
    {
      icon: 'Headphones',
      title: 'ОКК проверяет все звонки, выявляет ошибки, даёт обратную связь',
      description: '100% звонков под контролем с детальной аналитикой'
    },
    {
      icon: 'FileText',
      title: 'Сценарии пишем мы сами — по вашим продуктам, воронке и этапам сделки',
      description: 'Индивидуальные скрипты от опытного директора по продажам'
    },
    {
      icon: 'Settings',
      title: 'Не просто "бот", а цифровой РОП, настроенный директором по продажам',
      description: 'Полная система автоматизации отдела продаж'
    }
  ];

  const benefits = [
    {
      icon: 'TrendingUp',
      title: 'До +34% к выручке',
      subtitle: 'без найма и без хаоса'
    },
    {
      icon: 'MessageSquare',
      title: 'Через 7 дней',
      subtitle: 'вы увидите, где реально утекают деньги'
    },
    {
      icon: 'Target',
      title: 'Работает в Bitrix24',
      subtitle: 'или вашей CRM — без боли внедрения'
    }
  ];

  const industries = [
    {
      emoji: '🏡',
      title: 'Недвижимость',
      description: 'Заявки с сайта, авито, соцсетей → квалификация, показ, сделка',
      result: '+6 продаж в месяц без роста бюджета'
    },
    {
      emoji: '🚗',
      title: 'Автоуслуги / СТО',
      description: 'Клиенты пишут и звонят → ИИ дожимает на запись, контроль звонков',
      result: '0 потерянных лидов за месяц работы'
    },
    {
      emoji: '📞',
      title: 'Онлайн-образование',
      description: 'Много заявок → важно дожимать быстро и системно',
      result: 'Рост конверсии с 7,3% до 12,1%'
    },
    {
      emoji: '🛠',
      title: 'Услуги',
      description: 'Отвечать вовремя = выигрывать клиента',
      result: 'Конверсия выросла с 12% до 19%'
    },
    {
      emoji: '🧑‍💻',
      title: 'SaaS / B2B продажи',
      description: 'Длинный цикл, нужна чёткая квалификация, не терять лида',
      result: 'Цикл сделки сократился на 14 дней'
    },
    {
      emoji: '📦',
      title: 'E-commerce',
      description: 'Возврат клиентов, дожим, upsell',
      result: 'Время ответа с 45 минут до 3 минут'
    }
  ];

  const cases = [
    {
      title: 'Недвижимость (B2C)',
      problem: 'Менеджеры не успевали обрабатывать заявки, теряли клиентов',
      solution: 'Подключили ИИ-продавца (WhatsApp, Авито, Telegram)',
      results: [
        'Конверсия выросла с 8% до 13%',
        '0 потерянных заявок',
        '+6 сделок ежемесячно без доп. бюджета'
      ]
    },
    {
      title: 'Онлайн-образование',
      problem: 'Высокий поток входящих (до 150 лидов в день)',
      solution: 'Запустили ИИ-агента в WhatsApp с контролем звонков',
      results: [
        'Конверсия с 7,3% до 12,1% за 21 день',
        '+31% к выручке без новых сотрудников',
        'Снижены потери на этапе квалификации на 42%'
      ]
    },
    {
      title: 'Автосервис премиум-класса',
      problem: 'Пропускали до 30% звонков, менеджеры не перезванивали',
      solution: 'Внедрили ИИ в Telegram и WhatsApp + ОКК',
      results: [
        'Заполнение расписания выросло на 27%',
        'Потери заявок снижены до 0%',
        '100% звонков под контролем'
      ]
    }
  ];

  const team = [
    {
      icon: 'Briefcase',
      title: 'Директор по продажам',
      description: 'Опыт управления: 6 РОПов, 80+ менеджеров'
    },
    {
      icon: 'Bot',
      title: 'ИИ-инженер',
      description: 'Настройка диалогов, интеграция с CRM'
    },
    {
      icon: 'Target',
      title: 'Менеджер сопровождения',
      description: 'Контроль показателей, связь в Telegram'
    },
    {
      icon: 'Users',
      title: 'Руководитель проекта',
      description: 'Ведёт проект до стабильного роста'
    }
  ];

  const faq = [
    {
      question: 'У нас есть CRM. Зачем ещё ИИ и контроль?',
      answer: 'CRM — это архив. Она не дожимает, не контролирует, не продаёт. Мы превращаем хаос CRM в систему действий.'
    },
    {
      question: 'А вдруг ИИ будет косячить и испортит впечатление?',
      answer: 'ИИ работает по скриптам, которые пишет директор по продажам. Он ошибается меньше, чем любой новичок.'
    },
    {
      question: 'Мы уже пробовали ИИ — не сработало.',
      answer: 'Скорее всего, вам настроили шаблон. Мы погружаемся в продукт, цикл сделки и делаем под вас.'
    },
    {
      question: 'Это дорого.',
      answer: 'А сколько стоит один потерянный клиент? Мы не добавляем расход — мы закрываем утечку денег.'
    }
  ];

  const pricingPlans = [
    {
      industry: 'Недвижимость',
      volume: '150 заявок/мес',
      setup: '90 000 ₽',
      monthly: '50 000 ₽/мес',
      features: ['ИИ-продавец', 'Полный контроль', 'Интеграция с Авито']
    },
    {
      industry: 'Автосервис',
      volume: '80 заявок/мес',
      setup: '60 000 ₽',
      monthly: '30 000 ₽/мес',
      features: ['WhatsApp + звонки', 'Частичный контроль', 'Запись клиентов']
    },
    {
      industry: 'Онлайн-школа',
      volume: '200+ заявок/мес',
      setup: '120 000 ₽',
      monthly: '60 000 ₽/мес',
      features: ['Полный цикл', 'Коррекция скриптов', 'Детальная аналитика']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
            Ваши менеджеры сливают клиентов —<br />
            <span className="text-blue-600">а вы даже не знаете об этом</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto animate-fade-in">
            ИИ-продавец + контроль 100% звонков находят и закрывают точки потерь<br />
            в вашем отделе продаж уже через <span className="font-semibold text-blue-600">7 дней</span>
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="text-left hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon name={feature.icon} className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4 mb-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold">
              Попробовать бесплатно на своих заявках
            </Button>
            <p className="text-sm text-gray-500">
              14 дней пилота. Реальные скрипты. Ваши данные.<br />
              Вы платите — только если увидите эффект.
            </p>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Почему "всё уже есть" — не значит, что продажи под контролем
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              У вас может быть CRM, отдел контроля и менеджеры со "скриптом" —<br />
              но без системы это просто декорации.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="X" className="w-5 h-5 text-red-600" />
                    Как обычно
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="AlertCircle" className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-900">Скрипт "где-то есть"</p>
                      <p className="text-red-700 text-sm">менеджеры импровизируют</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="AlertCircle" className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-900">CRM — склад данных</p>
                      <p className="text-red-700 text-sm">не система действий</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="AlertCircle" className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-900">Контроль — 3 звонка из 100</p>
                      <p className="text-red-700 text-sm">выборочно и поверхностно</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="AlertCircle" className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-900">Непонятно, кто сливает</p>
                      <p className="text-red-700 text-sm">и где именно</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-green-600" />
                    Как с нами
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-900">Скрипт прописан</p>
                      <p className="text-green-700 text-sm">и встроен в ИИ + CRM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-900">CRM + ИИ = система</p>
                      <p className="text-green-700 text-sm">действий и контроля</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-900">Контроль — 100% звонков</p>
                      <p className="text-green-700 text-sm">и чатов, по чек-листу</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-900">Каждый этап сделки</p>
                      <p className="text-green-700 text-sm">под лупой</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Card className="max-w-2xl mx-auto bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <Icon name="Lightbulb" className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-4">Мы не просто даём ИИ</h3>
                  <p className="text-gray-700 mb-4">
                    Сначала наш директор по продажам погружается в ваш бизнес, прописывает:
                  </p>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li>– правильную логику квалификации</li>
                    <li>– этапы воронки</li>
                    <li>– формулировки, которые закрывают</li>
                  </ul>
                  <p className="text-gray-700 mt-4">и только потом запускается ИИ.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* System Components */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ИИ-продавец + Контроль 100% звонков = полный цикл без потерь
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Вы получаете не «технологию», а систему продаж под ключ —<br />
              от первого касания до финального контроля.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Bot" className="w-6 h-6 text-blue-600" />
                  ИИ-Агент по продажам
                </CardTitle>
                <p className="text-sm text-gray-600">(работает 24/7 на входящих и прогревает теплых)</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="MessageCircle" className="w-4 h-4 text-blue-600 mt-0.5" />
                    <span className="text-sm">Общается с клиентами в WhatsApp, Telegram, Авито, на сайте</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="FileText" className="w-4 h-4 text-blue-600 mt-0.5" />
                    <span className="text-sm">Ведёт по скрипту — с нужными аргументами и вопросами</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Users" className="w-4 h-4 text-blue-600 mt-0.5" />
                    <span className="text-sm">Квалифицирует, фиксирует в CRM, передаёт менеджеру только "тёплых"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Clock" className="w-4 h-4 text-blue-600 mt-0.5" />
                    <span className="text-sm">Автоматически отвечает, не забывает, не ошибается</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Headphones" className="w-6 h-6 text-purple-600" />
                  Отдел Контроля Качества (ОКК)
                </CardTitle>
                <p className="text-sm text-gray-600">(заменяет РОПа и "прослушки" на ручнике)</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Search" className="w-4 h-4 text-purple-600 mt-0.5" />
                    <span className="text-sm">Проверяет 100% звонков и чатов — не выборочно, а всё</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckSquare" className="w-4 h-4 text-purple-600 mt-0.5" />
                    <span className="text-sm">Работает по чек-листу: выявляет ошибки, недожим, слабые зоны</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="BarChart" className="w-4 h-4 text-purple-600 mt-0.5" />
                    <span className="text-sm">Строит отчёты по каждому менеджеру и этапу воронки</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="MessageSquare" className="w-4 h-4 text-purple-600 mt-0.5" />
                    <span className="text-sm">Даёт обратную связь РОПу и сотрудникам — с фактами, а не догадками</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-3xl mx-auto bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-4">Пример выгоды</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">134</div>
                    <div className="text-sm text-gray-600">заявки обработано</div>
                    <div className="text-xs text-gray-500">→ 41 сильный лид</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">12</div>
                    <div className="text-sm text-gray-600">ошибок выявлено</div>
                    <div className="text-xs text-gray-500">на 2 этапе</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">13.2%</div>
                    <div className="text-sm text-gray-600">конверсия</div>
                    <div className="text-xs text-gray-500">с 8% за 3 недели</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Industries */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Если у вас есть входящие заявки, менеджеры и продажи — это уже для вас
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Неважно, B2B вы или B2C. Мы внедряли ИИ-продавцов и контроль качества в десятки ниш —<br />
              результат один: продажи становятся управляемыми, а потери — видимыми.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">{industry.emoji}</span>
                    {industry.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{industry.description}</p>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {industry.result}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Cases */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Мы не просто внедряем. Мы даём рост в цифрах.
            </h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cases.map((caseItem, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg">{caseItem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Задача:</h4>
                      <p className="text-sm text-gray-600">{caseItem.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Решение:</h4>
                      <p className="text-sm text-gray-600">{caseItem.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Результат:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {caseItem.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start gap-2">
                            <Icon name="Check" className="w-4 h-4 text-green-600 mt-0.5" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">+34%</div>
                    <div className="text-sm text-gray-600">к выручке без роста команды</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">100%</div>
                    <div className="text-sm text-gray-600">звонков под контролем</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">7</div>
                    <div className="text-sm text-gray-600">дней → первый эффект</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Все кейсы — на реальных данных. Хотите посмотреть, как это сработает у вас?
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Demo Interface */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ИИ, который продаёт. Контроль, который реально слушает.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Не на словах — покажем прямо сейчас.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="dialog">ИИ-диалог</TabsTrigger>
                <TabsTrigger value="control">Контроль звонков</TabsTrigger>
                <TabsTrigger value="reports">Отчёт для РОПа</TabsTrigger>
              </TabsList>
              
              <TabsContent value="dialog" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="MessageCircle" className="w-5 h-5" />
                      WhatsApp диалог
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-100 p-4 rounded-lg space-y-3">
                      <div className="flex justify-end">
                        <div className="bg-green-500 text-white p-2 rounded-lg max-w-xs">
                          Здравствуйте! Интересует ваша услуга
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-white p-2 rounded-lg max-w-xs">
                          Привет! Меня зовут Анна, я помогаю с подбором решений. Расскажите, пожалуйста, какая задача у вас сейчас?
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-green-500 text-white p-2 rounded-lg max-w-xs">
                          Нужно автоматизировать продажи
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-white p-2 rounded-lg max-w-xs">
                          Понятно! А сколько заявок у вас в среднем в месяц? И какая сейчас конверсия?
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name="Target" className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium">Статус: Квалифицирован</span>
                        </div>
                        <div className="text-xs text-gray-600">
                          Потребность: Автоматизация • Объём: Уточняется • Готовность: Высокая
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="control" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Headphones" className="w-5 h-5" />
                      Анализ звонка
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Расшифровка звонка #1247</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Менеджер: Добрый день! Меня зовут Алексей...<br/>
                          Клиент: Здравствуйте, я оставлял заявку на сайте...
                        </p>
                        <div className="flex gap-2 text-xs">
                          <Badge variant="outline">Длительность: 4:32</Badge>
                          <Badge variant="outline">Дата: 12.07.2024</Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Icon name="X" className="w-4 h-4 text-red-500" />
                          <span className="text-sm">Не уточнил потребность клиента</span>
                          <Badge variant="destructive">Ошибка</Badge>
                        </div>
                        <div className="flex items-center gap-3">
                          <Icon name="Check" className="w-4 h-4 text-green-500" />
                          <span className="text-sm">Представился и назвал компанию</span>
                          <Badge variant="default">Хорошо</Badge>
                        </div>
                        <div className="flex items-center gap-3">
                          <Icon name="X" className="w-4 h-4 text-red-500" />
                          <span className="text-sm">Не назвал цену, когда клиент спросил</span>
                          <Badge variant="destructive">Ошибка</Badge>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-medium text-yellow-800 mb-2">Рекомендации:</h4>
                        <ul className="text-sm text-yellow-700 space-y-1">
                          <li>• Добавить блок выявления потребностей в скрипт</li>
                          <li>• Подготовить ответы на вопросы о цене</li>
                          <li>• Провести дополнительное обучение по работе с возражениями</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reports" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="BarChart" className="w-5 h-5" />
                      Аналитика отдела
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">85%</div>
                          <div className="text-sm text-gray-600">Качество скрипта</div>
                          <Progress value={85} className="mt-2" />
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">12.3%</div>
                          <div className="text-sm text-gray-600">Конверсия</div>
                          <Progress value={65} className="mt-2" />
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">4.2</div>
                          <div className="text-sm text-gray-600">Средний балл</div>
                          <Progress value={84} className="mt-2" />
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-3">Эффективность менеджеров</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Алексей И.</span>
                            <div className="flex items-center gap-2">
                              <Progress value={90} className="w-20" />
                              <span className="text-sm">90%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Мария К.</span>
                            <div className="flex items-center gap-2">
                              <Progress value={75} className="w-20" />
                              <span className="text-sm">75%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Дмитрий С.</span>
                            <div className="flex items-center gap-2">
                              <Progress value={60} className="w-20" />
                              <span className="text-sm">60%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-800 mb-2">Автоматические рекомендации:</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Дмитрий С. — дополнительное обучение по блоку возражений</li>
                          <li>• Общая проблема: слабо работают с ценовыми вопросами</li>
                          <li>• Рекомендуем обновить скрипт — добавить блок работы с бюджетом</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Не "бот от студента". Это команда, которая строила отделы на 80+ человек.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              ИИ — это просто инструмент. Главное — кто его настраивает и под какие цели.<br />
              Мы не "внедряем технологию". Мы перестраиваем ваш отдел продаж, устраняя потери.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={member.icon} className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{member.title}</h3>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Что вы сейчас думаете — мы уже слышали. И вот ответы.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Вы не покупаете ИИ. Вы запускаете систему, которая закрывает утечки.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Все говорят "мы вам всё автоматизируем". Мы сначала погружаемся в ваш бизнес,<br />
              прописываем скрипты, квалификацию и воронку. Только потом — настраиваем ИИ и контроль.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="border-2 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl">{plan.industry}</CardTitle>
                  <p className="text-gray-600">{plan.volume}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{plan.setup}</div>
                      <div className="text-sm text-gray-600">Настройка и запуск</div>
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-blue-600">{plan.monthly}</div>
                      <div className="text-sm text-gray-600">Ежемесячная поддержка</div>
                    </div>
                    <Separator />
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <Icon name="Check" className="w-4 h-4 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto bg-yellow-50 border-yellow-200">
              <CardContent className="pt-6">
                <Icon name="Target" className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-4">Опция пилота</h3>
                <p className="text-gray-700 mb-4">
                  Запустим пилот на 14 дней на ваших лидах — покажем, как работает на практике.
                </p>
                <p className="font-semibold text-yellow-800">
                  Оплата — только если увидите результат.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Вы можете продолжать терять клиентов —<br />
            или дать ИИ 14 дней, чтобы это остановить
          </h2>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            За 14 дней мы покажем: где теряются деньги, как их вернуть,<br />
            и как продавать стабильно, без гениальных менеджеров.
          </p>

          <div className="max-w-md mx-auto space-y-4">
            <Input 
              placeholder="Ваше имя" 
              className="bg-white text-gray-900"
            />
            <Input 
              placeholder="Телефон" 
              className="bg-white text-gray-900"
            />
            <Input 
              placeholder="Сфера бизнеса" 
              className="bg-white text-gray-900"
            />
            <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-gray-100">
              Запустить пилот и увидеть эффект за 14 дней
            </Button>
          </div>

          <p className="text-sm mt-4 opacity-90">
            Без спама и менеджеров-наездников.<br />
            Работает директор по продажам, который построил отделы на 80+ менеджеров.
          </p>
        </div>
      </div>
    </div>
  );
}