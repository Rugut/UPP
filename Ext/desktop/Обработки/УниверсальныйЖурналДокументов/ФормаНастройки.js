Ext.define('Обработки.УниверсальныйЖурналДокументов.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 399,width: 681,
	iconCls: 'bogus',
	title: 'Общий журнал документов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:196px;width:255px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьАвтоматическиВсеОбщиеГрафы',
				},
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:374px;width:681px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:269px;top:220px;width:404px;height:146px;',
			height: 146,width: 404,
			columns:
			[
				{
					text:'Представление',
				},
				{
					text:'Имя',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:220px;width:255px;height:146px;',
			height: 146,width: 255,
			columns:
			[
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:618px;top:5px;width:55px;height:24px;',
			items:
			[
				{
					text:'Удалить',
				},
				{
					text:'Изменить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:614px;top:196px;width:59px;height:24px;',
			items:
			[
				{
					text:'УстановитьФлажки',
				},
				{
					text:'ОтметитьВыбранныйРеквизитВоВсехДокументах',
				},
				{
					text:'СнятьФлажки',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:29px;width:665px;height:146px;',
			height: 146,width: 665,
			columns:
			[
				{
					text:'',
				},
			]
		},
	]
});