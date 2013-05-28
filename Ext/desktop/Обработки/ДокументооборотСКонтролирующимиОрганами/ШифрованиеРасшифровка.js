Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ШифрованиеРасшифровка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:704px;height:530px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Шифрование и расшифровка сообщений',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:128px;width:688px;height:369px;',
			height: 369,width: 688,
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
					width:'35',
					dataIndex:'ОтветНаОтветНаЗапрос',
					flex:1,
				},
				{
					text:'',
					width:'35',
					dataIndex:'Возврат',
					flex:1,
				},
				{
					text:'',
					width:'35',
					dataIndex:'ПодтверждениеВозврата',
					flex:1,
				},
				{
					text:'Тип',
					width:'75',
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
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			trigger2Cls: 'x-form-select-trigger',
			trigger3Cls: 'x-form-clear-trigger',
			name: 'Организация',
			width: 554,
			height: 19,
			style: 'position:absolute;left:142px;top:8px;width:554px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОперации',
			text: 'Фильтр по сообщениям:',
			style: 'position:absolute;left:8px;top:32px;width:131px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидыЦикловОбмена',
			text: 'Типы циклов обмена:',
			style: 'position:absolute;left:8px;top:57px;width:131px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидЦиклаОбмена',
			width: 400,
			height: 19,
			style: 'position:absolute;left:296px;top:57px;width:400px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Требущие расшифровки',
			style: 'position:absolute;left:142px;top:34px;width:147px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Требущие шифрования',
			style: 'position:absolute;left:296px;top:34px;width:140px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Без учета завершенных циклов обмена',
			style: 'position:absolute;left:142px;top:83px;width:225px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:102px;width:688px;height:3px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Режим шифрования первичных сообщений',
			style: 'position:absolute;left:441px;top:34px;width:241px;height:15px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Все',
			style: 'position:absolute;left:142px;top:57px;width:41px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Заданный:',
			style: 'position:absolute;left:214px;top:57px;width:75px;height:19px;',
		},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:505px;width:704px;height:25px;',
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
			style: 'position:absolute;left:8px;top:104px;width:688px;height:24px;',
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