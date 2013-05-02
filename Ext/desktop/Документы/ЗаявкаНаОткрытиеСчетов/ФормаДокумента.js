Ext.define('Документы.ЗаявкаНаОткрытиеСчетов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:647px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заявка на открытие счетов',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:86px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:168px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:186px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:86px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:325px;top:57px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:419px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБанковскийСчет',
			text: 'Зарплатный счет:',
			style: 'position:absolute;left:325px;top:103px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БанковскийСчет',
			style: 'position:absolute;left:419px;top:103px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДоговора',
			text: '№ договора:',
			style: 'position:absolute;left:14px;top:129px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДоговора',
			style: 'position:absolute;left:86px;top:129px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:398px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:86px;top:398px;width:553px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодВида',
			text: 'Код вида:',
			style: 'position:absolute;left:14px;top:202px;width:64px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:244px;width:631px;height:24px;',
			items:
			[
				{
					text:'Подбор',
				},
				'-',
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:268px;width:631px;height:125px;',
			height: 125,width: 631,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Физическое лицо',
					width:'207',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Номер лицевого счета',
					width:'180',
					dataIndex:'НомерЛицевогоСчета',
					flex:1,
				},
				{
					text:'Эмбоссированный текст',
					width:'100',
					dataIndex:'ЭмбоссированныйТекст',
					flex:1,
				},
				{
					text:'Имя (лат.)',
					width:'120',
					dataIndex:'ЭмбоссированныйТекст1',
					flex:1,
				},
				{
					text:'Фамилия (лат.)',
					width:'120',
					dataIndex:'ЭмбоссированныйТекст2',
					flex:1,
				},
				{
					text:'Титул (лат.)',
					width:'120',
					dataIndex:'ЭмбоссированныйТекст3',
					flex:1,
				},
				{
					text:'Резидент',
					width:'100',
					dataIndex:'Резидент',
					flex:1,
				},
				{
					text:'Гражданство',
					width:'100',
					dataIndex:'Гражданство',
					flex:1,
				},
				{
					text:'Миграционная карта',
					width:'100',
					dataIndex:'МиграционнаяКарта',
					flex:1,
				},
				{
					text:'Номер',
					width:'100',
					dataIndex:'НомерМиграционнойКарты',
					flex:1,
				},
				{
					text:'Дата начала пребывания',
					width:'100',
					dataIndex:'ДатаНачалаПребыванияМиграционнойКарты',
					flex:1,
				},
				{
					text:'Дата окончания пребывания',
					width:'100',
					dataIndex:'ДатаОкончанияПребыванияМиграционнойКарты',
					flex:1,
				},
				{
					text:'Миграционный документ',
					width:'100',
					dataIndex:'МиграционныйДокумент',
					flex:1,
				},
				{
					text:'Код',
					width:'100',
					dataIndex:'КодМиграционногоДокумента',
					flex:1,
				},
				{
					text:'Номер',
					width:'100',
					dataIndex:'НомерМиграционногоДокумента',
					flex:1,
				},
				{
					text:'Дата начала пребывания',
					width:'100',
					dataIndex:'ДатаНачалаПребыванияМиграционногоДокумента',
					flex:1,
				},
				{
					text:'Дата окончания пребывания',
					width:'100',
					dataIndex:'ДатаОкончанияПребыванияМиграционногоДокумента',
					flex:1,
				},
				{
					text:'Контрольная информация',
					width:'141',
					dataIndex:'КонтрольнаяИнформация',
					flex:1,
				},
				{
					text:'Должность',
					width:'100',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Рабочий телефон',
					width:'100',
					dataIndex:'РабочийТелефон',
					flex:1,
				},
				{
					text:'Домашний телефон',
					width:'100',
					dataIndex:'ДомашнийТелефон',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Прогнозируемый месячный доход',
					width:'100',
					dataIndex:'ПрогнозируемыйМесячныйДоход',
					flex:1,
				},
				{
					text:'Признак зарплатный',
					width:'100',
					dataIndex:'ПризнакЗарплатный',
					flex:1,
				},
				{
					text:'Категория населения',
					width:'100',
					dataIndex:'КатегорияНаселения',
					flex:1,
				},
				{
					text:'Бонус участника',
					width:'100',
					dataIndex:'БонусУчастника',
					flex:1,
				},
				{
					text:'Тариф следующий год',
					width:'100',
					dataIndex:'ТарифСледующийГод',
					flex:1,
				},
				{
					text:'Тариф текущий год',
					width:'100',
					dataIndex:'ТарифТекущийГод',
					flex:1,
				},
				{
					text:'Бонус программа',
					width:'100',
					dataIndex:'БонусПрограмма',
					flex:1,
				},
				{
					text:'Признак рассылки',
					width:'100',
					dataIndex:'ПризнакРассылки',
					flex:1,
				},
				{
					text:'Интернет адрес',
					width:'100',
					dataIndex:'ИнтернетАдрес',
					flex:1,
				},
				{
					text:'Счет дебета',
					width:'100',
					dataIndex:'СчетДебета',
					flex:1,
				},
				{
					text:'Мобильный телефон',
					width:'100',
					dataIndex:'МобильныйТелефон',
					flex:1,
				},
				{
					text:'Оператор связи',
					width:'100',
					dataIndex:'ОператорСвязи',
					flex:1,
				},
				{
					text:'Мобильный банк',
					width:'100',
					dataIndex:'МобильныйБанк',
					flex:1,
				},
				{
					text:'Передача БКИ',
					width:'100',
					dataIndex:'ПередачаБКИ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаявкаНаОткрытиеСчетов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'НомерЛицевогоСчета',
					},
					{
						name:'ЭмбоссированныйТекст',
					},
					{
						name:'ЭмбоссированныйТекст1',
					},
					{
						name:'ЭмбоссированныйТекст2',
					},
					{
						name:'ЭмбоссированныйТекст3',
					},
					{
						name:'Резидент',
					},
					{
						name:'Гражданство',
					},
					{
						name:'МиграционнаяКарта',
					},
					{
						name:'НомерМиграционнойКарты',
					},
					{
						name:'ДатаНачалаПребыванияМиграционнойКарты',
					},
					{
						name:'ДатаОкончанияПребыванияМиграционнойКарты',
					},
					{
						name:'МиграционныйДокумент',
					},
					{
						name:'КодМиграционногоДокумента',
					},
					{
						name:'НомерМиграционногоДокумента',
					},
					{
						name:'ДатаНачалаПребыванияМиграционногоДокумента',
					},
					{
						name:'ДатаОкончанияПребыванияМиграционногоДокумента',
					},
					{
						name:'КонтрольнаяИнформация',
					},
					{
						name:'Должность',
					},
					{
						name:'РабочийТелефон',
					},
					{
						name:'ДомашнийТелефон',
					},
					{
						name:'Сумма',
					},
					{
						name:'ПрогнозируемыйМесячныйДоход',
					},
					{
						name:'ПризнакЗарплатный',
					},
					{
						name:'КатегорияНаселения',
					},
					{
						name:'БонусУчастника',
					},
					{
						name:'ТарифСледующийГод',
					},
					{
						name:'ТарифТекущийГод',
					},
					{
						name:'БонусПрограмма',
					},
					{
						name:'ПризнакРассылки',
					},
					{
						name:'ИнтернетАдрес',
					},
					{
						name:'СчетДебета',
					},
					{
						name:'МобильныйТелефон',
					},
					{
						name:'ОператорСвязи',
					},
					{
						name:'МобильныйБанк',
					},
					{
						name:'ПередачаБКИ',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:647px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				'-',
				{
					text:'Редактировать номер',
				},
					]
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Лицевые счета сотрудников организации',
				},
				{
					text:'',
				},
					]
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:647px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьБанк',
			text: 'Контрагент:',
			style: 'position:absolute;left:14px;top:102px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПодвида',
			text: 'Код подвида:',
			style: 'position:absolute;left:164px;top:202px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодВалюты',
			text: 'Код валюты:',
			style: 'position:absolute;left:164px;top:177px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Банк',
			style: 'position:absolute;left:86px;top:102px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодВида',
			style: 'position:absolute;left:78px;top:202px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПодВида',
			style: 'position:absolute;left:234px;top:202px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодВалюты',
			style: 'position:absolute;left:234px;top:177px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидВклада',
			text: 'Вид вклада:',
			style: 'position:absolute;left:14px;top:177px;width:64px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидВкладаСтрокой',
			style: 'position:absolute;left:78px;top:177px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Ввод начальных сведений',
			style: 'position:absolute;left:325px;top:33px;width:162px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыплатыЗаработнойПлаты',
			text: 'День выплаты заработной платы:',
			style: 'position:absolute;left:325px;top:177px;width:177px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыплатыЗаработнойПлаты',
			style: 'position:absolute;left:504px;top:177px;width:49px;height:19px;',
		},
	]
});