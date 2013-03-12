Ext.define('Документы.ПлатежныйОрдерСписаниеДенежныхСредств.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:657px;height:456px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Платежный ордер на списание денежных средств',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:32px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:92px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от',
			style: 'position:absolute;left:174px;top:32px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:192px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:81px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:92px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБанковскийСчет',
			text: 'Банковский счет:',
			style: 'position:absolute;left:336px;top:81px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетОрганизации',
			style: 'position:absolute;left:429px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолучатель',
			text: 'Получатель:',
			style: 'position:absolute;left:8px;top:105px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:92px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБанковскийСчетПолучатель',
			text: 'Банковский счет:',
			style: 'position:absolute;left:336px;top:105px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетКонтрагента',
			style: 'position:absolute;left:429px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Показать/скрыть счета учета',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Клиент-Банк: Создать контрагента',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'КУД и Р...',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:431px;width:657px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				'-',
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасчетныйДокумент',
			style: 'position:absolute;left:92px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасчетныйДокумент',
			text: 'Расч. документ:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:152px;width:641px;height:203px;',
			height: 203,width: 641,
			items:
			[
				{
					title:'ПлатежПоОднойСделке',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:0px;top:0px;width:78px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтавкаНДС',
			text: '% НДС:',
			style: 'position:absolute;left:0px;top:48px;width:78px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДС',
			text: 'Сумма НДС:',
			style: 'position:absolute;left:0px;top:72px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСделка',
			text: 'Сделка:',
			style: 'position:absolute;left:328px;top:0px;width:93px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетов',
			text: 'Сумма <нет валюты>:',
			style: 'position:absolute;left:328px;top:48px;width:93px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетов',
			text: 'Курс:',
			style: 'position:absolute;left:0px;top:25px;width:78px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:187px;top:24px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:421px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетов',
			style: 'position:absolute;left:84px;top:24px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДС',
			style: 'position:absolute;left:84px;top:72px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:421px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДС',
			style: 'position:absolute;left:84px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатья',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:0px;top:120px;width:78px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств',
			style: 'position:absolute;left:84px;top:120px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяПрочие',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:329px;top:48px;width:82px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:84px;top:0px;width:167px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПодбор',
			text: 'Подбор',
			style: 'position:absolute;left:260px;top:0px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:84px;top:96px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:0px;top:97px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаявкаПрочее',
			text: 'Заявка:',
			style: 'position:absolute;left:329px;top:0px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроектПрочие',
			text: 'Проект:',
			style: 'position:absolute;left:329px;top:24px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПланированияПлатежа',
			style: 'position:absolute;left:421px;top:120px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Заявка',
			text: 'Заявка:',
			style: 'position:absolute;left:328px;top:120px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетовПлан',
			style: 'position:absolute;left:420px;top:144px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетовПлан',
			text: 'Курс заявки:',
			style: 'position:absolute;left:328px;top:144px;width:69px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПлатежаПлан',
			style: 'position:absolute;left:420px;top:168px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПлатежаПлан',
			text: 'Сумма платежа по заявке:',
			style: 'position:absolute;left:328px;top:168px;width:90px;height:28px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурсаЗаявки',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:521px;top:144px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетРасчетов',
			text: 'Счет расчетов:',
			style: 'position:absolute;left:327px;top:72px;width:93px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетАвансов',
			text: 'Счет авансов:',
			style: 'position:absolute;left:327px;top:96px;width:93px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентом',
			style: 'position:absolute;left:421px;top:72px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоАвансам',
			style: 'position:absolute;left:421px;top:96px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументРасчетовСКонтрагентом',
			style: 'position:absolute;left:421px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументРасчетовСКонтрагентом',
			text: 'Док. расчетов:',
			style: 'position:absolute;left:328px;top:24px;width:93px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаДокументаПодотчетник',
			text: 'Сумма:',
			style: 'position:absolute;left:330px;top:24px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПогашенияАванса',
			text: 'Срок аванса:',
			style: 'position:absolute;left:330px;top:0px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаявкаПодотчетник',
			text: 'Заявка:',
			style: 'position:absolute;left:330px;top:48px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетовПланПодотчетник',
			text: 'Курс заявки:',
			style: 'position:absolute;left:330px;top:73px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПлатежаПланПодотчетник',
			text: 'Сумма платежа по заявке:',
			style: 'position:absolute;left:330px;top:96px;width:83px;height:28px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетовПодотчетник',
			text: 'Курс:',
			style: 'position:absolute;left:169px;top:24px;width:52px;height:19px;',
		},
					]
				},
				{
					title:'ПлатежПоНесколькимСделкам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:641px;height:152px;',
			height: 152,width: 641,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Договор контрагента',
					width:'100',
				},
				{
					text:'Сделка',
					width:'120',
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'100',
				},
				{
					text:'Сумма платежа',
					width:'100',
				},
				{
					text:'Курс взаиморасчетов',
					width:'80',
				},
				{
					text:'Сумма взаиморасчетов',
					width:'100',
				},
				{
					text:'% НДС',
					width:'54',
				},
				{
					text:'Сумма НДС',
					width:'100',
				},
				{
					text:'Счет учета расчетов с контрагентом',
					width:'100',
				},
				{
					text:'Счет учета расчетов по авансам',
					width:'100',
				},
				{
					text:'Статья движения денежных средств',
					width:'100',
				},
				{
					text:'Заявка на расходование',
					width:'100',
				},
				{
					text:'Проект',
					width:'100',
				},
				{
					text:'Курс взаиморасчетов по документу планирования',
					width:'100',
				},
				{
					text:'Сумма платежа по документу планирования',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:21px;width:294px;height:24px;',
			items:
			[
				{
					text:'&Изменить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Переместить вверх',
				},
				'-',
				{
					text:'&Переместить вниз',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Подбор',
				},
				'-',
				{
					text:'&Добавить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИтогоСписок',
			text: 'Итого платежей по списку:',
			style: 'position:absolute;left:328px;top:21px;width:313px;height:19px;',
		},
					]
				},
				{
					title:'ПлатежПрочие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредствПрочие',
			style: 'position:absolute;left:421px;top:48px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПланированияПлатежаПрочие',
			style: 'position:absolute;left:421px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроектПрочие',
			style: 'position:absolute;left:421px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчет',
			text: 'Счет:',
			style: 'position:absolute;left:0px;top:0px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчета',
			style: 'position:absolute;left:84px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДт1',
			text: 'Субконто Дт1:',
			style: 'position:absolute;left:0px;top:24px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт1',
			style: 'position:absolute;left:84px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДт2',
			text: 'Субконто Дт2:',
			style: 'position:absolute;left:0px;top:48px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт2',
			style: 'position:absolute;left:84px;top:48px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДт3',
			text: 'Субконто Дт3:',
			style: 'position:absolute;left:0px;top:72px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт3',
			style: 'position:absolute;left:84px;top:72px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасчетовСКонтрагентомНУ',
			text: 'Счет НУ:',
			style: 'position:absolute;left:0px;top:99px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентомНУ',
			style: 'position:absolute;left:84px;top:99px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУДт1',
			text: 'Субконто НУ Дт1:',
			style: 'position:absolute;left:0px;top:124px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУДт1',
			style: 'position:absolute;left:84px;top:124px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУДт2',
			text: 'Субконто НУ Дт2:',
			style: 'position:absolute;left:0px;top:149px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУДт2',
			style: 'position:absolute;left:84px;top:149px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУДт3',
			text: 'Субконто НУ Дт3:',
			style: 'position:absolute;left:0px;top:174px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУДт3',
			style: 'position:absolute;left:84px;top:174px;width:220px;height:19px;',
		},
					]
				},
				{
					title:'Перечисление ЗП',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:641px;height:156px;',
			height: 156,width: 641,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Ведомость',
					width:'143',
				},
				{
					text:'Работник',
					width:'130',
				},
				{
					text:'Сумма платежа',
					width:'137',
				},
				{
					text:'Статья движения денежных средств',
					width:'101',
				},
				{
					text:'Документ планирования платежа',
					width:'183',
				},
				{
					text:'Проект',
					width:'153',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:21px;width:641px;height:24px;',
			items:
			[
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'Закончить редактирование',
				},
			]
		},
					]
				},
				{
					title:'Перевод на другой счет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтатья3',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:0px;top:0px;width:74px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредствПеревод',
			style: 'position:absolute;left:84px;top:0px;width:220px;height:19px;',
		},
					]
				},
				{
					title:'Выдача подотчетнику',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВалютаВзаиморасчетовПодотчетника',
			text: 'Валюта:',
			style: 'position:absolute;left:0px;top:24px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодотчетник',
			text: 'Подотчетник:',
			style: 'position:absolute;left:0px;top:0px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументПодотчетник',
			text: 'Аванс. отчет:',
			style: 'position:absolute;left:0px;top:48px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяПодотчетник',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:0px;top:97px;width:79px;height:27px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроектПодотчетник',
			text: 'Проект:',
			style: 'position:absolute;left:0px;top:73px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаВзаиморасчетовПодотчетник',
			style: 'position:absolute;left:84px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФизЛицоПодотчетник',
			style: 'position:absolute;left:84px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасчетныйДокументРаботника',
			style: 'position:absolute;left:84px;top:48px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетовПодотчетник',
			style: 'position:absolute;left:226px;top:24px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредствПодотчетник',
			style: 'position:absolute;left:84px;top:97px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроектПодотчетник',
			style: 'position:absolute;left:84px;top:73px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПогашенияАванса',
			style: 'position:absolute;left:424px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДокументаПодотчетник',
			style: 'position:absolute;left:424px;top:24px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПланированияПлатежаПодотчетник',
			style: 'position:absolute;left:424px;top:48px;width:217px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетовПланПодотчетник',
			style: 'position:absolute;left:424px;top:73px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПлатежаПланПодотчетник',
			style: 'position:absolute;left:424px;top:97px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурсаЗаявкиПодотчетник',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:531px;top:73px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаВзаиморасчетовПодотчетник',
			text: 'USD',
			style: 'position:absolute;left:531px;top:24px;width:40px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСумма',
			text: 'Сумма:',
			style: 'position:absolute;left:8px;top:129px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДокумента',
			style: 'position:absolute;left:92px;top:129px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумент',
			text: 'USD',
			style: 'position:absolute;left:201px;top:129px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтразитьВ',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:32px;width:90px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'опер. учете',
			style: 'position:absolute;left:430px;top:32px;width:74px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:507px;top:32px;width:69px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:577px;top:32px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРедактировать',
			text: 'Редактировать:',
			style: 'position:absolute;left:336px;top:129px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:380px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:92px;top:380px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:380px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:429px;top:380px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:92px;top:404px;width:557px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:404px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер1',
			text: 'Входящий номер:',
			style: 'position:absolute;left:336px;top:57px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерВходящегоДокумента',
			style: 'position:absolute;left:429px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт1',
			text: 'от:',
			style: 'position:absolute;left:511px;top:57px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВходящегоДокумента',
			style: 'position:absolute;left:529px;top:57px;width:120px;height:19px;',
		},
	]
});