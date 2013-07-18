Ext.require(['Данные.Обработки.УниверсальныйОбменДаннымиXML'], function () 
{
	Ext.define('Обработки.УниверсальныйОбменДаннымиXML.ФормаРедактораТекстовогоДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:638px;height:575px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Модуль отладки обработчиков и алгоритмов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
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
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:638px;height:25px;',
			dock: 'top',
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
	]
	});
});