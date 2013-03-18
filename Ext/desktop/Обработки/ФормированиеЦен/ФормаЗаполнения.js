Ext.define('Обработки.ФормированиеЦен.ФормаЗаполнения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:676px;height:338px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Формирование цен',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:660px;height:276px;',
			height: 276,width: 660,
			items:
			[
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:646px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Включить все',
				},
				{
					text:'Выключить все',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:646px;height:220px;',
			height: 220,width: 646,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип сравнения',
					width:'60',
				},
				{
					text:'Значение',
					width:'221',
				},
				{
					text:'С',
					width:'221',
				},
				{
					text:'По',
					width:'221',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:313px;width:676px;height:25px;',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:284px;width:660px;height:21px;',
			height: 21,width: 660,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Включать товары, для которых цены не установлены',
			style: 'position:absolute;left:0px;top:6px;width:321px;height:15px;',
		},
					]
				},
			]
		},
	]
});