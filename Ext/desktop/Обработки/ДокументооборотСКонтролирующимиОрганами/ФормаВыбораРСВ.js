Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормаВыбораРСВ',
	{
	extend: 'Ext.window.Window',
	height: 410,width: 588,
	iconCls: 'bogus',
	title: 'Выбор расчета по страховым взносам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:385px;width:588px;height:25px;',
			items:
			[
				{
					text:'Продолжить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Отмена',
				},
				{
					text:'РазделительУдалитьПривязку',
				},
				{
					text:'УдалитьПривязку',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:572px;height:369px;',
			height: 369,width: 572,
			items:
			[
				{
					title:'СтраницаРСВ',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:105px;width:572px;height:25px;',
			items:
			[
				{
					text:'Открыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:130px;width:572px;height:239px;',
			height: 239,width: 572,
			columns:
			[
				{
					text:'Статус',
				},
				{
					text:'НаименованиеОтчета',
				},
				{
					text:'Период',
				},
				{
					text:'Комментарий',
				},
			]
		},
					]
				},
			]
		},
	]
});