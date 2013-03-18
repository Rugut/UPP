Ext.define('Обработки.УниверсальныйЖурналДокументов.ФормаОтбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:460px;height:302px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отбор и сортировка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:277px;width:460px;height:25px;',
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
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:5px;top:5px;width:450px;height:266px;',
			height: 266,width: 450,
			items:
			[
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:210px;',
			height: 210,width: 436,
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
					width:'100',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Сортировка',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:210px;',
			height: 210,width: 436,
			columns:
			[
				{
					text:'Поле',
					width:'214',
				},
				{
					text:'Направление сортировки',
					width:'63',
				},
			]
		},
					]
				},
			]
		},
	]
});