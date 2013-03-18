Ext.define('Отчеты.АнализЦен.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:490px;height:310px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:7px;width:474px;height:270px;',
			height: 270,width: 474,
			items:
			[
				{
					title:'Основные параметры',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаНач',
			style: 'position:absolute;left:60px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'На дату:',
			style: 'position:absolute;left:6px;top:6px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать измерения',
			style: 'position:absolute;left:6px;top:30px;width:160px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:6px;top:50px;width:212px;height:15px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:113px;width:460px;height:131px;',
			height: 131,width: 460,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Показатель',
					width:'439',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:89px;width:460px;height:24px;',
			items:
			[
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
					text:'',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаОтчета',
			style: 'position:absolute;left:208px;top:6px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Группировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:240px;height:198px;',
			height: 198,width: 240,
			columns:
			[
				{
					text:'Поле',
					width:'120',
				},
				{
					text:'Тип',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:240px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:252px;top:46px;width:214px;height:198px;',
			height: 198,width: 214,
			columns:
			[
				{
					text:'Поле',
					width:'120',
				},
				{
					text:'Тип',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:252px;top:22px;width:214px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Поля',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:220px;',
			height: 220,width: 460,
			columns:
			[
				{
					text:'Поле',
					width:'549',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:220px;',
			height: 220,width: 460,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'120',
				},
				{
					text:'Тип сравнения',
					width:'80',
				},
				{
					text:'Значение',
					width:'240',
				},
				{
					text:'С',
					width:'120',
				},
				{
					text:'По',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'ВВалюте',
			text: 'в валюте:',
			style: 'position:absolute;left:142px;top:6px;width:64px;height:19px;text-align:center;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:285px;width:490px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
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
	]
});