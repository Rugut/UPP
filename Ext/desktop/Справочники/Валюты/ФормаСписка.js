Ext.define('Справочники.Валюты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 285,width: 608,
	iconCls: 'bogus',
	title: 'Валюты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:592px;height:220px;',
			height: 220,width: 592,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'НаименованиеПолное',
				},
				{
					text:'Курс',
				},
				{
					text:'Кратность',
				},
				{
					text:'ПараметрыПрописиНаРусском',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			items:
			[
				{
					text:'ЗагрузитьКурсы',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'ДействиеПодбор',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКурса',
			style: 'position:absolute;left:74px;top:33px;width:80px;height:19px;',
		},
	]
});