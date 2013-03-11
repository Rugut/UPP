Ext.define('Обработки.УниверсальныйПоискОбъектов.ФормаНастройкиПостроителя',
	{
	extend: 'Ext.window.Window',
	height: 480,width: 576,
	iconCls: 'bogus',
	title: 'Дополнительные параметры ограничений',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:576px;height:25px;',
			items:
			[
				{
					text:'Отмена',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПоУмолчанию',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:48px;width:560px;height:202px;',
			height: 202,width: 560,
			columns:
			[
				{
					text:'Представление',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:256px;width:560px;height:192px;',
			height: 192,width: 560,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:42px;width:560px;height:150px;',
			height: 150,width: 560,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:17px;width:560px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:24px;width:560px;height:24px;',
			items:
			[
				{
					text:'ОтменитьВыделениеВсехПолей',
				},
				{
					text:'ОтметитьВсеПоля',
				},
			]
		},
	]
});