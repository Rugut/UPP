Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормированиеПодтверждений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:742px;height:518px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Формирование подтверждений',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:106px;width:726px;height:379px;',
			height: 379,width: 726,
			columns:
			[
				{
					text:'',
					width:'35',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'',
					width:'35',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'',
					width:'35',
					dataIndex:'ОтветНаПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'',
					width:'35',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'',
					width:'35',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'',
					width:'35',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'',
					width:'35',
					dataIndex:'ОтветНаЗапрос',
					flex:1,
				},
				{
					text:'',
					width:'34',
					dataIndex:'ОтветНаОтветНаЗапрос',
					flex:1,
				},
				{
					text:'',
					width:'34',
					dataIndex:'Возврат',
					flex:1,
				},
				{
					text:'',
					width:'34',
					dataIndex:'ПодтверждениеВозврата',
					flex:1,
				},
				{
					text:'Тип',
					width:'78',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Наименование',
					width:'81',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Дата создания',
					width:'126',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'100',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Налоговый орган',
					width:'120',
					dataIndex:'НалоговыйОрган',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеОтправки',
					},
					{
						name:'ОтветНаПодтверждениеОтправки',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ПротоколПроверки',
					},
					{
						name:'ПодтверждениеНаПротоколПроверки',
					},
					{
						name:'ОтветНаЗапрос',
					},
					{
						name:'ОтветНаОтветНаЗапрос',
					},
					{
						name:'Возврат',
					},
					{
						name:'ПодтверждениеВозврата',
					},
					{
						name:'Тип',
					},
					{
						name:'Наименование',
					},
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'Организация',
					},
					{
						name:'НалоговыйОрган',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:8px;width:131px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:142px;top:8px;width:592px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидыЦикловОбмена',
			text: 'Типы циклов обмена:',
			style: 'position:absolute;left:8px;top:35px;width:131px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидЦиклаОбмена',
			style: 'position:absolute;left:296px;top:35px;width:438px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Без учета завершенных циклов обмена',
			style: 'position:absolute;left:509px;top:61px;width:225px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:80px;width:726px;height:3px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать подтверждения на нераспакованные сообщения',
			style: 'position:absolute;left:142px;top:61px;width:359px;height:15px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Все',
			style: 'position:absolute;left:142px;top:35px;width:41px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Заданный:',
			style: 'position:absolute;left:214px;top:35px;width:75px;height:19px;',
		},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:493px;width:742px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:82px;width:726px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Пометить все',
				},
				{
					text:'Снять флажки у всех',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
	]
});