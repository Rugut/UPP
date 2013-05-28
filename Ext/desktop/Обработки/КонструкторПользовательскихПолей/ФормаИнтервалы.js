Ext.define('Обработки.КонструкторПользовательскихПолей.ФормаИнтервалы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:307px;height:414px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Конструктор пользовательского поля',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьЗначение',
			text: 'Поле:',
			style: 'position:absolute;left:8px;top:8px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:32px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 203,
			height: 19,
			style: 'position:absolute;left:96px;top:32px;width:203px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:97px;width:291px;height:284px;',
			height: 284,width: 291,
			columns:
			[
				{
					text:'Граница',
					width:'100',
					dataIndex:'Граница',
					flex:1,
				},
				{
					text:'Представление',
					width:'100',
					dataIndex:'Представление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторПользовательскихПолей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Граница',
					},
					{
						name:'Представление',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Интервалы',
			style: 'position:absolute;left:8px;top:53px;width:291px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Значение',
			width: 203,
			height: 19,
			style: 'position:absolute;left:96px;top:8px;width:203px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:389px;width:307px;height:25px;',
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
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:72px;width:291px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'Удалить',
				},
				'-',
				{
					text:'',
				},
			]
		},
	]
});