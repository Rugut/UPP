Ext.define('Документы.ОтражениеЗарплатыВУпрУчете.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:566px;height:456px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отражение зарплаты в упр учете',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:252px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:338px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:438px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:8px;top:33px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:252px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:338px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:404px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:404px;width:464px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:222px;width:550px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:246px;width:550px;height:150px;',
			height: 150,width: 550,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Затрата',
					width:'80',
					dataIndex:'КатегорияЗатраты',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'120',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'120',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'100',
					dataIndex:'НоменклатурнаяГруппа',
					flex:1,
				},
				{
					text:'Способ распределения затрат',
					width:'100',
					dataIndex:'СпособРаспределенияЗатрат',
					flex:1,
				},
				{
					text:'Объект строительства',
					width:'80',
					dataIndex:'ОбъектСтроительства',
					flex:1,
				},
				{
					text:'Сумма',
					width:'63',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Проект',
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтражениеЗарплатыВУпрУчете/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'КатегорияЗатраты',
					},
					{
						name:'Подразделение',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'НоменклатурнаяГруппа',
					},
					{
						name:'СпособРаспределенияЗатрат',
					},
					{
						name:'ОбъектСтроительства',
					},
					{
						name:'Сумма',
					},
					{
						name:'Проект',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:431px;width:566px;height:25px;',
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
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:418px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:566px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Редактировать номер',
				},
					]
				},
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:82px;width:550px;height:92px;',
			height: 92,width: 550,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаРассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:0px;top:20px;width:80px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗарплата',
			text: 'Зарплата:',
			style: 'position:absolute;left:105px;top:20px;width:51px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Зарплата',
			style: 'position:absolute;left:161px;top:20px;width:102px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕСН',
			text: 'ЕСН:',
			style: 'position:absolute;left:105px;top:44px;width:51px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕСН',
			style: 'position:absolute;left:161px;top:44px;width:102px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНДФЛ',
			text: 'НДФЛ:',
			style: 'position:absolute;left:105px;top:68px;width:51px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НДФЛ',
			style: 'position:absolute;left:161px;top:68px;width:102px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнформация',
			text: 'Затраты, рассчитанные автоматически, можно скорректировать вручную, если это необходимо',
			style: 'position:absolute;left:302px;top:20px;width:248px;height:28px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнформацияНалоги',
			text: 'ЕСН и НДФЛ не выделены из общей суммы затрат',
			style: 'position:absolute;left:302px;top:60px;width:172px;height:28px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСправка',
			text: 'Справка',
			style: 'position:absolute;left:479px;top:60px;width:71px;height:28px;text-align:center;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:8px;top:195px;width:80px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОчистить',
			text: 'Очистить',
			style: 'position:absolute;left:113px;top:195px;width:80px;height:22px;',
		},
	]
});