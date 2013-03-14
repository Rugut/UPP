Ext.define('Обработки.УниверсальныйОбменДаннымиXML.ФормаРедактораТекстовогоДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:638px;height:575px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Модуль отладки обработчиков и алгоритмов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:638px;height:25px;',
			items:
			[
				{
					text:'Копировать в буфер обмена',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:622px;height:534px;',
			height: 534,width: 622,
			items:
			[
				{
					title:'Модуль отладки',
				},
				{
					title:'Ошибки выгрузки',
				},
				{
					title:'Страница1',
				},
			]
		},
	]
});