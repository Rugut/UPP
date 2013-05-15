Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ПечатьРегламентированныхОтчетов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:740px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Предварительный просмотр',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:51px;width:198px;height:244px;',
			height: 244,width: 198,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'159',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Табличный документ',
					width:'100',
					dataIndex:'ТабличныйДокумент',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбщиеОбъектыРегламентированнойОтчетности/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Пометка',
					},
					{
						name:'Наименование',
					},
					{
						name:'ТабличныйДокумент',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'ТекстСтатистики',
			text: '',
			style: 'position:absolute;left:11px;top:430px;width:417px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Печатаемые листы',
			style: 'position:absolute;left:8px;top:7px;width:198px;height:17px;',
		},
		{
			xtype: 'fieldset',
			title: 'Параметры печати',
			style: 'position:absolute;left:8px;top:301px;width:198px;height:16px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоКопий',
			style: 'position:absolute;left:117px;top:319px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоКопий',
			text: 'Количество копий:',
			style: 'position:absolute;left:14px;top:320px;width:100px;height:18px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'разобрать по копиям',
			style: 'position:absolute;left:14px;top:340px;width:131px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Параметры таблицы',
			style: 'position:absolute;left:8px;top:361px;width:197px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'отображать сетку',
			style: 'position:absolute;left:14px;top:381px;width:111px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'отображать заголовки',
			style: 'position:absolute;left:14px;top:401px;width:135px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Содержание',
			style: 'position:absolute;left:212px;top:7px;width:521px;height:17px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:740px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:25px;width:198px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Установить пометки',
				},
				{
					text:'Снять пометки',
				},
				'-',
				{
					text:'Раскрыть',
				},
				{
					text:'Свернуть',
				},
				'-',
				{
					text:'Переместить вниз',
				},
				{
					text:'Переместить вверх',
				},
			]
		},
	]
});