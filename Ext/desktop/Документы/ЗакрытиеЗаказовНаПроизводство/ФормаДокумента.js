Ext.define('Документы.ЗакрытиеЗаказовНаПроизводство.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:650px;height:401px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Закрытие заказов на производство',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:174px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:349px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:84px;top:33px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:349px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:334px;top:325px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:422px;top:325px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:125px;width:634px;height:195px;',
			height: 195,width: 634,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Заказ на производство',
					width:'220',
					dataIndex:'ЗаказНаПроизводство',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'133',
					dataIndex:'ПодразделениеЗаказа',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'120',
					dataIndex:'ОтветственныйЗаЗаказ',
					flex:1,
				},
				{
					text:'Причина закрытия заказа',
					width:'120',
					dataIndex:'ПричинаЗакрытияЗаказа',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'ОрганизацияЗаказа',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗакрытиеЗаказовНаПроизводство/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ЗаказНаПроизводство',
					},
					{
						name:'ПодразделениеЗаказа',
					},
					{
						name:'ОтветственныйЗаЗаказ',
					},
					{
						name:'ПричинаЗакрытияЗаказа',
					},
					{
						name:'ОрганизацияЗаказа',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:101px;width:634px;height:24px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеКомпании',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:325px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:94px;top:325px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:376px;width:650px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'ОК',
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
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:56px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:56px;width:230px;height:19px;',
		},
	]
});